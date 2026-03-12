import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { watchlistService } from "@/services/watchlistService";
import { WatchlistAnime, WatchlistInsert } from "@/types/watchlist";

export const useWatchlist = (userId: string) => {
  const queryClient = useQueryClient(); 
  const watchlistKey = ['watchlist', userId];

  const watchlist = useQuery({
    queryKey: watchlistKey,
    queryFn: () => watchlistService.getAll(userId),
    enabled: !!userId,
  });
  
  const addToWatchlist = useMutation({
    mutationFn: (input: WatchlistInsert) => watchlistService.create(input, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: watchlistKey })
    },
  });

  const deleteFromWatchlist = useMutation({
    mutationFn: (id: string) => watchlistService.delete(id, userId),

    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: watchlistKey })

      const previousWatchlist = queryClient.getQueryData(watchlistKey)
      
      queryClient.setQueryData(watchlistKey, (old: WatchlistAnime[]) =>
        old?.filter((item) => item.id !== id)
      )

      return { previousWatchlist }
    },

    onError: (_err, _id, context) => {
      queryClient.setQueryData(['watchlist', userId], context?.previousWatchlist);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['watchlist', userId] })
    },
  });

  const isInWatchlist = (malId: number) => 
    (watchlist.data ?? []).some((item) => item.mal_id === malId);


  return {
    watchlist: watchlist.data ?? [],
    watchlistLoading: watchlist.isLoading,
    watchlistError: watchlist.error,

    addToWatchlist: addToWatchlist.mutate,
    addingToWatchlist: addToWatchlist.isPending,

    deleteFromWatchlist: deleteFromWatchlist.mutate,
    deletingFromWatchlist: deleteFromWatchlist.isPending,

    // HELPER
    isInWatchlist,
  }
};


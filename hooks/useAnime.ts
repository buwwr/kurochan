import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { animeService } from "@/services/animeService"

export const useAnime = () => {
  const allAnime = useInfiniteQuery({
    queryKey: ['anime', 'all'],
    queryFn: (pageParam) => animeService.getAll(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.pagination.has_next_page) {
        return lastPage.pagination.current_page + 1;
      }
      
      return undefined;
    },
  })

  const topAnimeMonth = useQuery({
    queryKey: ['anime', 'top-month'],
    queryFn: () => animeService.getTopThisMonth(),
  })

  return {
    // All Anime
    allAnime: allAnime.data,
    allAnimeLoading: allAnime.isLoading,
    allAnimeError: allAnime.error,
    allAnimeNextPage: allAnime.fetchNextPage,
    allAnimeHasNextPage: allAnime.hasNextPage,
    allAnimeFetchingNextPage: allAnime.isFetchingNextPage,

    // Top this month
    topAnimeMonth: topAnimeMonth.data,
    topAnimeMonthLoading: topAnimeMonth.isLoading,
    topAnimeMonthError: topAnimeMonth.error,
  }
}
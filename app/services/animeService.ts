import { mapAnime } from "@/app/mappers/jikanToAnime";
import { Anime, PaginatedResponse } from "../types/anime"

const BASE = process.env.NEXT_PUBLIC_API_URL;

export const animeService = {
  getAll: async ({ pageParam }: { pageParam: number }): Promise<PaginatedResponse<Anime>> => {
    const res = await fetch(`${BASE}/api/anime?page=${pageParam}`)
    if (!res.ok) throw new Error("Failed to fetch top anime");
    const data = await res.json();
    return {
      data: data.data.map(mapAnime),
      pagination: data.pagination,
    }
  },

  getTopThisMonth: async (): Promise<Anime[]> => {
    const res = await fetch(`${BASE}/api/anime/top`)
    if (!res.ok) throw new Error("Failed to fetch top anime");
    const data = await res.json();
    return data.data.map(mapAnime) as Anime[];
  }, 

  getById: async (id: number): Promise<Anime> => {
    const res = await fetch(`${BASE}/api/anime/${id}`);
    if (!res.ok) throw new Error("Failed to fetch anime");
    const data = await res.json();
    return mapAnime(data.data)
  },
};
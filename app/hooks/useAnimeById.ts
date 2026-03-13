"use client";

import { animeService } from "@/app/services/animeService"
import { useQuery } from "@tanstack/react-query"

export const useAnimeById = (id: number) => {
  const animeById = useQuery({
    queryKey: ["anime"],
    queryFn: () => animeService.getById(id)
  })

  return {
    animeById: animeById.data,
    animeByIdLoading: animeById.isLoading,
    animeByIdError: animeById.error,
  }
}
import { Anime, RawAnime } from "@/types/anime";

export const mapAnime = (raw: RawAnime): Anime => ({
  mal_id: raw.mal_id,
  title_default: raw.titles.find(t => t.type === "Default")?.title ?? "Unknown",
  title_en: raw.titles.find(t => t.type === "English")?.title ?? null,
  title_jp: raw.titles.find(t => t.type === "Japanese")?.title ?? null,
  images_webp_url: raw.images.webp.image_url,
  images_webp_sm_url: raw.images.webp.small_image_url,
  images_webp_lg_url: raw.images.webp.large_image_url,
  type: raw.type,
  episodes: raw.episodes,
  synopsis: raw.synopsis,
  year: raw.year,
  score: raw.score,
  genres: raw.genres.map(g => g.name),
});
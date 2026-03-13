export interface Anime {
  mal_id: number;
  title_default: string;
  title_en: string | null;
  title_jp: string | null;
  images_webp_url: string; 
  images_webp_sm_url: string;
  images_webp_lg_url: string;
  type: string | null;
  episodes: number | null;
  synopsis: string | null;
  year: number | null;
  score: number | null;
  genres: string[];
};

export interface Pagination {
  has_next_page: boolean;
  current_page: number;
  last_visible_page: number;
};

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
};

export interface RawAnime {
  mal_id: number;
  titles: { type: string; title: string }[]
  images: { webp: { 
    image_url: string,
    small_image_url: string,
    large_image_url: string
  } }
  type: string | null;
  episodes: number | null;
  synopsis: string | null;
  year: number | null;
  score: number | null;
  genres: { mal_id: number; name: string }[];
};
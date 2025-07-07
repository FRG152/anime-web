interface AnimeTitle {
  en?: string;
  en_jp?: string;
  ja_jp?: string;
}

interface Image {
  tiny: string;
  small: string;
  medium?: string;
  large?: string;
  original: string;
}

interface RatingFrequencies {
  [rating: string]: string;
}

interface AnimeAttributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  coverImageTopOffset: number;
  titles: AnimeTitle;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: RatingFrequencies;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba: string;
  posterImage: Image;
  coverImage: Image;
  episodeCount: number;
  episodeLength: number;
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
}

interface AnimeLink {
  self: string;
}

export interface AnimeData {
  id: string;
  type: string;
  links: AnimeLink;
  attributes: AnimeAttributes;
}

export interface AnimeResponse {
  data: AnimeData[];
  meta: {
    count: number;
  };
  links: {
    first: string;
    prev: string;
    next: string;
    last: string;
  };
}

export interface GetAnimesParams {
  id?: string | "";
  filter?: string;
}

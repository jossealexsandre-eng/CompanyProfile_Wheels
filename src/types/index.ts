export type Language = 'id' | 'en';

export interface MenuItem {
  id: string;
  name: string;
  desc: {
    id: string;
    en: string;
  };
  price: string;
  image: string;
  tags: string[];
  badge?: string;
  category: 'coffee' | 'food' | 'dessert';
  dietary?: string[];
  pairing?: {
    id: string;
    en: string;
  };
}

export interface RoastBatch {
  id: string;
  code: string;
  origin: string;
  elevation: string;
  process: string;
  roastLevel: string;
  flavorProfile: string;
  aroma: number;
  sweetness: number;
  clarity: number;
  body: number;
  notes: {
    id: string;
    en: string;
  };
  curvePath: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  initials: string;
  time: {
    id: string;
    en: string;
  };
  rating: number;
  tag: 'coffee' | 'food' | 'space' | 'dessert';
  quote: {
    id: string;
    en: string;
  };
  body: {
    id: string;
    en: string;
  };
}

export interface GalleryItem {
  id: string;
  title: {
    id: string;
    en: string;
  };
  category: 'space' | 'coffee' | 'food' | 'craft';
  image: string;
  aspect: string;
}

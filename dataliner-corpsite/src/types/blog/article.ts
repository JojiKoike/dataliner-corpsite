import type { Content, Media } from 'newt-client-js';
import type { Category } from './category';
import type { Tag } from './tag';

export interface Article extends Content {
  title: string;
  abstract: string;
  slug: string;
  meta?: {
    title?: string;
    description?: string;
    ogImage?: Media;
  };
  body: string;
  coverImage?: Media;
  category: Category;
  tags: Tag[];
}

export interface Archive {
  year: number;
  count: number;
}

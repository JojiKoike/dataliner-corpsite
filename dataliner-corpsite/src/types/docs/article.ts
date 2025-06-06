import type { Content, Media } from 'newt-client-js';
import type { Category } from './category';

export interface Article extends Content {
  title: string;
  slug: string;
  meta?: {
    title?: string;
    description?: string;
    ogImage?: Media;
  };
  body: string;
  category: Category;
}

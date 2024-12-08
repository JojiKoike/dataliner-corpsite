import { createClient } from 'newt-client-js';

export interface Article {
  title: string;
  _sys: Sys;
  abstract: string;
  slug: string;
  body: string;
  category: Category;
  tags: Tag[];
  coverImage: ArticleImage;
  meta: ArticleMeta;
}

export interface Sys {
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  name: string;
  slug: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface ArticleImage {
  src: string;
  width: number;
  height: number;
  title: string;
  altText: string;
}

export interface ArticleMeta {
  title: string;
  description: string;
  ogImage: ArticleImage;
}

export interface Page {
  pageName: string;
  slug: string;
  meta: Meta;
  sections: Section[];
}

interface Meta {
  title: string;
  description: string;
}

interface Section {
  type: string;
  data: Data;
}

interface Data {
  titleCopy: string;
  text: string;
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
});

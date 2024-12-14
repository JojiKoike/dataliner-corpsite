import { newtClient } from '../newt';
import type { Category } from '../../types/docs/category';
import type { Article } from '../../types/docs/article';
import type { AppMeta, GetContentsQuery } from 'newt-client-js';

export const getApp = async (): Promise<AppMeta> => {
  const app = await newtClient.getApp({
    appUid: import.meta.env.NEWT_DOCS_APP_UID,
  });
  return app;
};

export const getCategories = async (): Promise<Category[]> => {
  const { items: categories } = await newtClient.getContents<Category>({
    appUid: import.meta.env.NEWT_DOCS_APP_UID,
    modelUid: import.meta.env.NEWT_DOCS_CATEGORY_MODEL_UID,
    query: {
      order: ['_sys.customOrder'],
    },
  });

  const { items: articles } = await newtClient.getContents<{
    category: string;
  }>({
    appUid: import.meta.env.NEWT_DOCS_APP_UID,
    modelUid: import.meta.env.NEWT_DOCS_ARTICLE_MODEL_UID,
    query: {
      depth: 0,
      select: ['category'],
    },
  });

  const getCategoryCount = (category: Category) => {
    return articles.filter((article) => {
      return article.category === category._id;
    }).length;
  };

  const validCategories = categories.filter((category) => {
    // 1件も記事のないカテゴリは除外
    return getCategoryCount(category) > 0;
  });

  return validCategories;
};

export const getArticles = async (
  query?: GetContentsQuery
): Promise<Article[]> => {
  const { items: articles } = await newtClient.getContents<Article>({
    appUid: import.meta.env.NEWT_DOCS_APP_UID,
    modelUid: import.meta.env.NEWT_DOCS_ARTICLE_MODEL_UID,
    query: {
      order: ['_sys.customOrder'],
      ...query,
    },
  });
  return articles;
};

export const getArticle = async (slug: string): Promise<Article> => {
  const article = await newtClient.getFirstContent<Article | null>({
    appUid: import.meta.env.NEWT_DOCS_APP_UID,
    modelUid: import.meta.env.NEWT_DOCS_ARTICLE_MODEL_UID,
    query: {
      depth: 2,
      order: ['_sys.customOrder'],
      slug,
    },
  });
  if (!article) {
    throw new Error(`Article with slug ${slug} not found`);
  }
  return article;
};

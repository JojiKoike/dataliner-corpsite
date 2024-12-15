import { newtClient } from '../newt';
import type { Archive, Article } from '../../types//blog/article';
import type { Category, CategoryWithCount } from '../../types/blog/category';
import type { Tag, TagWithCount } from '../../types/blog/tag';
import type { AppMeta, GetContentsQuery } from 'newt-client-js';

export const getApp = async (): Promise<AppMeta> => {
  const app = await newtClient.getApp({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
  });
  return app;
};

export const getArticles = async (
  query?: GetContentsQuery
): Promise<{ articles: Article[]; total: number }> => {
  const { items: articles, total } = await newtClient.getContents<Article>({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
    modelUid: import.meta.env.NEWT_BLOG_ARTICLE_MODEL_UID,
    query: {
      depth: 2,
      ...query,
    },
  });
  return { articles, total };
};

export const getArticle = async (slug: string): Promise<Article | null> => {
  const article = await newtClient.getFirstContent<Article | null>({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
    modelUid: import.meta.env.NEWT_BLOG_ARTICLE_MODEL_UID,
    query: {
      depth: 2,
      slug,
    },
  });
  return article;
};

export const getPreviousArticle = async (
  currentArticle: Article
): Promise<{ slug: string } | null> => {
  const { createdAt } = currentArticle._sys;
  const article = await newtClient.getFirstContent<{ slug: string }>({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
    modelUid: import.meta.env.NEWT_BLOG_ARTICLE_MODEL_UID,
    query: {
      select: ['slug'],
      '_sys.createdAt': {
        gt: createdAt,
      },
      order: ['_sys.createdAt'],
    },
  });
  return article;
};

export const getNextArticle = async (
  currentArticle: Article
): Promise<{ slug: string } | null> => {
  const { createdAt } = currentArticle._sys;
  const article = await newtClient.getFirstContent<{ slug: string }>({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
    modelUid: import.meta.env.NEWT_BLOG_ARTICLE_MODEL_UID,
    query: {
      select: ['slug'],
      '_sys.createdAt': {
        lt: createdAt,
      },
      order: ['_sys.createdAt'],
    },
  });
  return article;
};

export const getTags = async (): Promise<TagWithCount[]> => {
  const { items: tags } = await newtClient.getContents<Tag>({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
    modelUid: import.meta.env.NEWT_BLOG_TAG_MODEL_UID,
    query: {
      order: ['_sys.customOrder'],
    },
  });

  const { items: articles } = await newtClient.getContents<{
    tags: string[];
  }>({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
    modelUid: import.meta.env.NEWT_BLOG_ARTICLE_MODEL_UID,
    query: {
      depth: 0,
      select: ['tags'],
    },
  });

  const getTagCount = (tag: Tag) => {
    return articles.filter((article) => {
      return article.tags.includes(tag._id);
    }).length;
  };

  const popularTags: TagWithCount[] = tags
    .map((tag) => {
      return {
        ...tag,
        count: getTagCount(tag),
      };
    })
    .filter((tag) => {
      // 1件も記事のないタグは除外
      return getTagCount(tag) > 0;
    })
    .sort((a, b) => {
      return b.count - a.count;
    })
    // 上位10件のみ取得
    .slice(0, 10);
  return popularTags;
};

export const getTag = async (slug: string): Promise<Tag | null> => {
  if (!slug) {
    return null;
  }
  const tag = await newtClient.getFirstContent<Tag>({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
    modelUid: import.meta.env.NEWT_BLOG_TAG_MODEL_UID,
    query: {
      slug,
    },
  });
  return tag;
};

export const getCategories = async (): Promise<CategoryWithCount[]> => {
  const { items: categories } = await newtClient.getContents<Category>({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
    modelUid: import.meta.env.NEWT_BLOG_CATEGORY_MODEL_UID,
    query: {
      order: ['_sys.customOrder'],
    },
  });

  const { items: articles } = await newtClient.getContents<{
    category: string;
  }>({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
    modelUid: import.meta.env.NEWT_BLOG_ARTICLE_MODEL_UID,
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

  const popularCategories: CategoryWithCount[] = categories
    .map((category) => {
      return {
        ...category,
        count: getCategoryCount(category),
      };
    })
    .filter((category) => {
      // 1件も記事のないカテゴリは除外
      return getCategoryCount(category) > 0;
    })
    .sort((a, b) => {
      return b.count - a.count;
    })
    // 上位10件のみ取得
    .slice(0, 10);
  return popularCategories;
};

export const getCategory = async (slug: string): Promise<Category | null> => {
  if (!slug) {
    return null;
  }
  const category = await newtClient.getFirstContent<Category>({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
    modelUid: import.meta.env.NEWT_BLOG_CATEGORY_MODEL_UID,
    query: {
      slug,
    },
  });
  return category;
};

export const getArchives = async (): Promise<Archive[]> => {
  const { items: articles } = await newtClient.getContents<{
    _sys: { createdAt: string };
  }>({
    appUid: import.meta.env.NEWT_BLOG_APP_UID,
    modelUid: import.meta.env.NEWT_BLOG_ARTICLE_MODEL_UID,
    query: {
      select: ['_sys.createdAt'],
    },
  });
  const oldestArticle = articles.slice(-1)[0];
  const oldestYear = new Date(oldestArticle._sys.createdAt).getFullYear();
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - oldestYear + 1 },
    (_, index) => {
      return currentYear - index;
    }
  );

  const getArchiveCount = (year: number) => {
    return articles.filter((article) => {
      return article._sys.createdAt.startsWith(`${year}-`);
    }).length;
  };

  const archives = years
    .map((year) => {
      return {
        year,
        count: getArchiveCount(year),
      };
    })
    .filter((archive) => {
      // 1件も記事のない年は除外
      return archive.count > 0;
    });

  return archives;
};

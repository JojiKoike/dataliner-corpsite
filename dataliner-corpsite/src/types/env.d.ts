// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly NEWT_SPACE_UID: string;
  readonly NEWT_CDN_API_TOKEN: string;
  readonly NEWT_API_TYPE: 'cdn' | 'api';
  readonly NEWT_LANDING_PAGE_APP_UID: string;
  readonly NEWT_LANDINg_PAGE_MODEL_UID: string;
  readonly NEWT_DOCS_APP_UID: string;
  readonly NEWT_DOCS_CATEGORY_MODEL_UID: string;
  readonly NEWT_DOCS_ARTICLE_MODEL_UID: string;
  readonly NEWT_BLOG_APP_UID: string;
  readonly NEWT_BLOG_ARTICLE_MODEL_UID: string;
  readonly NEWT_BLOG_CATEGORY_MODEL_UID: string;
  readonly NEWT_BLOG_TAG_MODEL_UID: string;
  readonly NEWT_BLOG_ARTICLES_PER_PAGE_LIMIT: string;
  readonly PUBLIC_NEWT_FORM_UID: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
}

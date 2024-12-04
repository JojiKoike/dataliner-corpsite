import { createClient } from 'newt-client-js';

export interface Article {
  title: string;
  slug: string;
  body: string;
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

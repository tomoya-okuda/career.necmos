import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from 'microcms-js-sdk';

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
  customFetch: (input, init) => {
    if (typeof input === 'string') {
      const newInput = new URL(input);
      const time = new Date();
      newInput.searchParams.set('cacheclearparam', `${time.getMinutes()}`);
      return fetch(newInput.href, init);
    }
    return fetch(input, init);
  },
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: 'jobs',
    queries,
  });

  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: 'jobs',
    contentId,
    queries,
  });

  return detailData;
};

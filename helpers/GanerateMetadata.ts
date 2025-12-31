// helpers/news-metadata.ts
import { newsData } from '@/data/news';
import { generateSlug } from '@/helpers/GenerateSlug';

export function getNewsBySlug(slug: string) {
  return newsData.find((item) => generateSlug(item.title) === slug);
}
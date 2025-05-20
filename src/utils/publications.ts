import { getCollection } from 'astro:content';

export async function findLatestPublications({ count = 4 } = {}) {
  const pubs = await getCollection('publications', ({ data }) => !data.draft);
  return pubs.sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, count);
}

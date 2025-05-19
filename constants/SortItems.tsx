// Sorting by 'Most popular' was commented out because it would require changes to the API logic,
// and implementing it was optional for the task.

import { Item, SortOption } from '@/constants/Types';

export const getSortedItems = (
  items: Item[] | undefined,
  sortBy: SortOption,
): Item[] => {
  if (!items) return [];

  if (sortBy === 'Upload date: latest') {
    return [...items].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } else if (sortBy === 'Upload date: oldest') {
    return [...items].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
  } else if (sortBy === 'Most popular') {
    return [...items];
  }
  // else if (sortBy === 'Most popular') {
  //   return [...items].sort((a, b) => Number(b.viewCount) - Number(a.viewCount));
  // }

  return items;
};

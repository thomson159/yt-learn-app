import { ItemType, SortOption } from '@/constants/Types';

export const getSortedItems = (
  items: ItemType[] | undefined,
  sortBy: SortOption,
): ItemType[] => {
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
    return [...items].sort((a, b) => Number(b.viewCount) - Number(a.viewCount));
  }

  return items;
};

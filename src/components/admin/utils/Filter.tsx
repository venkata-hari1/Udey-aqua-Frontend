
export type SortOrder = 'asc' | 'desc';

/**
 * Sorts an array of objects by a given key in ascending or descending order.
 * @param data - array of objects
 * @param key - key to sort by
 * @param order - 'asc' | 'desc'
 * @returns sorted array
 */
export const sortByKey = <T extends Record<string, any>>(data: T[], key: keyof T, order: SortOrder = 'asc') => {
  return [...data].sort((a, b) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

/**
 * Filters an array of objects by a given key and search value
 * @param data - array of objects
 * @param key - key to filter by
 * @param searchValue - value to search
 * @returns 
 */
export const filterByKey = <T extends Record<string, any>>(data: T[], key: keyof T, searchValue: string) => {
  return data.filter(item =>
    String(item[key]).toLowerCase().includes(searchValue.toLowerCase())
  );
};

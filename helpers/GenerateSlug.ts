export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize('NFD') // Normalize to remove accents
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphen
    .replace(/^-+|-+$/g, ''); // Trim leading/trailing hyphens
};
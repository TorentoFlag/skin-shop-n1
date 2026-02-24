export const SITE_NAME = 'SkinVault';
export const MAX_PRICE = 50000;
export const MIN_PRICE = 0;
export const PRODUCTS_PER_PAGE = 24;

export const SORT_OPTIONS = [
  { value: 'price_asc', label: 'Цена: по возрастанию' },
  { value: 'price_desc', label: 'Цена: по убыванию' },
  { value: 'newest', label: 'Сначала новые' },
  { value: 'popular', label: 'Популярные' },
  { value: 'float_asc', label: 'Float: по возрастанию' },
  { value: 'float_desc', label: 'Float: по убыванию' },
] as const;

export const QUALITY_OPTIONS = ['FN', 'MW', 'FT', 'WW', 'BS'] as const;
export const RARITY_OPTIONS = ['Consumer', 'Industrial', 'Mil-Spec', 'Restricted', 'Classified', 'Covert', 'Contraband'] as const;
export const WEAPON_OPTIONS = ['AK-47', 'M4A4', 'M4A1-S', 'AWP', 'USP-S', 'Glock-18', 'Desert Eagle', 'MP9', 'MAC-10', 'Karambit', 'Butterfly Knife', 'Bayonet', 'M9 Bayonet', 'Scout', 'P90'] as const;

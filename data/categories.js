// TacoTown Recipes — category taxonomy.
// Top-level categories are course-based; subcats live here too.
// Categories are fixed — recipes reference them by name.

const CATEGORIES = {
  Breakfast: { emoji: '🌅', color: '#c2410c', bg: '#fff7ed' },
  Mains:     { emoji: '🍽', color: '#991b1b', bg: '#fef2f2', subcats: ['Beef', 'Chicken', 'Seafood', 'Pasta'] },
  Sides:     { emoji: '🥗', color: '#065f46', bg: '#ecfdf5' },
  Soups:     { emoji: '🥣', color: '#7e22ce', bg: '#faf5ff' },
  Bread:     { emoji: '🍞', color: '#92400e', bg: '#fffbeb', subcats: ['Sourdough', 'Loafs', 'Pastries', 'Savory'] },
  Sweets:    { emoji: '🍰', color: '#be185d', bg: '#fdf2f8' },
  Sauces:    { emoji: '🫙', color: '#0e7490', bg: '#ecfeff' },
};

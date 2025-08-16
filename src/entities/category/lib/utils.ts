/**
 * Convert category name to URL-friendly slug
 */
export function categoryToSlug(categoryName: string): string {
  return categoryName
    .toLowerCase()
    .replace(/[^\w\s가-힣]/g, '') // Keep alphanumeric, spaces, and Korean characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim();
}

/**
 * Get category display name from slug
 */
export function slugToCategory(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

/**
 * Get category color based on category name
 */
export function getCategoryColor(categoryName: string): string {
  const colors: Record<string, string> = {
    'frontend': '#3B82F6', // blue
    'backend': '#10B981', // green
    'react': '#06B6D4', // cyan
    'javascript': '#F59E0B', // amber
    'typescript': '#8B5CF6', // violet
    'nextjs': '#000000', // black
    'tailwind': '#06B6D4', // cyan
    'tutorial': '#EF4444', // red
    'blog': '#EC4899', // pink
    'featured': '#F59E0B', // amber
    'tech': '#6366F1', // indigo
    'review': '#84CC16', // lime
    'tips': '#F97316', // orange
    'guide': '#14B8A6', // teal
  };

  const normalizedName = categoryName.toLowerCase();
  return colors[normalizedName] || '#6B7280'; // default gray
}

/**
 * Get category icon based on category name
 */
export function getCategoryIcon(categoryName: string): string {
  const icons: Record<string, string> = {
    'frontend': '🎨',
    'backend': '⚙️',
    'react': '⚛️',
    'javascript': '📝',
    'typescript': '📘',
    'nextjs': '▲',
    'tailwind': '🎨',
    'tutorial': '📚',
    'blog': '✍️',
    'featured': '⭐',
    'tech': '💻',
    'review': '📋',
    'tips': '💡',
    'guide': '🗺️',
  };

  const normalizedName = categoryName.toLowerCase();
  return icons[normalizedName] || '📁';
}

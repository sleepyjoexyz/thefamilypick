export interface DealCategory {
  name: string;        // Display name: "Baby Gear"
  slug: string;        // URL slug: "baby-gear"
  emoji: string;       // Category emoji
  color: string;       // Tailwind color class for badges
  description: string; // SEO meta description for the category deal page
}

export const dealCategories: DealCategory[] = [
  {
    name: 'Baby Gear',
    slug: 'baby-gear',
    emoji: '👶',
    color: 'blue',
    description: 'Best baby gear deals today — save on monitors, strollers, car seats & more. Updated daily.',
  },
  {
    name: 'Pet Tech',
    slug: 'pet-tech',
    emoji: '🐾',
    color: 'green',
    description: 'Best pet tech deals today — save on feeders, cameras, GPS trackers & more. Updated daily.',
  },
];

export function getCategoryBySlug(slug: string): DealCategory | undefined {
  return dealCategories.find((c) => c.slug === slug);
}

export function getCategoryByName(name: string): DealCategory | undefined {
  return dealCategories.find((c) => c.name === name);
}

export function getAllCategorySlugs(): string[] {
  return dealCategories.map((c) => c.slug);
}

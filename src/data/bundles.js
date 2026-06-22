const bundleImages = import.meta.glob(
  "@/assets/images/bundles/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const img = (id) =>
  bundleImages[`/src/assets/images/bundles/${id}.jpg`] ||
  bundleImages[`/src/assets/images/bundles/${id}.jpeg`] ||
  bundleImages[`/src/assets/images/bundles/${id}.webp`] ||
  bundleImages[`/src/assets/images/bundles/${id}.png`] ||
  null;

export const bundles = [
  {
    id: "weekly-wellness-box",
    name: "Weekly Wellness Box",
    description:
      "A curated weekly pack for customers who want fresh bottled wellness drinks stocked throughout the week.",
    includes: "Mixed juices",
    packSize: "6 × 355 ml",
    price: 44.99,
    priceLabel: "$44.99 – $54.99",
    bestFor: "Weekly routines",
    filters: ["weekly", "subscription-eligible"],
    badges: ["Best Seller"],
    featured: true,
    image: img("weekly-wellness-box"),
  },
  {
    id: "family-variety-pack",
    name: "Family Variety Pack",
    description:
      "A mixed juice bundle made for households that want convenient better-for-you beverages for different tastes and routines.",
    includes: "Mixed family favourites",
    packSize: "6 × 355 ml",
    price: 44.99,
    priceLabel: "$44.99 – $54.99",
    bestFor: "Families",
    filters: ["family", "variety", "subscription-eligible"],
    badges: ["Best Seller"],
    featured: true,
    image: img("family-variety-pack"),
  },
  {
    id: "office-beverage-pack",
    name: "Office Beverage Pack",
    description:
      "A convenient cold-pressed juice pack for office fridges, team wellness, meetings, and workplace refreshment.",
    includes: "Mixed juices",
    packSize: "6 × 355 ml",
    price: 44.99,
    priceLabel: "$44.99 – $54.99",
    bestFor: "Offices",
    filters: ["office", "subscription-eligible"],
    badges: [],
    featured: true,
    image: img("office-beverage-pack"),
  },
  {
    id: "fitness-lifestyle-pack",
    name: "Fitness Lifestyle Pack",
    description:
      "A bundle designed for active customers looking for hydration, protein-enhanced juices, and refreshing post-workout options.",
    includes: "Hydration and protein-focused options",
    packSize: "6 × 355 ml",
    price: 44.99,
    priceLabel: "$44.99 – $54.99",
    bestFor: "Fitness routines",
    filters: ["fitness", "subscription-eligible"],
    badges: [],
    featured: true,
    image: img("fitness-lifestyle-pack"),
  },
  {
    id: "morning-routine-pack",
    name: "Morning Routine Pack",
    description:
      "A refreshing juice pack built for customers who want convenient bottled juices for mornings, work, and daily routines.",
    includes: "Citrus, ginger, fruit, and light blends",
    packSize: "6 × 355 ml",
    price: 44.99,
    priceLabel: "$44.99 – $54.99",
    bestFor: "Morning routine",
    filters: ["morning", "subscription-eligible"],
    badges: [],
    featured: true,
    image: img("morning-routine-pack"),
  },
  {
    id: "green-refresh-pack",
    name: "Green Refresh Pack",
    description:
      "A vegetable-forward pack featuring green refresh blends with ingredients such as leafy greens, cucumber, apple, lemon, celery, and ginger.",
    includes: "Green blends",
    packSize: "6 × 355 ml",
    price: 44.99,
    priceLabel: "$44.99 – $54.99",
    bestFor: "Green juice fans",
    filters: ["variety", "subscription-eligible"],
    badges: [],
    featured: false,
    image: img("green-refresh-pack"),
  },
  {
    id: "hydration-pack",
    name: "Hydration Pack",
    description:
      "A light and refreshing bundle using hydration-focused beverages with ingredients such as cucumber, citrus, mint, watermelon, or coconut water where suitable.",
    includes: "Hydration blends",
    packSize: "6 × 355 ml",
    price: 44.99,
    priceLabel: "$44.99 – $54.99",
    bestFor: "Hydration",
    filters: ["fitness", "subscription-eligible"],
    badges: [],
    featured: false,
    image: img("hydration-pack"),
  },
  {
    id: "build-your-own-pack",
    name: "Build Your Own Pack",
    description:
      "Customers can create a custom juice box by selecting their favourite PurePressa bottles and wellness drinks.",
    includes: "Your selection",
    packSize: "6 or 12 bottles",
    price: 44.99,
    priceLabel: "Based on selection",
    bestFor: "Custom routines",
    filters: ["byo"],
    isBuilder: true,
    badges: [],
    featured: true,
    image: img("build-your-own-pack"),
  },
];

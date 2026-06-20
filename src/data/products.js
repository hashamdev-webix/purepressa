const productImages = import.meta.glob(
  "@/assets/images/products/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const img = (id) =>
  productImages[`/src/assets/images/products/${id}.jpg`] ||
  productImages[`/src/assets/images/products/${id}.jpeg`] ||
  productImages[`/src/assets/images/products/${id}.webp`] ||
  productImages[`/src/assets/images/products/${id}.png`] ||
  null;

export const products = [
  {
    id: "signature-cold-pressed",
    name: "Signature Cold-Pressed Juices",
    category: "cold-pressed",
    description:
      "Core bottled juices made with fruit and vegetable combinations for everyday refreshment.",
    size: "355 ml bottle",
    price: 7.49,
    priceLabel: "$7.49 – $8.99",
    salesFormat: "Single bottles, multi-packs, online orders, grocery retail",
    badges: ["Best Seller"],
    featured: true,
    tags: ["single-bottles", "multi-packs", "subscriptions"],
    image: img("signature-cold-pressed"),
  },
  {
    id: "green-refresh",
    name: "Green Refresh Blends",
    category: "green",
    description:
      "Vegetable-forward juices with leafy greens, cucumber, apple, lemon, celery, and ginger.",
    size: "355 ml bottle",
    price: 7.99,
    priceLabel: "$7.99 – $9.49",
    salesFormat: "Weekly packs, subscriptions, retail bottles",
    badges: [],
    featured: true,
    tags: ["single-bottles", "multi-packs", "subscriptions"],
    image: img("green-refresh"),
  },
  {
    id: "citrus-ginger",
    name: "Citrus & Ginger Blends",
    category: "citrus",
    description:
      "Bright refreshing blends using citrus, ginger, turmeric, carrot, pineapple, or similar ingredients.",
    size: "355 ml bottle",
    price: 7.99,
    priceLabel: "$7.99 – $9.49",
    salesFormat: "Single bottles, morning packs, grocery displays",
    badges: [],
    featured: true,
    tags: ["single-bottles", "multi-packs"],
    image: img("citrus-ginger"),
  },
  {
    id: "berry-blends",
    name: "Berry Blends",
    category: "berry",
    description:
      "Fruit-forward juices with familiar berry flavours for broad customer appeal.",
    size: "355 ml bottle",
    price: 7.49,
    priceLabel: "$7.49 – $8.99",
    salesFormat: "Family packs, variety packs, online bundles",
    badges: [],
    featured: true,
    tags: ["single-bottles", "multi-packs", "family-packs"],
    image: img("berry-blends"),
  },
  {
    id: "hydration-blends",
    name: "Hydration Blends",
    category: "hydration",
    description:
      "Light refreshing juices using cucumber, citrus, watermelon, mint, or coconut water where suitable.",
    size: "355 ml bottle",
    price: 7.49,
    priceLabel: "$7.49 – $8.99",
    salesFormat: "Fitness bundles, gym partnerships, retail bottles",
    badges: [],
    featured: false,
    tags: [
      "single-bottles",
      "multi-packs",
      "subscriptions",
      "fitness-packs",
    ],
    image: img("hydration-blends"),
  },
  {
    id: "protein-enhanced",
    name: "Protein-Enhanced Juices",
    category: "protein",
    description:
      "Juice-based beverages developed for active customers seeking a more filling option.",
    size: "355 ml bottle",
    price: 8.99,
    priceLabel: "$8.99 – $10.99",
    salesFormat: "Fitness packs, subscriptions, gym/wellness partners",
    badges: [],
    featured: true,
    tags: [
      "single-bottles",
      "multi-packs",
      "subscriptions",
      "fitness-packs",
    ],
    image: img("protein-enhanced"),
  },
  {
    id: "wellness-shots",
    name: "Wellness Shots",
    category: "shots",
    description:
      "Small-format wellness drinks designed for convenient daily support.",
    size: "Small bottle format",
    price: null,
    priceLabel: "Coming soon",
    salesFormat: "Single shots, wellness packs, add-ons, retail displays",
    badges: ["New"],
    featured: false,
    tags: ["single-bottles", "subscriptions"],
    image: img("wellness-shots"),
  },
  {
    id: "wellness-variety-packs",
    name: "Wellness & Variety Packs",
    category: "packs",
    description:
      "Curated multi-bottle packs for weekly routines, families, offices, and subscriptions.",
    size: "6 × 355 ml bottles",
    price: 44.99,
    priceLabel: "$44.99 – $54.99",
    salesFormat: "Website orders, local delivery, corporate accounts",
    badges: [],
    featured: true,
    tags: [
      "multi-packs",
      "subscriptions",
      "family-packs",
      "office-packs",
    ],
    image: img("wellness-variety-packs"),
  },
];

export const featuredProducts = products.filter((p) => p.featured);

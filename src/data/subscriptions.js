const subImages = import.meta.glob(
  "@/assets/images/subscriptions/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const img = (id) =>
  subImages[`/src/assets/images/subscriptions/${id}.jpg`] ||
  subImages[`/src/assets/images/subscriptions/${id}.jpeg`] ||
  subImages[`/src/assets/images/subscriptions/${id}.webp`] ||
  subImages[`/src/assets/images/subscriptions/${id}.png`] ||
  null;

export const subscriptions = [
  {
    id: "weekly-wellness",
    name: "Weekly Wellness",
    description:
      "A reliable weekly box of bottled juices and wellness beverages for customers building a consistent routine.",
    frequency: "Weekly",
    bestFor: "Everyday wellness routines",
    tiers: [
      { label: "6 Bottles", price: 44.99, unit: "/week" },
      { label: "12 Bottles", price: 84.99, unit: "/week" },
    ],
    badges: ["Most Popular"],
    image: img("weekly-wellness"),
  },
  {
    id: "biweekly-juice",
    name: "Biweekly Juice",
    description:
      "Flexible delivery every two weeks for customers who want regular PurePressa without a weekly schedule.",
    frequency: "Biweekly",
    bestFor: "Flexible home and work routines",
    tiers: [
      { label: "6 Bottles", price: 44.99, unit: "/delivery" },
      { label: "12 Bottles", price: 84.99, unit: "/delivery" },
    ],
    badges: [],
    image: img("biweekly-juice"),
  },
  {
    id: "monthly-family",
    name: "Monthly Family",
    description:
      "A larger monthly variety box designed to keep convenient bottled beverages ready for the household.",
    frequency: "Monthly",
    bestFor: "Families and shared fridges",
    tiers: [
      { label: "12 Bottles", price: 89.99, unit: "/month" },
      { label: "24 Bottles", price: 169.99, unit: "/month" },
    ],
    badges: [],
    image: img("monthly-family"),
  },
  {
    id: "fitness-lifestyle",
    name: "Fitness Lifestyle",
    description:
      "Hydration and protein-enhanced beverage options delivered for active routines, workouts, and recovery.",
    frequency: "Weekly or Biweekly",
    bestFor: "Active customers and gym routines",
    tiers: [
      { label: "6 Bottles", price: 49.99, unit: "/delivery" },
      { label: "12 Bottles", price: 94.99, unit: "/delivery" },
    ],
    badges: [],
    image: img("fitness-lifestyle"),
  },
  {
    id: "office-wellness",
    name: "Office Wellness",
    description:
      "Recurring bottled juice and wellness beverage supply for office fridges, teams, gyms, cafés, and studios.",
    frequency: "Recurring business schedule",
    bestFor: "Offices and local businesses",
    tiers: [],
    priceNote: "Custom recurring business pricing",
    ctaType: "contact",
    badges: [],
    image: img("office-wellness"),
  },
  {
    id: "build-your-own",
    name: "Build Your Own",
    description:
      "Choose your bottle count, preferred products, and recurring frequency for a fully customized subscription.",
    frequency: "Weekly, Biweekly, or Monthly",
    bestFor: "Custom preferences",
    tiers: [
      { label: "6 Bottles", price: 44.99, unit: "/delivery" },
      { label: "12 Bottles", price: 84.99, unit: "/delivery" },
    ],
    priceNote: "From $44.99",
    isBuilder: true,
    badges: [],
    image: img("build-your-own"),
  },
];

export const subscriptions = [
  {
    id: "weekly-juice-delivery",
    name: "Weekly Juice Delivery",
    description:
      "Regular weekly delivery of fresh cold-pressed juices. Choose a pre-built box or customize your weekly selection.",
    frequency: "Weekly",
    bestFor: "Daily juice routines",
    tiers: [
      { label: "6-Bottle Box", price: 44.99, unit: "/week" },
      { label: "12-Bottle Box", price: 84.99, unit: "/week" },
    ],
    image: null,
  },
  {
    id: "biweekly-wellness-box",
    name: "Biweekly Wellness Box",
    description:
      "Flexible biweekly delivery for customers who want fresh juices without weekly commitment.",
    frequency: "Biweekly",
    bestFor: "Flexible routines",
    tiers: [
      { label: "6-Bottle Box", price: 44.99, unit: "/delivery" },
      { label: "12-Bottle Box", price: 84.99, unit: "/delivery" },
    ],
    image: null,
  },
  {
    id: "monthly-subscription",
    name: "Monthly Subscription",
    description:
      "Monthly delivery of curated juice packs. Perfect for less frequent wellness routines.",
    frequency: "Monthly",
    bestFor: "Occasional refreshment",
    tiers: [
      { label: "6-Bottle Box", price: 44.99, unit: "/month" },
      { label: "12-Bottle Box", price: 84.99, unit: "/month" },
    ],
    image: null,
  },
  {
    id: "build-your-box",
    name: "Build Your Box",
    description:
      "Fully customizable subscription. Select your delivery frequency, bottle count, and exact juice selection each cycle.",
    frequency: "Your choice",
    bestFor: "Custom preferences",
    priceNote: "Pricing based on selection",
    ctaType: "customize",
    isBuilder: true,
    image: null,
  },
];

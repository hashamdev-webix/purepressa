export const mainNav = [
  {
    label: "Shop",
    to: "/shop",
    children: [
      { label: "Cold-Pressed Juices", to: "/shop?category=cold-pressed" },
      { label: "Wellness Blends", to: "/shop?category=green" },
      { label: "Protein Juices", to: "/shop?category=protein" },
      { label: "Wellness Shots", to: "/shop?category=shots" },
      { label: "Hydration Drinks", to: "/shop?category=hydration" },
      { label: "Best Sellers", to: "/shop?filter=best-sellers" },
    ],
  },
  {
    label: "Bundles",
    to: "/bundles",
    children: [
      { label: "Weekly Wellness Packs", to: "/bundles?filter=weekly" },
      { label: "Family Packs", to: "/bundles?filter=family" },
      { label: "Office Packs", to: "/bundles?filter=office" },
      { label: "Fitness Packs", to: "/bundles?filter=fitness" },
      { label: "Variety Packs", to: "/bundles?filter=variety" },
    ],
  },
  {
    label: "Subscriptions",
    to: "/subscriptions",
    children: [
      { label: "Weekly Delivery", to: "/subscriptions?plan=weekly" },
      { label: "Biweekly Delivery", to: "/subscriptions?plan=biweekly" },
      { label: "Monthly Subscription", to: "/subscriptions?plan=monthly" },
      { label: "Build Your Box", to: "/subscriptions?plan=byo" },
    ],
  },
  {
    label: "Wholesale",
    to: "/wholesale",
    children: [
      { label: "Grocery Stores", to: "/wholesale#partners" },
      { label: "Cafés", to: "/wholesale#partners" },
      { label: "Gyms", to: "/wholesale#partners" },
      { label: "Wellness Studios", to: "/wholesale#partners" },
      { label: "Retail Partnerships", to: "/wholesale#partners" },
    ],
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our Story", to: "/about#who-we-are" },
      { label: "Ingredients", to: "/about#what-we-offer" },
      { label: "Freshness Process", to: "/about#how-we-work" },
      { label: "FAQ", to: "/about#faq" },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    children: [
      { label: "Contact Form", to: "/contact#form" },
      { label: "Delivery Information", to: "/contact#delivery" },
      { label: "Pickup Locations", to: "/contact#location" },
    ],
  },
];

export const footerNav = {
  shop: [
    { label: "Cold-Pressed Juices", to: "/shop?category=cold-pressed" },
    { label: "Wellness Blends", to: "/shop?category=green" },
    { label: "Protein Juices", to: "/shop?category=protein" },
    { label: "Wellness Shots", to: "/shop?category=shots" },
    { label: "Hydration Drinks", to: "/shop?category=hydration" },
    { label: "Bundles & Packs", to: "/bundles" },
  ],
  company: [
    { label: "About PurePressa", to: "/about" },
    { label: "Ingredients", to: "/about#what-we-offer" },
    { label: "Wholesale", to: "/wholesale" },
    { label: "Subscriptions", to: "/subscriptions" },
    { label: "Contact", to: "/contact" },
  ],
};

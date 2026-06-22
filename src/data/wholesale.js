export const wholesaleContent = {
  seoDescription:
    "Supply your grocery store, gym, café, wellness studio, office, or retail location with PurePressa bottled cold-pressed juices and ready-to-drink wellness beverages.",
  hero: {
    eyebrow: "Fresh. Local. Cold-Pressed.",
    title: "Wholesale Cold-Pressed Juices for Calgary Businesses",
    subheading:
      "Supply your grocery store, gym, café, wellness studio, office, or retail location with PurePressa bottled cold-pressed juices and ready-to-drink wellness beverages.",
    supportingText:
      "PurePressa offers packaged juices, wellness blends, protein-enhanced drinks, hydration beverages, wellness shots, and curated multi-pack options for selected wholesale and retail partners in Calgary.",
    captionTitle: "Retail-ready. Locally supplied.",
    captionText: "PurePressa for Calgary businesses.",
  },
  partners: {
    eyebrow: "Wholesale",
    title: "Wholesale Juice Supply for Local Businesses",
    description:
      "PurePressa is built to support businesses that want convenient, fresh, better-for-you beverage options for their customers, staff, and members.",
  },
  products: {
    eyebrow: "Product Range",
    title: "Wholesale Product Options",
  },
  why: {
    eyebrow: "Why PurePressa",
    title: "A Better Beverage Option for Your Customers",
  },
  process: {
    eyebrow: "Simple Process",
    title: "How Wholesale Partnership Works",
  },
  form: {
    eyebrow: "Partner With Us",
    title: "Become a PurePressa Wholesale Partner",
    description:
      "Share your business needs and the PurePressa team will follow up with product, pricing, and supply information.",
  },
  final: {
    eyebrow: "Ready to Partner?",
    title: "Bring PurePressa to Your Business",
    description:
      "Partner with PurePressa to offer bottled cold-pressed juices and wellness beverages to your customers, staff, members, or retail shoppers in Calgary.",
  },
};

export const wholesaleQuickBenefits = [
  { icon: "bottle", label: "Retail-Ready Bottles" },
  { icon: "map", label: "Local Calgary Supply" },
  { icon: "store", label: "Grocery & Gym Friendly" },
  { icon: "coffee", label: "Café Beverage Options" },
  { icon: "office", label: "Office Wellness Supply" },
  { icon: "support", label: "Custom Partner Support" },
];

export const wholesalePartnerTypes = [
  "Grocery Stores",
  "Gyms & Fitness Studios",
  "Cafés",
  "Wellness Studios",
  "Corporate Offices",
  "Local Retail Shops",
  "Healthy Food Markets",
];

export const wholesaleProducts = [
  {
    id: "cold-pressed-juices",
    name: "355 ml Cold-Pressed Juices",
    description:
      "Retail-ready bottled juices made with fruit and vegetable combinations.",
    priceLabel: "Wholesale Range: $4.50 – $6.75 per bottle",
    bestFor: "Grocery stores, cafés, retail fridges",
    imageProductId: "signature-cold-pressed",
  },
  {
    id: "green-refresh-blends",
    name: "Green Refresh Blends",
    description:
      "Vegetable-forward bottled juices for health-focused shelves, gyms, cafés, and wellness spaces.",
    priceLabel: "$4.75 – $6.95 per bottle",
    bestFor: "Wellness retail, gyms, cafés",
    imageProductId: "green-refresh",
  },
  {
    id: "citrus-ginger-blends",
    name: "Citrus & Ginger Blends",
    description:
      "Bright bottled blends for morning routines, cafés, wellness spaces, and retail shelves.",
    priceLabel: "$4.75 – $6.95 per bottle",
    bestFor: "Cafés, grocery, wellness studios",
    imageProductId: "citrus-ginger",
  },
  {
    id: "protein-enhanced-juices",
    name: "Protein-Enhanced Juices",
    description:
      "Functional juice-based drinks for fitness-focused customers and active lifestyles.",
    priceLabel: "$5.50 – $7.95 per bottle",
    bestFor: "Gyms, fitness studios, wellness retail",
    imageProductId: "protein-enhanced",
  },
  {
    id: "wellness-shots",
    name: "Wellness Shots",
    description:
      "Small-format wellness drinks for quick grab-and-go retail displays.",
    priceLabel: "Wholesale Range: To be finalized",
    bestFor: "Grocery checkout, gyms, cafés, studios",
    imageProductId: "wellness-shots",
  },
  {
    id: "wellness-packs",
    name: "6-Bottle Wellness Packs",
    description:
      "Curated multi-bottle packs for retail shelves, office programs, and wellness gift-style options.",
    priceLabel: "$28.50 – $34.50 per pack",
    bestFor: "Offices, retail, corporate wellness",
    imageProductId: "wellness-variety-packs",
  },
];

export const whyPartnerItems = [
  "Calgary-based bottled juice and wellness beverage brand",
  "Retail-ready packaging for shelves, fridges, cafés, and gyms",
  "Product options for health-conscious shoppers and active customers",
  "Suitable for grocery stores, cafés, gyms, wellness studios, and offices",
  "Wholesale support for recurring supply and local business partnerships",
];

export const wholesaleSteps = [
  {
    icon: "contact",
    title: "Contact PurePressa",
    description:
      "Submit your business details through the wholesale contact form.",
  },
  {
    icon: "needs",
    title: "Share Your Business Needs",
    description:
      "Tell us your business type, location, estimated quantity, and product needs.",
  },
  {
    icon: "information",
    title: "Receive Wholesale Information",
    description:
      "PurePressa will provide product options, pricing guidance, and supply details.",
  },
  {
    icon: "supply",
    title: "Start Supplying PurePressa",
    description:
      "Once approved, your business can carry PurePressa bottled juices and drinks.",
  },
];

export const wholesaleFormFields = [
  {
    name: "fullName",
    label: "Full Name",
    required: true,
    autoComplete: "name",
    placeholder: "Your full name",
  },
  {
    name: "businessName",
    label: "Business Name",
    required: true,
    autoComplete: "organization",
    placeholder: "Your business name",
  },
  {
    name: "businessType",
    label: "Business Type",
    required: true,
    as: "select",
    placeholder: "Select business type",
    options: [
      "Grocery Store",
      "Gym",
      "Café",
      "Wellness Studio",
      "Office",
      "Retailer",
      "Other",
    ],
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    autoComplete: "email",
    placeholder: "you@business.com",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
    autoComplete: "tel",
    placeholder: "Your phone number",
  },
  {
    name: "location",
    label: "Business Location",
    required: true,
    autoComplete: "street-address",
    placeholder: "Calgary location or address",
  },
  {
    name: "monthlyQuantity",
    label: "Estimated Monthly Quantity",
    placeholder: "For example, 120 bottles",
  },
  {
    name: "products",
    label: "Products Interested In",
    as: "textarea",
    rows: 4,
    placeholder: "Tell us which juices, drinks, shots, or packs interest you",
    fullWidth: true,
  },
  {
    name: "message",
    label: "Message",
    as: "textarea",
    rows: 5,
    placeholder: "Share any delivery, pricing, or partnership questions",
    fullWidth: true,
  },
];

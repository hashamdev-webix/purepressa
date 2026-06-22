export const contactContent = {
  seoDescription:
    "Have a question about our cold-pressed juices, subscriptions, delivery, pickup, wholesale supply, or business partnerships? Contact PurePressa in Calgary.",
  hero: {
    eyebrow: "Get in Touch",
    title: "Contact PurePressa",
    subheading:
      "Have a question about our cold-pressed juices, subscriptions, delivery, pickup, wholesale supply, or business partnerships? We would love to hear from you.",
    supportingText:
      "PurePressa is a Calgary-based bottled juice and wellness beverage company serving customers, families, offices, grocery stores, gyms, cafés, wellness studios, and local retail partners.",
    captionTitle: "Questions are welcome.",
    captionText: "The PurePressa team is ready to help.",
  },
  form: {
    eyebrow: "Contact PurePressa",
    title: "Send Us a Message",
    description:
      "Fill out the form below and the PurePressa team will respond to your inquiry as soon as possible.",
  },
  details: {
    eyebrow: "Contact Details",
    title: "Get in Touch",
  },
  wholesale: {
    eyebrow: "Business Inquiries",
    title: "Wholesale and Business Partnerships",
    description:
      "PurePressa works with grocery stores, gyms, cafés, wellness studios, offices, and selected retail partners that want to carry bottled cold-pressed juices and wellness beverages in Calgary.",
  },
  delivery: {
    eyebrow: "Local Support",
    title: "Calgary Delivery and Pickup Questions",
    description:
      "Customers can contact PurePressa for questions about online orders, local Calgary delivery, pickup availability, subscriptions, recurring orders, and product availability.",
  },
  location: {
    eyebrow: "Our Home",
    title: "Based in Calgary, Alberta",
    description:
      "PurePressa will begin operations in Calgary with the goal of serving local customers first, then expanding into other Alberta markets and across Canada.",
  },
  final: {
    eyebrow: "We're Here to Help",
    title: "Let's Connect",
    description:
      "Whether you are a customer, retailer, gym, café, wellness studio, or office, contact PurePressa to learn more about our bottled cold-pressed juices and wellness beverages in Calgary.",
  },
};

export const quickContactOptions = [
  { icon: "question", label: "General Questions" },
  { icon: "order", label: "Online Orders" },
  { icon: "delivery", label: "Delivery & Pickup" },
  { icon: "subscription", label: "Subscriptions" },
  { icon: "wholesale", label: "Wholesale Supply" },
  { icon: "business", label: "Office & Business Orders" },
];

export const contactFormFields = [
  {
    name: "fullName",
    label: "Full Name",
    required: true,
    autoComplete: "name",
    placeholder: "Your full name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    autoComplete: "email",
    placeholder: "you@example.com",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    autoComplete: "tel",
    placeholder: "Optional phone number",
  },
  {
    name: "inquiryType",
    label: "Inquiry Type",
    required: true,
    as: "select",
    placeholder: "Select inquiry type",
    options: [
      "General Question",
      "Online Order",
      "Subscription Inquiry",
      "Delivery or Pickup",
      "Wholesale Inquiry",
      "Grocery Store Partnership",
      "Gym / Café / Wellness Studio Partnership",
      "Office Beverage Program",
      "Other",
    ],
  },
  {
    name: "businessName",
    label: "Business Name",
    autoComplete: "organization",
    placeholder: "Optional business name",
  },
  {
    name: "businessType",
    label: "Business Type",
    as: "select",
    placeholder: "Select business type (optional)",
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
    name: "location",
    label: "Location / Area in Calgary",
    placeholder: "Neighbourhood or area",
    fullWidth: true,
  },
  {
    name: "message",
    label: "Message",
    as: "textarea",
    rows: 6,
    required: true,
    placeholder: "How can the PurePressa team help?",
    fullWidth: true,
  },
];

export const businessInquiryChecklist = [
  "Business name",
  "Business type",
  "Location",
  "Estimated quantity needed",
  "Product interest",
  "Delivery or pickup preference",
];

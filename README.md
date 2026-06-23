# PurePressa Frontend

> **Calgary's premium cold-pressed juice bar.** Fresh, locally-sourced wellness beverages delivered to your door.

This is the frontend web application for PurePressa — a React-based e-commerce site built with Vite, Tailwind CSS v4, and modern web technologies.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs at `http://localhost:5173` by default.

---

## Tech Stack

- **Build Tool:** Vite
- **Framework:** React 19 (JavaScript, not TypeScript)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Routing:** React Router v7
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **SEO:** React Helmet Async
- **Utilities:** clsx, tailwind-merge

---

## Project Structure

```
src/
├─ assets/         # Images, logos, static files
├─ components/
│  ├─ cart/        # Cart drawer
│  ├─ checkout/    # Checkout order summary
│  ├─ forms/       # Shared validated inquiry form
│  ├─ layout/      # Navbar, Footer, Layout
│  ├─ product/     # ProductCard, BundleCard
│  ├─ subscription/# Subscription plan cards
│  └─ ui/          # Reusable UI primitives
├─ context/        # CartContext (client-side cart)
├─ data/           # All content (products, bundles, navigation, site info)
├─ hooks/          # useCart, useScrollLock
├─ lib/            # Utilities (cn, format, validation)
├─ pages/          # Route pages
├─ routes/         # AppRoutes configuration
├─ sections/       # Page sections for every route
├─ styles/         # globals.css (design tokens)
├─ App.jsx
└─ main.jsx
```

---

## Customization

### Change Colors, Fonts, or Spacing

Edit **`src/styles/globals.css`** — all design tokens live here:

```css
@theme {
  --color-primary: #4f7a36; /* Brand green */
  --color-accent: #8cc63f; /* Fresh lime */
  --font-display: "Poppins";
  --font-body: "Inter";
  /* ... more tokens */
}
```

Changing a token updates the entire site. Components **only** use token-mapped utilities (never raw hex or font names).

### Edit Content (Products, Navigation, Site Info)

All content lives in **`src/data/`**:

- `products.js` — Product catalog
- `bundles.js` — Bundle packs
- `subscriptions.js` — Subscription plans
- `about.js`, `checkout.js`, `contact.js`, `wholesale.js` — Page content/config
- `categories.js` — Product categories
- `navigation.js` — Main nav + footer nav
- `site.js` — Site name, email, address, socials

No hardcoded content in JSX — edit the data files.

---

## Key Features

- **Client-side cart** (localStorage persistence, slide-out drawer)
- **Responsive navbar** (desktop dropdowns + mobile accordion menu)
- **Complete responsive pages** for Home, Shop, Bundles, Subscriptions, Wholesale, About, Contact, and Checkout
- **Product search/filter/sort**, custom pack builder, and custom subscription builder
- **Accessible validated forms** for Contact, Wholesale, and Checkout
- **Live-cart checkout** with delivery/pickup, order summary, and frontend confirmation
- **Subtle scroll animations** (respects `prefers-reduced-motion`)
- **Accessible** (semantic HTML, ARIA labels, keyboard navigation, focus states)

---

## Development Notes

- **Tailwind v4** uses `@import "tailwindcss";` + `@theme` in CSS (no `tailwind.config.js`).
- **Gradients** use `bg-linear-to-*` (not `bg-gradient-to-*`).
- **Path alias:** `@` maps to `/src` (configured in `vite.config.js` + `jsconfig.json`).
- **Frontend only:** No real backend yet. Cart is client-side. Forms have `// TODO: connect backend`.
- **Price handling:** Products store both `price` (number for cart math) and `priceLabel` (string for display, e.g. `"$7.49 – $8.99"`).

---

## Deployment

Built for **Vercel**. Push to main/master branch for automatic deployment.

```bash
npm run build  # Must pass clean (no errors/warnings)
```

---

## Next Steps

The frontend is feature-complete. Remaining work is backend integration:

- Contact and wholesale form delivery (for example, Resend or EmailJS)
- Persistent orders and customer records
- Payment processing
- Fulfillment and delivery logic
- Real subscription lifecycle management

---

## Questions or Issues?

Contact: **info@purepressa.com**

---

© 2026 PurePressa. All rights reserved.

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
- **Framework:** React 18 (JavaScript, not TypeScript)
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
│  ├─ layout/      # Navbar, Footer, Layout
│  ├─ product/     # ProductCard, BundleCard
│  └─ ui/          # Reusable UI primitives
├─ context/        # CartContext (client-side cart)
├─ data/           # All content (products, bundles, navigation, site info)
├─ hooks/          # useCart, useScrollLock
├─ lib/            # Utilities (cn, format)
├─ pages/          # Route pages
├─ routes/         # AppRoutes configuration
├─ sections/home/  # Home page sections (12 total)
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
- `categories.js` — Product categories
- `navigation.js` — Main nav + footer nav
- `site.js` — Site name, email, address, socials

No hardcoded content in JSX — edit the data files.

---

## Key Features

- **Client-side cart** (localStorage persistence, slide-out drawer)
- **Responsive navbar** (desktop dropdowns + mobile accordion menu)
- **Full home page** with 12 sections (hero, categories, products, bundles, subscriptions, wholesale, etc.)
- **Stub pages** for Shop, Bundles, Subscriptions, Wholesale, About, Contact, Checkout (on-brand placeholders)
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

## Next Steps (Future Phases)

Phase 1 (this release) = foundation + complete Home + stub pages.

**Coming later:**

- Phase 2: Full Shop page (filters, sort, search, grid)
- Phase 3: Full Bundles page
- Phase 4: Full Subscriptions page
- Phase 5: Full Wholesale + Contact pages (forms with validation)
- Phase 6: Full Checkout + Build Your Pack flow
- Backend integration (orders, real cart, payments)

---

## Questions or Issues?

Contact: **info@purepressa.com**

---

© 2025 PurePressa. All rights reserved.

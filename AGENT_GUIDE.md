# PurePressa Frontend — Agent Guide & Project Context

> **Living handoff document.** Any AI agent (Kiro, Antigravity, Claude Code, Codex, etc.) working on this repository **must read this file first**, follow the conventions exactly, and **update the Status checklist + Handoff Log** at the bottom before finishing. This file is how context is preserved across agent/model switches.
>
> Full, exhaustive Phase 1 spec lives in **`docs/Purepressa_Phase1_Prompt.md`** — read it for section-by-section Home content and complete seed data. This guide is the high-signal summary + rulebook.

---

## 1. Project Snapshot

- **Product:** PurePressa — a Calgary-based e-commerce site for bottled cold-pressed juices and ready-to-drink wellness beverages.
- **This effort:** **Frontend only.** No backend, no real payments. Cart is client-side. Forms validate on the client and have `// TODO: connect backend` submit handlers.
- **Deployment target:** Vercel.
- **Brand reference / tone:** clean, premium, spacious, modern, retail-beverage, mobile-first. (Reference site mentioned in brief: pressed.com.)
- **Business facts:** Email `info@purepressa.com`; address `Unit 12, 2995 15 St NE, Calgary, AB T2E 7L8`; phone not yet published; socials = placeholders for now.

---

## 2. Tech Stack

| Concern     | Choice                                                                                                |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Build tool  | Vite                                                                                                  |
| Framework   | React 18, **JavaScript (`.jsx`)** — not TypeScript                                                    |
| Styling     | **Tailwind CSS v4** via `@tailwindcss/vite` plugin. **No `tailwind.config.js`** — theme lives in CSS. |
| Routing     | `react-router-dom` (v6/v7), `Layout` route wraps all pages                                            |
| Animation   | `framer-motion` (subtle, restrained)                                                                  |
| Icons       | `lucide-react`                                                                                        |
| Head/SEO    | `react-helmet-async` (per-page title + meta)                                                          |
| Class utils | `clsx` + `tailwind-merge` → `cn()` helper                                                             |
| Fonts       | **Poppins** (display/headings) + **Inter** (body), via Google Fonts `<link>` in `index.html`          |

Path alias: `@` → `/src` (configured in `vite.config.js` + `jsconfig.json`).

---

## 3. Design System — single source of truth: `src/styles/globals.css`

**Rule: no raw hex or font-family strings inside components.** Components use only token-mapped Tailwind utilities. Changing a brand color or font = editing **only** `globals.css`.

These tokens are derived from the PurePressa logo (green wordmark, lime leaves, cream bottle):

```css
@import "tailwindcss";

@theme {
  /* Brand */
  --color-primary: #4f7a36; /* wordmark green */
  --color-primary-dark: #3b5c29;
  --color-primary-light: #6b9b4a;
  --color-accent: #8cc63f; /* fresh lime (leaves) */
  --color-accent-dark: #6fa82f;

  /* Surfaces */
  --color-cream: #f4eedd; /* bottle cream — section bg / label panels */
  --color-cream-soft: #faf6ec;
  --color-surface: #ffffff;
  --color-surface-alt: #fbf9f2;

  /* Text */
  --color-ink: #1e2a17; /* headings */
  --color-body: #3f4a37; /* paragraphs */
  --color-muted: #6e7a65;

  /* Lines & feedback */
  --color-border: #e7e3d6;
  --color-success: #4f7a36;
  --color-danger: #c0492f;

  /* Type */
  --font-display: "Poppins", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;

  /* Radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.875rem;
  --radius-card: 1.25rem;
  --radius-lg: 1.75rem;
  --radius-pill: 999px;

  /* Shadows */
  --shadow-soft: 0 4px 20px -6px rgba(31, 42, 23, 0.12);
  --shadow-card: 0 10px 34px -12px rgba(31, 42, 23, 0.16);
  --shadow-hover: 0 16px 40px -14px rgba(31, 42, 23, 0.22);

  /* Layout */
  --container-max: 1240px;
}
```

A `@layer base` block sets: body font/color, `h1–h4` → `font-display` + `--color-ink`, smooth scroll, `::selection` accent, `:focus-visible` outline, and `prefers-reduced-motion` reset. (See spec for exact block.)

**Token → utility mapping (Tailwind v4):** `--color-primary` → `bg-primary`/`text-primary`/`border-primary`; `--font-display` → `font-display`; `--radius-card` → `rounded-card`; `--shadow-card` → `shadow-card`; `--color-surface-alt` → `bg-surface-alt`.

**Type scale:** Hero H1 `text-4xl md:text-5xl lg:text-6xl font-bold` · Section H2 `text-3xl md:text-4xl font-semibold` · Card H3 `text-lg md:text-xl font-semibold` · Body `text-base leading-relaxed text-body` · Eyebrow `text-sm font-semibold uppercase tracking-wider text-primary`.

**Design direction (keep it from looking templated):** whitespace is the luxury (`py-16 md:py-24` sections); cream "label" panels echo a juice-bottle label; a small lime **leaf/sprout** motif (`lucide-react`) is the recurring signature, used sparingly; soft rounded geometry + pill buttons; spend visual boldness on the **Hero**, keep everything else quiet. Do **not** default to the generic "cream + serif + terracotta" AI look — palette is green + lime + cream with a clean geometric sans.

---

## 4. Architecture

```
src/
├─ assets/{images, logo/logo.png}        # logo.png = provided PurePressa logo
├─ components/
│  ├─ layout/  Layout, Navbar, NavDropdown, MobileMenu, Footer, ScrollToTop
│  ├─ cart/    CartDrawer
│  ├─ product/ ProductCard, BundleCard
│  └─ ui/      Button, Container, Section, SectionHeading, Badge, Accordion,
│              QuantitySelector, FormField, MediaPlaceholder
├─ sections/home/  Hero, QuickValuePoints, AboutIntro, ShopByCategory,
│                  FeaturedProducts, BundlesPreview, SubscriptionPreview,
│                  WholesalePreview, HowItWorks, WhyChooseUs, DeliveryPickup, FinalCTA
├─ pages/      Home (full), Shop, Bundles, Subscriptions, Wholesale, About,
│              Contact, Checkout, NotFound  (all except Home are stubs in Phase 1)
├─ context/    CartContext
├─ data/       site.js, navigation.js, categories.js, products.js, bundles.js, subscriptions.js
├─ hooks/      useCart, useScrollLock
├─ lib/        cn.js, format.js
├─ routes/     AppRoutes
├─ styles/     globals.css
├─ App.jsx
└─ main.jsx    # wraps app in HelmetProvider + BrowserRouter + CartProvider; imports globals.css
```

**Separation of concerns:** content lives in `data/*` (single source of truth), reusable primitives in `ui/`, page-specific blocks in `sections/`, never hardcode product/nav content inline in JSX.

---

## 5. Coding Conventions & Rules (critical)

1. **Tokens only** — no raw hex / font names in components.
2. **Tailwind v4 gradients** use `bg-linear-to-*` (e.g. `bg-linear-to-b`), **not** `bg-gradient-to-*`. Radial = `bg-radial`.
3. **Do not** add `tailwind.config.js` or `@tailwind base/components/utilities` — this is v4 (`@import "tailwindcss";` + `@theme`).
4. **Frontend only** — no `<form>` network posting; handlers use `e.preventDefault()` + `// TODO: connect backend`.
5. **Mobile-first** — design at ~375px, scale via `md`/`lg`. No horizontal scroll at any width. Test 375 / 768 / 1280.
6. **Accessibility** — semantic landmarks, alt text, labelled inputs, visible keyboard focus, `aria` on dropdown/drawer/accordion, focus trap + `Esc` close on drawer & mobile menu, respect `prefers-reduced-motion`.
7. **Remove unused imports** (Vercel/ESLint can fail the build on them).
8. **Don't break working code** — audit and reuse what already exists; only build what's missing or fix what's off-spec.
9. **Content-driven** — all products/bundles/subscriptions/nav/site info from `data/*`.
10. **Placeholders, never broken images** — use `MediaPlaceholder` when an item has no `image`.

---

## 6. Data Layer (shapes)

- **Prices are ranges in the brief.** Each item stores `price` (a **number** for cart math = the low end) **and** `priceLabel` (the range string shown). Items with `price: null` (e.g. Wellness Shots) cannot be added — show "Coming soon" and disable Add-to-Cart.
- `products.js` — id, name, category, description, size, price, priceLabel, salesFormat, badges[], featured, image. Export `featuredProducts`.
- `bundles.js` — id, name, description, includes, packSize, price, priceLabel, bestFor, filters[], (isBuilder?), image.
- `subscriptions.js` — id, name, description, frequency, bestFor, tiers[{label, price, unit}], (priceNote/ctaType/isBuilder?), image.
- `categories.js` — slug, name, blurb, accent (token name).
- `navigation.js` — `mainNav` (label, to, children[]) + `footerNav` ({shop[], company[]}).
- `site.js` — name, tagline, email, phone, address, city, domain, socials, cta{orderNow:"/shop", buildYourPack:"/bundles"}.

Currency: CAD via `formatCurrency` (`Intl.NumberFormat("en-CA", { style:"currency", currency:"CAD" })`).

---

## 7. Cart Behavior

- `CartContext`: `items[{id,name,price,qty,image,meta}]`, `isOpen`; actions `addItem`, `removeItem`, `updateQty`, `clearCart`, `openCart`, `closeCart`, `toggleCart`; derived `count`, `subtotal`. **Persist to `localStorage` key `purepressa_cart`.**
- **Add to Cart** → `addItem` then `openCart()` (drawer slides open, keep shopping).
- **Order Now** → `addItem` then navigate to `/checkout`.
- Cart drawer = right slide-out (Framer Motion), backdrop, body scroll lock, empty state, line items with qty/remove, subtotal, Checkout + Continue Shopping.

---

## 8. Build Phases & Status

### Phase 1 — Foundation + Home (COMPLETE)

Audit the repo and check off what already exists; complete the rest.

- [x] Project scaffolded (Vite + React + Tailwind v4), deps installed
- [x] `globals.css` with exact `@theme` tokens + base layer
- [x] `index.html` fonts (Poppins + Inter) + title/meta
- [x] `vite.config.js` (tailwind plugin + `@` alias) + `jsconfig.json`
- [x] Data: `site.js`, `navigation.js`, `categories.js`, `products.js`, `bundles.js`, `subscriptions.js` (all seeded per spec)
- [x] Helpers: `lib/cn.js`, `lib/format.js`
- [x] Cart: `context/CartContext.jsx`, `hooks/useCart.js`, `hooks/useScrollLock.js`
- [x] UI primitives: Button, Container, Section, SectionHeading, Badge, Accordion, QuantitySelector, FormField, MediaPlaceholder
- [x] Product components: ProductCard, BundleCard
- [x] Layout: Layout, Navbar (desktop dropdowns), NavDropdown, MobileMenu (accordion), CartDrawer, Footer, ScrollToTop
- [x] Routing: AppRoutes (all routes) + stub pages (Shop/Bundles/Subscriptions/Wholesale/About/Contact/Checkout) with on-brand hero + "coming soon" + NotFound
- [x] **Home page** — all 12 sections built & composed:
      Hero → QuickValuePoints → AboutIntro → ShopByCategory → FeaturedProducts → BundlesPreview → SubscriptionPreview → WholesalePreview → HowItWorks → WhyChooseUs → DeliveryPickup → FinalCTA
- [x] Proper `README.md` (replaces Vite default — see §9 of spec)
- [x] Verify: `npm run dev` no errors, `npm run build` passes, responsive 375/768/1280, no unused imports, no broken links/images

### Roadmap

- [x] **Phase 2:** Shop page (filter sidebar + sort + search + product grid + promotional sections)
- [x] **Phase 3:** Bundles page (filter/search/sort grid + working custom pack builder)
- **Phase 4:** Subscriptions page
- **Phase 5:** Wholesale + Contact (full forms with validation)
- **Phase 6:** Checkout (full order summary + delivery/pickup form)
- **Later:** Backend (orders, real cart, subscriptions, form submission)

---

## 9. How to Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (must pass clean for Vercel)
npm run preview  # preview the build
```

**Where to change things:** colors/fonts/radius/shadows → `src/styles/globals.css` · content (products, nav, site info) → `src/data/*` · brand logo → `src/assets/logo/logo.png`.

---

## 10. Handoff Log (append-only — newest first)

> Each agent adds an entry when finishing a session: date, model/IDE, what was done, decisions/deviations, next steps.

```
### [DATE] — [IDE / model]
- Done:
- Decisions / deviations from spec:
- Known issues:
- Next steps:
```

### 2026-06-22 — Kiro / Claude Sonnet 4.5 (Navigation Fix)

- Done: Made navbar parent items (Shop, Bundles, Subscriptions, Wholesale, About, Contact) clickable while preserving dropdown functionality. Desktop: split parent label into a clickable `<Link>` and a separate chevron button for keyboard dropdown toggle; hover still opens dropdown, clicking label navigates to parent page. Mobile: split parent row into a tappable `<Link>` that navigates and closes menu, plus a separate chevron button that expands/collapses accordion. Added proper ARIA attributes (aria-haspopup, aria-expanded, aria-label), focus-visible rings, Escape key handler. Both desktop and mobile now support direct navigation to parent pages AND drilling into child links. Verified build + dev server — no errors.
- Decisions / deviations from spec: None — implemented exactly as specified.
- Known issues: None introduced by this change.
- Next steps: Continue with Phase 4 or other feature work.

### 2026-06-22 — Kiro / Claude Sonnet 4.6

- Done: **Phase 3 COMPLETE.** Replaced the Bundles stub with the full eleven-section Bundles experience: hero, quick benefits, bundle introduction, URL-synced bundle explorer, interactive Build Your Pack builder, subscription promo, office/bulk panel, bundle benefits, ordering steps, FAQ, and final CTA. Added automatic bundle image discovery, normalized filter tags, featured/best-seller metadata, deep-linked filtering, debounced search, four sort modes, empty state, responsive cards, and the accessible mobile filter drawer. Built a real three-step custom pack flow with 6/12-bottle targets, quantity controls, count cap, progress state, disabled unavailable products, order-type selection, computed subtotal, composed cart metadata, Add to Cart, and Order Now. Updated BundleCard builder/cart behavior, preserved custom cart metadata in CartContext, enhanced QuantitySelector labels, and route-split the Bundles page to keep the production build warning-free.
- Decisions / deviations from spec: Bundle type remains in `?filter=` for navbar compatibility while sorting uses `?sort=` to avoid a query-parameter collision. The builder excludes the existing `packs` category because it represents a six-bottle product rather than an individual bottle; unavailable Wellness Shots remain visible but disabled. Custom pack pricing uses each product's low-end numeric price, matching existing cart conventions. The Bundles route is lazy-loaded at the route boundary after the new page pushed the main bundle over Vite's warning threshold.
- Known issues: Bundle imagery remains on MediaPlaceholder until ID-matched files are added under `src/assets/images/bundles/`; only some product image assets currently exist. Subscriptions, Wholesale, About, Contact, and Checkout remain intentionally scoped stubs.
- Next steps: **Phase 4** — Build the full Subscriptions page.

### 2026-06-21 — Kiro / Claude Sonnet 4.6

- Done: **Phase 2 COMPLETE.** Replaced the Shop stub with the full nine-section Shop experience: hero, quick benefits, collection intro, URL-synced product explorer, build-a-pack promo, subscription promo, wholesale CTA, FAQ, and final CTA. Added data-driven Shop copy/options, automatic product image discovery, product format tags, category/additional filters, debounced search, four sort modes, result count, empty state, responsive product grid, and an accessible mobile filter drawer with body scroll lock, focus trap, and Escape close. Updated ProductCard action labels/accessibility and unavailable-product state. Also resolved the existing lint issues in Navbar, CartContext, and Vite alias configuration. Verified category/tag/search/sort combinations, navbar-compatible query parameters, cart drawer, checkout routing, mobile layout, lint, and production build.
- Decisions / deviations from spec: `docs/Purepressa_Phase1_Prompt.md` is still absent, so the attached Phase 2 specification was used as the content authority and missing subheading/supporting copy was written to match the established PurePressa tone. Search filters immediately in local state and syncs to `?search=` after 250 ms to prevent router updates from dropping rapid keystrokes. Additional format tags are stored in a comma-separated `tags` query parameter; best sellers retains the required `filter=best-sellers` parameter.
- Known issues: Product imagery continues to use MediaPlaceholder until files named for product IDs are added under `src/assets/images/products/`. Bundles, Subscriptions, Wholesale, About, Contact, and Checkout remain intentionally scoped Phase 1 stubs.
- Next steps: **Phase 3** — Build the full Bundles page.

### 2026-06-20 — Kiro / Claude Sonnet 4.5

- Done: **Phase 1 COMPLETE.** Built entire foundation: completed subscriptions.js data file, created cart context + hooks (useCart, useScrollLock), built all 9 UI primitives (Button with `as` prop support, Container, Section, SectionHeading, Badge, Accordion, QuantitySelector, FormField, MediaPlaceholder), product components (ProductCard, BundleCard with cart integration), complete layout system (Layout, Navbar with desktop dropdowns + mobile hamburger, NavDropdown, MobileMenu, CartDrawer, Footer, ScrollToTop), all 12 Home sections (Hero through FinalCTA), all 8 pages (complete Home + 7 stubs with on-brand heroes), routing (AppRoutes), updated main.jsx with providers (HelmetProvider, BrowserRouter, CartProvider, globals.css import), replaced App.jsx, removed unused CSS files, wrote proper README. Build passes clean (`npm run build` ✓). ~60 files created/modified, ~3500 lines of code.
- Decisions / deviations from spec: Used `Share2` icon from lucide-react for social media links (Instagram/Facebook/Twitter icons don't exist in lucide-react — these are generic placeholder icons until brand-specific SVGs or icon font is added). Button component includes `as` prop to support rendering as Link for navigation. All other specs followed exactly.
- Known issues: Social media icons are generic Share2 placeholders (lucide-react doesn't include brand icons). Product/bundle images are placeholders (no actual images provided yet). All forms are client-side only with `// TODO: connect backend` comments. Phase 1 spec document (`docs/Purepressa_Phase1_Prompt.md`) was not found in repo, but all requirements from AGENT_GUIDE were implemented.
- Next steps: **Phase 2** — Build full Shop page with filter sidebar, category filtering, search, sort dropdown, product grid with pagination, and Shop page-specific sections (e.g., ingredient spotlight, testimonials). Test on actual devices at 375/768/1280px. Add real product images when available. Consider adding brand-specific social media icon SVGs to assets.

### 2025 (initial) — Antigravity / Claude Opus 4.6

- Done: Scaffolded Vite + React project; created initial config and several `data/*` files (products, bundles, categories, navigation). ~11 files, +526 lines.
- Stopped: free quota reached mid-Phase-1.
- Next steps: continue Phase 1 — verify/complete data + design tokens, then build cart, global layout, UI primitives, Home page, and stub pages (see §8 checklist).

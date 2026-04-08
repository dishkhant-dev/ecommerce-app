# 🛍️ SHOP.CO — E-Commerce Storefront

### A pixel-perfect, performance-first e-commerce UI built with Next.js 16, TypeScript & Tailwind CSS 4


## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Performance & Optimization](#-performance--optimization)
- [Responsive Design](#-responsive-design)
- [Technical Highlights](#-technical-highlights)
- [API Reference](#-api-reference)
- [What I'd Add Next](#-what-id-add-next)

---

## 🎯 About the Project

**SHOP.CO** is a modern e-commerce storefront interface built as a technical assessment. The project faithfully implements a **Figma design** into a production-ready Next.js application, featuring a homepage with dynamic product listings and a fully designed cart page — all powered by live data from the [Fake Store API](https://fakestoreapi.com).

> **Goal:** Demonstrate proficiency in **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **responsive design**, and **performance optimization** while producing clean, production-grade code.

---

## ✨ Key Features

### 🏠 Homepage
- **Hero section** with full-bleed imagery and compelling call-to-action
- **Featured brands** marquee with responsive brand logos
- **New Arrivals** — server-fetched product grid with ratings, prices & discount badges
- **Top Selling** — curated product grid with identical polish
- **Browse by Dress Style** — category cards (Casual, Formal, Party, Gym) with responsive image overlays
- **Customer Testimonials** — horizontal carousel with navigation controls, ratings & verified badges
- **Newsletter CTA** — footer-anchored email subscription banner

### 🛒 Cart Page
- Product cards with thumbnail, title, size/color attributes & price
- Quantity increment/decrement controls
- Delete item functionality (UI-ready)
- **Order Summary** sidebar — subtotal, discount calculation, delivery fee & total
- Promo code input with apply button
- "Go to Checkout" CTA

### 🧩 Global Layout
- Sticky **promotional banner** (sign-up discount offer)
- **Responsive navbar** with search bar, navigation links, cart & profile icons
- **Mobile slide-out drawer** with smooth animations and background overlay
- **Footer** with social links (Twitter, Facebook, Instagram, GitHub), multi-column sitemap & payment method badges (Visa, MasterCard, PayPal, Apple Pay, Google Pay)

---

## 🛠 Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | Server Components, file-based routing, ISR, image optimization |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Type safety, better DX, self-documenting interfaces |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS, zero runtime overhead, design-token consistency |
| **Carousel** | [Embla Carousel](https://www.embla-carousel.com/) | Lightweight (~3KB gzipped), SSR-friendly, touch-gesture support |
| **Runtime** | [React 19](https://react.dev/) | Latest concurrent features, React Compiler support |
| **Fonts** | [Satoshi](https://www.fontshare.com/fonts/satoshi) + [Integral CF](https://connary.com/cartograph.html) (local) | Custom typography loaded via `next/font/local` for zero CLS |

---

## 🏗 Project Architecture

```
ecommerce-app/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (fonts, header, navbar, footer)
│   │   ├── page.tsx                  # Homepage (Server Component → data fetching)
│   │   ├── globals.css               # Global styles & responsive spacing utilities
│   │   ├── cart/
│   │   │   └── page.tsx              # Cart page
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── layout/                   # Persistent layout components
│   │   │   ├── Header.tsx            # Promotional top banner
│   │   │   ├── Navbar.tsx            # Main navigation + mobile drawer
│   │   │   └── Footer.tsx            # Site footer + newsletter + social links
│   │   │
│   │   ├── pages/                    # Page-specific components
│   │   │   ├── home/
│   │   │   │   ├── Home.tsx          # Homepage composition (Client Component)
│   │   │   │   ├── Hero.tsx          # Hero banner with stats
│   │   │   │   ├── FeaturedBrands.tsx # Brand logos strip
│   │   │   │   ├── ProductListing.tsx # Reusable product grid/carousel
│   │   │   │   ├── BrowseByDressStyle.tsx # Category cards
│   │   │   │   └── Testimonials.tsx  # Review carousel with controls
│   │   │   └── cart/
│   │   │       └── Cart.tsx          # Cart UI with order summary
│   │   │
│   │   ├── skeletons/
│   │   │   └── ProductsSkeleton.tsx  # Loading skeleton for product grids
│   │   │
│   │   └── ui/                       # Reusable UI primitives (extensible)
│   │
│   └── assets/
│       ├── fonts/                    # Self-hosted custom fonts (Satoshi, Integral CF)
│       └── images/                   # Static images organized by feature
│           ├── layout/footer/        # Payment method icons
│           ├── pages/home/           # Hero, brands, dress-style images
│           └── products/             # Product thumbnails
│
├── next.config.ts                    # Image domains, React Compiler
├── tsconfig.json                     # Path aliases (@/*)
├── tailwind.config.ts                # (Tailwind v4 — auto-configured)
└── package.json
```

### Component Hierarchy

```
RootLayout (Server)
├── HeaderSection (Client)
├── NavbarSection (Client) — includes mobile drawer
├── [Page Content]
│   ├── HomePage (Server: fetches data) → HomePageClient (Client)
│   │   ├── HomePageHeroSection
│   │   ├── FeaturedBrandsSection
│   │   ├── ProductListingSection (×2 — "New Arrivals", "Top Selling")
│   │   ├── BrowseByDressStyleSection
│   │   └── TestimonialsSection
│   │
│   └── CartPage → CartPageClient (Client)
│
└── FooterSection (Client)
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
|------|---------|
| **Node.js** | v18+ (recommended: v20+) |
| **npm** | v9+ |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/dishkhant-dev/ecommerce-app.git

# 2. Navigate into the project
cd ecommerce-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**

### Production Build

```bash
# Build for production
npm run build

# Start the production server
npm start
```

---

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Starts Next.js development server with HMR |
| `build` | `npm run build` | Creates an optimized production build |
| `start` | `npm start` | Serves the production build |
| `lint` | `npm run lint` | Runs ESLint across the codebase |

---

## ⚡ Performance & Optimization

| Technique | Implementation |
|-----------|----------------|
| **Server Components** | Homepage data fetching runs on the server — zero client-side waterfall |
| **ISR (Incremental Static Regeneration)** | Products are revalidated every **3600s** (1 hour) via `next.revalidate` + cache tags |
| **Image Optimization** | All images use `next/image` with `fill`, `sizes`, `priority`, and `object-fit` for optimal LCP |
| **Font Optimization** | Custom fonts loaded via `next/font/local` with `display: "swap"` — eliminates FOUT and CLS |
| **React Compiler** | Enabled via `reactCompiler: true` — auto-memoization, fewer re-renders, no manual `useMemo`/`useCallback` overhead |
| **Loading Skeletons** | `<Suspense>` boundary with pulse-animated skeleton grid for perceived performance |
| **Code Splitting** | `"use client"` boundaries ensure interactive components are loaded only when needed |
| **Carousel Performance** | Embla Carousel — lightweight (~3KB gzipped) vs. heavier alternatives like Swiper |

---

## 📱 Responsive Design

The UI is fully responsive across **5 breakpoints**, closely matching the provided Figma design:

| Breakpoint | Width | Adaptations |
|------------|-------|-------------|
| **Base** | `< 640px` | Mobile-first layout, hamburger menu, horizontal product carousel, stacked grids |
| **SM** | `≥ 640px` | Expanded navbar, grid layouts, larger typography |
| **MD** | `≥ 768px` | 3-column product grid, wider spacing |
| **LG** | `≥ 1024px` | 4-column product grid, side-by-side cart layout |
| **XL** | `≥ 1280px` | Max container widths, refined spacing |

### Mobile-Specific Features
- 🍔 **Slide-out drawer navigation** with animated backdrop overlay
- 📱 **Touch-friendly carousels** (swipe-enabled via Embla)
- 🔍 **Mobile search icon** → expands search in drawer
- 📐 **Separate hero images** for mobile vs. desktop (art direction)
- 📊 **Adaptive stat layout** — stats reflow from row to stacked on small screens

---

## 🔧 Technical Highlights

### 1. Server/Client Component Split
The homepage uses a **Server Component** (`page.tsx`) for data fetching, passing pre-fetched data to a **Client Component** (`Home.tsx`) for interactivity. This gives us:
- Zero client-side loading spinners for initial data
- SEO-friendly server-rendered HTML
- Interactive carousels and event handlers where needed

### 2. Reusable Product Listing Component
`ProductListingSection` is used twice on the homepage (New Arrivals + Top Selling) with different data and styling props — demonstrating **DRY component design**.

### 3. Dynamic Star Rating Renderer
The `renderStars()` function dynamically generates SVG stars based on API ratings, supporting full and half-star rendering with responsive sizing across breakpoints.

### 4. Smart Discount Logic
```typescript
const getDiscount = (price: number) => {
    if (price > 100) return 20;
    if (price > 50) return 10;
    return 0;
};
```
Products dynamically display original price strikethroughs and discount badges based on their price tier.

### 5. Mobile Carousel ↔ Desktop Grid
On mobile (`< 640px`), products render in a **swipeable Embla carousel**. On desktop, the same data renders in a responsive **CSS grid**. A resize listener toggles between the two modes seamlessly.

### 6. Custom Typography System
Two custom font families are loaded locally — **Satoshi** (body) and **Integral CF** (headings) — using `next/font/local` with multiple weight variants for precise typographic control.

### 7. Responsive Spacing Utilities
Custom CSS utility classes (`margin-main-x`, `padding-main-x`) provide consistent edge-to-edge spacing that scales across all breakpoints, defined in `globals.css`.

---

## 🌐 API Reference

All product data is fetched from the **[Fake Store API](https://fakestoreapi.com/docs)**:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/products` | `GET` | Fetches all products (used for New Arrivals & Top Selling) |

### Product Response Schema

```typescript
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
```

---

## 🔮 What I'd Add Next

If this were a production project, here's what I'd build next:

- [ ] **Product detail page** (`/products/[id]`) with dynamic routing
- [ ] **Cart state management** using React Context or Zustand
- [ ] **Persistent cart** with `localStorage` sync
- [ ] **Search functionality** — filter products by name/category
- [ ] **Category pages** — route-based category filtering
- [ ] **Checkout flow** — multi-step form with validation
- [ ] **Authentication** — sign-up/login integration
- [ ] **Wishlist / Favorites** functionality
- [ ] **Unit & integration tests** with Jest + React Testing Library
- [ ] **Accessibility audit** — full WCAG 2.1 AA compliance

---

## 📂 Figma Reference

The UI implementation follows a provided Figma design file. Key design decisions preserved:
- **Integral CF** font for all heading elements
- **Satoshi** font for body text
- Consistent color palette (`#000000`, `#F0F0F0`, `#FF3333`, `#FFC633`)
- `62px` border-radius on all pill-shaped buttons & inputs
- `20px` border-radius on cards
- Precise spacing values matching Figma specs

---

<div align="center">

### Built with 🖤 by [Dish Khant](https://github.com/dishkhant-dev)

**Next.js 16** • **TypeScript** • **Tailwind CSS 4** • **React 19**

</div>
]]>

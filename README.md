# Haiku Coffee

Haiku Coffee is a small Next.js + TypeScript site that demonstrates a branded storefront and editorial experience.

The site allows users to signup and create an account, browse products, and keep track of their order history.

## Quick start

Requirements

- Node.js (>=18 is recommended)
- pnpm, npm, or yarn (`pnpm` is recommended)

Install dependencies and run dev server:

```bash
# with pnpm (recommended)
pnpm install
pnpm dev

# with npm
npm install
npm run dev

# with yarn
yarn install
yarn dev
```

Open http://localhost:3000 in your browser.

**Available scripts [package.json](package.json)**

- `dev` — run the Next.js development server (`next dev`)
- `build` — build the app for production (`next build`)
- `start` — start the built app (`next start`)
- `lint` — run ESLint (`eslint`)

**Run the production build locally with:**

```bash
pnpm build
pnpm start
```

## Where content lives

- Brand metadata: `src/lib/data/brand.ts`
- Mock blog posts: `src/lib/mockups/blogs.ts` (used by `src/app/blog` and `src/app/blog/[slug]`)
- Mock shop items: `src/lib/mockups/shop.ts` (used by `src/app/shop`)
- Testimonials: `src/lib/data/testimonials.ts`
- Images and static assets: `public/`

## Linting / Formatting

Run the linter with:

```bash
pnpm run lint
# or: npm run lint
```

Run the formatter with:

```bash
pnpm run format
# or: npm run format
```

## Deployment

This app will be deployed to Vercel or Netlify.

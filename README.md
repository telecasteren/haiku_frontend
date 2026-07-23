# Haiku Coffee

A small Next.js + TypeScript site that demonstrates a branded storefront and editorial experience.

Haiku Coffee is built with the Next.js App Router and Tailwind CSS. Includes home, blog, shop, events and contact pages. Content is currently mocked in the repository -- will be replaced with API calls or a CMS later.

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

Available scripts [package.json](package.json)

- `dev` — run the Next.js development server (`next dev`)
- `build` — build the app for production (`next build`)
- `start` — start the built app (`next start`)
- `lint` — run ESLint (`eslint`)

Run the production build locally with:

```bash
pnpm build
pnpm start
```

## Where content lives

- Brand metadata: `src/lib/data/brand.ts`
- Mock blog posts: `src/lib/mockups/blogs.ts` (used by `src/app/blog` and `src/app/blog/[slug]`)
- Mock shop items: `src/lib/mockups/shop.ts` (used by `src/app/shop`)
- Testimonials: `src/lib/data/testimonials.ts`
- Images and static assets: `public/` (examples in `public/mockups` and `public/shop`)

## Development notes

- The site is scaffolded to be easy to extend. Will be replaced from the mock data in `src/lib/mockups/*.ts` to the appropriate API or a CMS later.
- Images referenced in the mock data are under `public/`.
- shadcn UI pieces are included under `src/components/ui`. Primitive components maintained here.

## Linting

Run the linter with:

```bash
pnpm run lint
# or: npm run lint
```

## Deployment

This app will be deployed to Vercel or Netlify.

## Next steps / Suggestions

- Replace local mock data with a CMS or headless API for dynamic content.
- Add automated tests and CI pipeline.
- Add a LICENSE file if you want to open-source the project.

# next-practice

A Next.js 16 project built with React 19, Tailwind CSS and DaisyUI. The app includes a responsive navigation bar, static pages, a blogs section with dynamic routes and a dashboard area with nested routes and external API user data. This project is mainly made for trying a Next.js project for first time.

## Project structure

- `src/app/layout.js` — root layout with global font setup and `Navbar` included on every page
- `src/app/page.js` — homepage
- `src/components/Navbar.jsx` — responsive navigation menu using `next/link` and `usePathname`
- `src/app/about/page.jsx` — About page
- `src/app/contact/page.jsx` — Contact page
- `src/app/blogs/page.jsx` — Blogs listing page with in-memory blog entries
- `src/app/blogs/[blogId]/page.jsx` — dynamic blog detail route
- `src/app/dashboard/page.jsx` — Dashboard top page
- `src/app/dashboard/admin/page.jsx` — Admin page
- `src/app/dashboard/users/page.jsx` — Users list page fetching from JSONPlaceholder
- `src/app/dashboard/users/[userId]/page.jsx` — Dynamic user detail page using external API data

## Built with

- Next.js 16.2.4
- React 19.2.4
- Tailwind CSS v4
- DaisyUI
- `next/font` with Geist fonts
- ESLint for linting

## Available scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Running locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:3000
```

## Main routes

- `/` — Home page
- `/about` — About page
- `/contact` — Contact page
- `/blogs` — Blogs listing page
- `/blogs/[blogId]` — Blog detail pages
- `/dashboard` — Dashboard landing page
- `/dashboard/admin` — Admin page
- `/dashboard/users` — Users list page
- `/dashboard/users/[userId]` — User detail page

## Notes

- The `Navbar` component highlights the active route and supports mobile dropdown navigation.
- The users dashboard fetches data from `https://jsonplaceholder.typicode.com/users`.
- Blog details are loaded from a local in-memory blog array.

## Customize

- Update `src/app/page.js` for homepage content.
- Edit `src/app/blogs/page.jsx` and `src/app/blogs/[blogId]/page.jsx` to change blog data or page layout.
- Modify `src/app/dashboard/users/page.jsx` and `src/app/dashboard/users/[userId]/page.jsx` to connect to a real API or add more fields.

## License

This repository is currently a learning/demo project and does not include a formal license.

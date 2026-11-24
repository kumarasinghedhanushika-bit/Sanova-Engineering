# Sanova Engineering — Next.js Website

Responsive Next.js 16 / React 19 / Tailwind CSS 4 / Framer Motion / TypeScript website.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build && npm start`.

## Customize before publishing

- Update **`lib/site.ts`** with verified services, real phone number, WhatsApp number, address, email, hours, project counts, and client testimonials. The supplied numbers and contact details are placeholders.
- Replace **`public/logo.svg`** and **`app/icon.svg`** with your licensed official company logo, or update component URLs if using PNG. The included lightning icon is a temporary placeholder, **not the supplied/official Sanova logo**.
- WhatsApp quote form opens a drafted WhatsApp message; it does not save messages to a database or submit them to a backend.
- Fonts are loaded with `next/font/google`, so production builds may require access to Google Fonts.

## Deploy

Publish via Vercel or host any Next.js Node.js server using `npm run build` and `npm start`.

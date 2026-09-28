# Portfolio Front-End Showcase

A curated, public code sample based on the production portfolio at [sergiojimenez.com](https://sergiojimenez.com). This repository demonstrates the interface and interaction work without publishing private deployment configuration, résumé files, or personal photo archives.

## Highlights

- Responsive React component architecture
- Tailwind CSS design tokens and custom utilities
- Accessible navigation, focus states, and reduced-motion support
- Intersection-based reveal effects and an accessible testimonial carousel
- Project presentation, responsive layouts, and EmailJS integration points
- Vite production build

## Stack

- React 19
- Tailwind CSS 4
- Vite
- Lucide React
- EmailJS (optional; requires local environment values)

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The interface runs without committing credentials. To enable the contact form, add your own EmailJS identifiers to `.env.local`. Variables prefixed with `VITE_` are included in the browser bundle, so use EmailJS domain restrictions and rate limits.

## Quality checks

```bash
npm run build
npm run lint
```

## Privacy boundary

This public showcase intentionally excludes production deployment scripts, local environment files, résumé PDFs, personal photo collections, and unused design-research material. The complete production repository remains private.

## License

Source code is available under the MIT License. Project artwork, brand marks, testimonials, and portfolio imagery remain the property of their respective owners and are included for demonstration only.

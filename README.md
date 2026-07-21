# BugX Solutions Website Redesign

A premium, modern, futuristic cybersecurity website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Dark Futuristic Design** with cyber aesthetic
- **Glassmorphism** cards and UI elements
- **Smooth Animations** using Framer Motion
- **Magnetic Buttons** with 3D hover effects
- **Custom Cursor** (optional)
- **Smooth Scrolling** using Lenis
- **Responsive Design** for all devices
- **SEO Optimized** with proper metadata
- **Accessibility** features

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
.
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── ui/               # Reusable UI components
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color palette.

### Fonts

Update `app/layout.tsx` to use custom fonts.

## License

MIT

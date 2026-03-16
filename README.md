# 3D Portfolio — abdurrahmanidris.com

Interactive 3D portfolio built with React, Three.js, and Framer Motion. Features an immersive 3D world, animated project showcases, and a dedicated Residity case study.

## Live Site

[abdurrahmanidris.com](https://abdurrahmanidris.com)

## Tech Stack

- **Framework:** React 18 + Vite
- **3D:** Three.js, React Three Fiber, React Three Drei
- **Animation:** Framer Motion, Lottie
- **Styling:** Tailwind CSS + SCSS
- **Routing:** React Router DOM
- **Contact:** EmailJS
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images, icons, 3D model files
├── components/      # UI components & portfolio sections
│   ├── portfolio/   # About, Skills, Projects, Residity, Achievements, Contact
│   └── Footer.jsx
├── models/          # 3D models (Avatar, Island, Plane, Rocket, Sky)
├── pages/           # Home, Portfolio, World, Contact
├── constants/       # Skills/technologies data
├── hooks/           # Custom hooks (useAlert)
├── utils/           # Animation utilities
└── styles.js        # Shared style constants
```

## Key Features

- **Interactive 3D World** — Explorable island environment with dynamic models and theme switching
- **Residity Showcase** — Full case study of the real estate platform with stats, features, and app store links
- **Parallax Projects** — Scroll-driven project cards with tilt effects
- **Animated Sections** — Scroll-triggered animations via Framer Motion
- **Contact Form** — EmailJS-powered form with animated SVG phone illustration

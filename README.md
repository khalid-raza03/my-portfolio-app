# My Portfolio App

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **GSAP** - Animations
- **React Icons** - Icon library
- **React Router** - Navigation

## Features

- 🎨 Modern, responsive design
- 🌓 Dark/Light theme toggle
- 📱 Mobile-first approach (supports screens <370px)
- ✨ Smooth GSAP animations
- 🎯 3D flip card image effect
- 🍔 Animated staggered menu
- 🎭 Preloader with custom animations

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx           # Sticky header with theme toggle
│   └── StaggeredMenu.tsx    # Fixed overlay menu with GSAP animations
├── pages/           # Page components
│   ├── Home.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Experience timeline
│   ├── Projects.tsx         # Projects showcase
│   └── Contact.tsx          # Contact form
├── context/         # React context providers
├── data/           # Static data and constants
├── features/       # Feature-specific components
├── lib/            # Utilities and helpers
├── store/          # State management
├── utils/          # Helper functions
├── App.tsx         # Root component
└── main.tsx        # Entry point
```

## Key Implementation Details

### State Management Pattern
- Menu state managed in `App.tsx` and passed to both `Navbar` and `StaggeredMenu`
- External state synchronization via props for consistent UI behavior

### Z-Index Layering
- Header: `z-40`
- Menu overlay: `z-50`
- Close button: `z-9999`

### Mobile Optimization
- `overflow-x: hidden` on html/body elements
- Responsive gaps and spacing below 370px breakpoint
- Hidden floating badges on small screens
- Proper pointer-events management to prevent click blocking

### 3D Flip Card
- CSS transforms with `backface-visibility: hidden`
- Click handler toggles between front and back images
- Smooth transition effects

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The app runs on `http://localhost:5173` by default.

### Key Components

**App.tsx** - Manages global menu state and renders root-level overlays

**Navbar.tsx** - Sticky header with hamburger toggle (always shows bars icon)

**StaggeredMenu.tsx** - Fixed overlay with dedicated close button inside panel

**Home.tsx** - Hero section with floating badges and flip card image

## Browser Support

Modern browsers with ES6+ support. Tested on Chrome, Firefox, Safari, and Edge.

## License

MIT

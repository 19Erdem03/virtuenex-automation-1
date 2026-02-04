# VirtueNex Automation - Website

A modern, high-converting website for VirtueNex Automation - an AI automation agency that helps businesses scale with intelligent systems.

## Tech Stack

- **Vite** - Lightning-fast build tool
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Styled Components** - CSS-in-JS with theming
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Features

- ✨ Modern, minimalist black & white design
- 🚀 Blazing fast performance
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (keyboard navigation, ARIA labels)
- 🎨 Smooth scroll animations and micro-interactions
- 📧 Contact form with validation
- 🔍 SEO optimized

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ProcessStep.tsx
│   └── CTASection.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── styles/          # Global styles and theme
│   ├── theme.ts
│   └── GlobalStyles.tsx
├── App.tsx          # Main app with routing
└── main.tsx         # Entry point
```

## Pages

- **Home** (`/`) - Hero, value props, solutions overview, process, FAQs
- **Services** (`/services`) - All 14 services grouped by 4 categories
- **Contact** (`/contact`) - Contact form with validation

## Design System

### Colors
- Background: `#000000` (Black)
- Text Primary: `#FFFFFF` (White)
- Text Secondary: `#A3A3A3` (Gray)
- Borders: `rgba(255, 255, 255, 0.1)`

### Typography
- Font: Inter
- Sizes: 12px to 72px (responsive)
- Weights: 400, 500, 600, 700

### Spacing
- Based on 8px grid
- Scale: 4px to 160px

## Form Integration

The contact form currently logs to console. To integrate with a backend:

1. **Option 1: Formspree / EmailJS**
   - Sign up for a service
   - Update the `handleSubmit` function in `Contact.tsx`

2. **Option 2: Custom Backend**
   - Create an API endpoint
   - Replace the simulated API call with a real fetch request

## Customization

### Update Copy
- Edit text in `src/pages/Home.tsx`, `Services.tsx`, and `Contact.tsx`

### Change Colors
- Modify `src/styles/theme.ts`

### Add More Services
- Add new service cards in `src/pages/Services.tsx`

## Performance

- Lighthouse Score Target: 95+
- First Contentful Paint: <1.5s
- Time to Interactive: <2.5s

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved by VirtueNex Automation

## Contact

For questions or support, reach out at hello@virtuenex.com

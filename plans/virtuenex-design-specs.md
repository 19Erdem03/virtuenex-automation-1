# VirtueNex Automation - Design Specifications

## 🎨 Visual Design System

### Color Palette

```css
/* Primary Colors */
--color-bg-primary: #000000;          /* Pure Black */
--color-text-primary: #FFFFFF;        /* White */
--color-text-secondary: #A0A0A0;      /* Gray */
--color-text-muted: #666666;          /* Darker Gray */

/* Accent & Borders */
--color-border: rgba(255, 255, 255, 0.1);
--color-border-hover: rgba(255, 255, 255, 0.3);
--color-accent: #FFFFFF;
--color-accent-glow: rgba(255, 255, 255, 0.2);

/* Interactive States */
--color-hover-bg: rgba(255, 255, 255, 0.05);
--color-active-bg: rgba(255, 255, 255, 0.1);
--color-focus-ring: rgba(255, 255, 255, 0.5);
```

### Typography

```css
/* Font Stack */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                'Roboto', 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;

/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-hero: 4.5rem;     /* 72px - Desktop */
--text-hero-mobile: 2.5rem; /* 40px - Mobile */

/* Font Weights */
--weight-normal: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;

/* Line Heights */
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.6;
--leading-loose: 1.8;
```

### Spacing System

```css
/* Based on 8px grid */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-10: 4rem;     /* 64px */
--space-12: 6rem;     /* 96px */
--space-16: 8rem;     /* 128px */
--space-20: 10rem;    /* 160px */

/* Section Spacing */
--section-padding-mobile: var(--space-10);
--section-padding-desktop: var(--space-16);
```

### Border Radius

```css
--radius-sm: 0.25rem;    /* 4px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Full rounded */
```

### Shadows & Effects

```css
/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(255, 255, 255, 0.05);
--shadow-md: 0 4px 6px -1px rgba(255, 255, 255, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(255, 255, 255, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(255, 255, 255, 0.1);
--shadow-glow: 0 0 20px rgba(255, 255, 255, 0.3);

/* Backdrop Blur */
--blur-sm: blur(4px);
--blur-md: blur(8px);
--blur-lg: blur(16px);
```

### Animation Timings

```css
--transition-fast: 150ms;
--transition-base: 250ms;
--transition-slow: 350ms;
--transition-slower: 500ms;

--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-custom: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

---

## 📐 Layout & Grid

### Container Widths

```css
--container-xs: 480px;
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

/* Content max-width */
--content-max-width: 1200px;
--reading-max-width: 720px;
```

### Grid System

```css
/* 12-column grid */
--grid-columns: 12;
--grid-gap: var(--space-6);
--grid-gap-mobile: var(--space-4);
```

### Breakpoints

```css
/* Mobile First */
--screen-sm: 640px;   /* Small tablets */
--screen-md: 768px;   /* Tablets */
--screen-lg: 1024px;  /* Laptops */
--screen-xl: 1280px;  /* Desktops */
--screen-2xl: 1536px; /* Large desktops */
```

---

## 🧩 Component Specifications

### Navigation Bar

**Desktop**:
- Height: 80px
- Background: rgba(0, 0, 0, 0.8) with backdrop blur
- Border bottom: 1px solid rgba(255, 255, 255, 0.1)
- Fixed position on scroll
- Logo: Left aligned
- Menu items: Center or right aligned
- CTA button: Right aligned

**Mobile**:
- Height: 64px
- Hamburger menu icon
- Slide-in menu from right
- Full-screen overlay

**States**:
- Default: Transparent
- Scrolled: Background + blur
- Hover: Link underline animation
- Active: Bold weight or underline

---

### Buttons

#### Primary Button
```
Appearance:
- Background: Transparent
- Border: 2px solid white
- Text: White, semibold
- Padding: 16px 32px
- Border radius: 8px

Hover:
- Background: White
- Text: Black
- Transform: translateY(-2px)
- Shadow: 0 0 20px rgba(255, 255, 255, 0.3)

Active:
- Transform: translateY(0)
```

#### Secondary Button (Ghost)
```
Appearance:
- Background: Transparent
- Border: None
- Text: White
- Padding: 16px 32px

Hover:
- Text: Gray
- Arrow/icon shift right
```

#### Icon Button
```
Size: 44x44px (touch-friendly)
Border radius: 50%
Hover: Background rgba(255, 255, 255, 0.1)
```

---

### Cards

#### Service Card
```
Appearance:
- Background: rgba(255, 255, 255, 0.02)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border radius: 16px
- Padding: 32px
- Min height: 280px

Hover:
- Border: rgba(255, 255, 255, 0.3)
- Transform: translateY(-4px)
- Shadow: 0 0 30px rgba(255, 255, 255, 0.1)
- Glow effect on border

Layout:
- Icon at top (48x48px)
- Title (H3)
- Description (2-3 lines)
- Link/CTA at bottom
```

#### Feature Card
```
Smaller variant for feature lists
Padding: 24px
Icon: 32x32px
Title: H4
Description: 1-2 lines
```

---

### Form Elements

#### Input Fields
```
Appearance:
- Background: rgba(255, 255, 255, 0.03)
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Border radius: 8px
- Padding: 14px 16px
- Text: White
- Placeholder: rgba(255, 255, 255, 0.4)

Focus:
- Border: rgba(255, 255, 255, 0.5)
- Outline: 2px solid rgba(255, 255, 255, 0.2)
- Glow effect

Error:
- Border: Red variant
- Error text below in red
```

#### Textarea
```
Same as input but:
- Min height: 120px
- Resize: vertical
```

#### Select/Dropdown
```
Custom styled to match inputs
Arrow icon: Custom SVG
Dropdown menu: Same background with blur
```

---

### Navigation Links

```
Default:
- Color: rgba(255, 255, 255, 0.8)
- Font size: 16px
- Font weight: 500

Hover:
- Color: white
- Underline animation (slide in from left)

Active:
- Color: white
- Font weight: 600
```

---

## ✨ Animation Specifications

### Scroll Animations

#### Fade In Up
```
Initial state:
- Opacity: 0
- Transform: translateY(30px)

Animated state:
- Opacity: 1
- Transform: translateY(0)
- Duration: 600ms
- Easing: ease-out
- Trigger: When element enters viewport (80% visible)
```

#### Fade In
```
Simple opacity transition
Duration: 400ms
Stagger delay: 100ms between elements
```

#### Scale In
```
Initial: scale(0.95), opacity: 0
Animated: scale(1), opacity: 1
Duration: 500ms
```

---

### Micro Interactions

#### Button Hover
```
- Transform: translateY(-2px)
- Shadow increase
- Background color change
- Duration: 250ms
- Easing: ease-out
```

#### Card Hover
```
- Border glow animation
- Lift effect (translateY(-4px))
- Shadow increase
- Duration: 300ms
```

#### Link Hover
```
- Underline slide animation
- Color transition
- Duration: 200ms
```

---

### Background Effects

#### Animated Grid
```
SVG or Canvas grid background
Subtle pulse/glow on grid intersections
Slow parallax on scroll
Opacity: 0.1 - 0.2
```

#### Gradient Orbs (Optional)
```
Slow-moving gradient blurs
Absolute positioned
z-index: -1
Opacity: 0.05 - 0.1
Animation: 20s infinite
```

#### Particle System (Hero Only)
```
Small white dots
Slow floating animation
Opacity: 0.3 - 0.6
Size: 2-4px
Count: 30-50 particles
```

---

## 📱 Responsive Design

### Mobile (< 768px)
- Single column layout
- Stack cards vertically
- Larger touch targets (min 44px)
- Simplified animations
- Hamburger navigation
- Hero text: Smaller (40px)

### Tablet (768px - 1024px)
- 2-column card grid
- Adjusted spacing
- Hero text: Medium (56px)

### Desktop (> 1024px)
- 4-column card grid (services)
- Full animations
- Parallax effects
- Hero text: Full size (72px)

---

## 🎯 Section-Specific Designs

### Hero Section

**Layout**:
```
Centered content
Max width: 900px
Padding: 120px 0

Elements (top to bottom):
1. Headline (H1, 72px, bold, white)
2. Subheadline (20px, normal, gray)
3. CTA Button
4. Optional: Scroll indicator

Background:
- Animated grid
- Particle system
- Gradient orbs (subtle)
```

---

### Services Grid

**Layout**:
```
Grid: 4 columns desktop, 2 tablet, 1 mobile
Gap: 32px
Cards: Equal height
Hover effects: Individual

Each card:
- Icon top left
- Title
- Tagline
- "Learn More" link bottom
```

---

### How We Work

**Layout**:
```
Timeline or numbered steps
Desktop: Horizontal layout
Mobile: Vertical stack

Each step:
- Number badge (large, outlined)
- Title
- Description
- Optional icon/illustration

Connecting line between steps (desktop)
```

---

### Footer

**Layout**:
```
3-column desktop, 1-column mobile

Column 1: Brand
- Logo
- Tagline
- Copyright

Column 2: Quick Links
- Home
- Services
- How We Work
- Contact

Column 3: Contact
- CTA Button (white fill)
- Email
- Social links (if any)

Border top: 1px solid rgba(255, 255, 255, 0.1)
Padding: 64px 0 32px
```

---

## 🎨 Visual Inspiration & References

### Style Keywords
- Minimalistic
- High-tech
- Clean
- Professional
- Modern
- Sophisticated
- Premium

### Design Patterns
- Apple's minimalism
- Stripe's clarity
- Linear's animations
- Vercel's gradients (subtle)
- GitHub's dark mode

### Avoid
- Cluttered layouts
- Too many colors
- Cheesy stock photos
- Overused gradients
- Comic Sans (obviously)

---

## 📊 Component Hierarchy

### Homepage Structure
```
1. Navigation (fixed)
2. Hero Section
3. Value Proposition (3 columns)
4. Services Overview (4 cards)
5. How We Work (4 steps)
6. Social Proof (optional)
7. Final CTA
8. Footer
```

### Visual Weight Priority
1. Hero headline + CTA (highest)
2. Service category cards
3. Section headlines
4. Body copy
5. Footer (lowest)

---

## 🔧 Technical Considerations

### Performance
- Lazy load images below fold
- Use CSS animations over JavaScript when possible
- Optimize SVGs
- Minimize repaints/reflows
- Use `will-change` for animated elements

### Accessibility
- WCAG AA contrast (white on black = excellent)
- Focus visible states
- Keyboard navigation
- ARIA labels
- Alt text for images
- Semantic HTML

### Browser Support
- Modern evergreen browsers
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Graceful degradation for older browsers
- Feature detection for animations

---

This design specification provides the complete visual system. Ready to implement when you approve the plan!

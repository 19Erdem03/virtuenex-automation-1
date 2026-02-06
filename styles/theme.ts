export const theme = {
  colors: {
    background: '#000000',
    text: {
      primary: '#FFFFFF',
      secondary: '#A3A3A3',
      muted: '#666666',
    },
    border: {
      default: 'rgba(255, 255, 255, 0.1)',
      hover: 'rgba(255, 255, 255, 0.3)',
      focus: 'rgba(255, 255, 255, 0.5)',
    },
    accent: '#FFFFFF',
    glow: 'rgba(255, 255, 255, 0.15)',
    hover: 'rgba(255, 255, 255, 0.05)',
    active: 'rgba(255, 255, 255, 0.1)',
    gradient: {
      white: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
      whiteText: 'linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%)',
      whiteBorder: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
    },
  },
  
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
  },
  
  fontSizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    hero: '4.5rem',     // 72px
  },
  
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.8,
  },
  
  spacing: {
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.5rem',    // 24px
    6: '2rem',      // 32px
    8: '3rem',      // 48px
    10: '4rem',     // 64px
    12: '6rem',     // 96px
    16: '8rem',     // 128px
    20: '10rem',    // 160px
  },
  
  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
    md: '0 4px 6px -1px rgba(255, 255, 255, 0.1)',
    lg: '0 10px 15px -3px rgba(255, 255, 255, 0.1)',
    xl: '0 20px 25px -5px rgba(255, 255, 255, 0.1)',
    glow: '0 0 20px rgba(255, 255, 255, 0.3)',
  },
  
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
    slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  maxWidth: {
    content: '1200px',
    reading: '720px',
  },
};

export type Theme = typeof theme;

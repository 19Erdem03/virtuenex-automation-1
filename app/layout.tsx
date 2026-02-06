import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/lib/theme-provider';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'VirtueNex Automation - AI Systems That Scale Your Business',
  description:
    'VirtueNex Automation - AI systems that scale your business on autopilot. We engineer intelligent automation that captures leads, closes deals, and runs operations 24/7.',
  openGraph: {
    title: 'VirtueNex Automation - AI Systems That Scale Your Business',
    description: 'Custom AI automation solutions that drive revenue, eliminate bottlenecks, and scale without limits.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

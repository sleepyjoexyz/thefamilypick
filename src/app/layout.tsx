import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WebSiteSchema } from '@/components/JsonLd';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Family Pick — Data-Driven Baby & Pet Product Comparisons',
  description:
    'Expert comparisons of baby gear (monitors, strollers, car seats, high chairs) and pet technology (feeders, cameras, trackers, grooming tools). Evidence-based reviews and buying guides for families.',
  metadataBase: new URL('https://www.thefamilypick.com'),
  keywords: [
    'baby gear',
    'pet tech',
    'product comparison',
    'baby monitors',
    'strollers',
    'car seats',
    'high chairs',
    'automatic feeders',
    'pet cameras',
    'GPS trackers',
    'grooming tools',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.thefamilypick.com',
    siteName: 'The Family Pick',
    title: 'The Family Pick — Data-Driven Baby & Pet Product Comparisons',
    description:
      'Expert comparisons of baby gear and pet technology products with detailed buying guides.',
    images: [
      {
        url: 'https://www.thefamilypick.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Family Pick',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Family Pick — Data-Driven Baby & Pet Product Comparisons',
    description:
      'Expert comparisons of baby gear and pet technology products with detailed buying guides.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <WebSiteSchema />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

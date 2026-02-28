import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Family Pick — Data-Driven Baby & Pet Product Comparisons',
  description:
    'Expert comparisons of baby gear (monitors, strollers, car seats, high chairs) and pet technology (feeders, cameras, trackers, grooming tools). Evidence-based reviews and buying guides for families.',
  metadataBase: new URL('https://thefamilypick.com'),
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
    url: 'https://thefamilypick.com',
    siteName: 'The Family Pick',
    title: 'The Family Pick — Data-Driven Baby & Pet Product Comparisons',
    description:
      'Expert comparisons of baby gear and pet technology products with detailed buying guides.',
    images: [
      {
        url: 'https://thefamilypick.com/og-image.png',
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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/TogDark/ThemeProvider';
import { AnimatePresence } from 'framer-motion';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://written.jack-robertson.co.uk/'),
  title: 'Written Work | Environmental Insights & Data Visualization',
  description: 'Explore in-depth stories on environmental impacts, carbon emissions, and cutting-edge data visualizations.',
  keywords: ['environment', 'climate change', 'carbon emissions', 'data visualization', 'sustainability', 'stories'],
  author: 'Jack Robertson',
  openGraph: {
    type: 'website',
    url: 'https://written.jack-robertson.co.uk/',
    title: 'Written Work | Environmental Insights & Data Visualization',
    description: 'Explore in-depth stories on environmental impacts, carbon emissions, and cutting-edge data visualizations.',
    images: [{ url: 'https://written.jack-robertson.co.uk/og-image.svg', width: 1200, height: 630 }],
  },
  icons: {
    icon: '/Blue_Logo.svg',
    shortcut: '/Blue_Logo.svg',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@JackRobertso',
    creator: '@JackRobertso',
    title: 'Written Work | Environmental Insights & Data Visualization',
    description: 'Explore in-depth stories on environmental impacts, carbon emissions, and cutting-edge data visualizations.',
    images: ['https://written.jack-robertson.co.uk/twitter-image.svg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://written.jack-robertson.co.uk/',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: 'no',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Blue_Logo.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <AnimatePresence mode="wait" initial={false}>
            <main className="min-h-screen">{children}</main>
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
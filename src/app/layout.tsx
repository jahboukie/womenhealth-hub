import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WomenHealth.Health - Revolutionary Healthcare Platform',
  description: 'Revolutionizing women\'s healthcare through Human-AI collaboration. Where cutting-edge AI meets compassionate care.',
  keywords: [
    'women\'s healthcare',
    'AI healthcare',
    'telemedicine',
    'menopause management',
    'HIPAA compliant',
    'Dr. Alex AI',
    'healthcare technology',
    'digital health'
  ],
  authors: [{ name: 'WomenHealth.Health' }],
  creator: 'WomenHealth.Health',
  publisher: 'WomenHealth.Health',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://womenhealth.health'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WomenHealth.Health - Revolutionary Healthcare Platform',
    description: 'Revolutionizing women\'s healthcare through Human-AI collaboration. Where cutting-edge AI meets compassionate care.',
    url: 'https://womenhealth.health',
    siteName: 'WomenHealth.Health',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WomenHealth.Health Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WomenHealth.Health - Revolutionary Healthcare Platform',
    description: 'Revolutionizing women\'s healthcare through Human-AI collaboration.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

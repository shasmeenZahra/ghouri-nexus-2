import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: 'Ghouri Nexus - Software House & Gaming Company',
  description: 'Professional web development, UI/UX design, Shopify stores, and innovative gaming solutions by Ghouri Nexus.',
  keywords: 'web development, UI/UX design, Shopify, gaming, software house, React, Next.js',
  authors: [{ name: 'Ghouri Nexus' }],
  openGraph: {
    title: 'Ghouri Nexus - Software House & Gaming Company',
    description: 'Professional web development and gaming solutions',
    url: 'https://ghourinexus.com',
    siteName: 'Ghouri Nexus',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nayul — Lovely Intellect',
  description: 'Personal career roadmap · 나연의 인생 청사진',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${jost.variable}`}>{children}</body>
    </html>
  );
}

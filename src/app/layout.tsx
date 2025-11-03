import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Header from '@/components/Header';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'High-end audio gear',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

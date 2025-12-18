import type { Metadata } from 'next';
import Providers from '@/providers';
import Navbar from '@/components/navbar';
import { NextIntlClientProvider } from 'next-intl';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      url: '/favicons/favicon60w.webp',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
  manifest: '/site.webmanifest',
  title: 'Coinmerce: Give your money a future and nothing less',
  description: 'Buy & sell with easy, over 400+ coins',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NextIntlClientProvider locale={'en'}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

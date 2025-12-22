import type { Metadata } from 'next';
import Providers from '@/providers';
import Navbar from '@/components/navbar';
import { NextIntlClientProvider } from 'next-intl';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { defaultMetadata } from '@/utils/defautlMetadata';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  ...defaultMetadata,
  // icons: [
  //   {
  //     rel: 'apple-touch-icon',
  //     sizes: '180x180',
  //     url: '/apple-touch-icon.png',
  //   },
  //   {
  //     rel: 'apple-touch-icon',
  //     sizes: '60x60',
  //     url: '/favicons/favicon60w.webp',
  //   },
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: '32x32',
  //     url: '/favicon-32x32.png',
  //   },
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: '16x16',
  //     url: '/favicon-16x16.png',
  //   },
  //   {
  //     rel: 'mask-icon',
  //     url: '/safari-pinned-tab.svg',
  //     color: '#5bbad5',
  //   },
  // ],
  manifest: '/site.webmanifest',

  // title: 'Coinmerce: Give your money a future and nothing less',
  // description: 'Buy & sell with easy, over 400+ coins',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', ${process.env.NEXT_PUBLIC_GTM_ID});
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Providers>
          <NextIntlClientProvider locale={'en'}>
            <h1>GTM ID {process.env.NEXT_PUBLIC_GTM_ID}</h1>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

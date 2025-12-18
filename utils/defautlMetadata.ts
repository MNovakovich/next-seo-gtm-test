import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://coinmerce.io'),

  title: {
    default: 'Buy & Sell Bitcoin, and more with ease - Coinmerce',
    template: '%s - Coinmerce',
  },

  description:
    'Coinmerce is a Dutch, fiat ⇄ cryptocurrency trading platform that focuses entirely on usability and simplicity to offer its users a safe, educational, simple and enjoyable experience.',

  authors: [{ name: 'Coinmerce.io' }],

//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//   },

  alternates: {
    canonical: 'https://coinmerce.io/en/',
    languages: {
      nl: 'https://coinmerce.io/nl/',
      en: 'https://coinmerce.io/en/',
      de: 'https://coinmerce.io/de/',
      'x-default': 'https://coinmerce.io/nl/',
    },
  },

  openGraph: {
    type: 'article',
    siteName: 'coinmerce.io',
    title: 'Buy & Sell Bitcoin, and more with ease - Coinmerce',
    description:
      'Coinmerce is a Dutch, fiat ⇄ cryptocurrency trading platform that focuses entirely on usability and simplicity to offer its users a safe, educational, simple and enjoyable experience.',
    url: 'https://coinmerce.io',
    images: [
      {
        url: 'https://coinmerce.io/assets/images/og-image.png?v=72.89',
        width: 1200,
        height: 630,
        alt: 'Coinmerce',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Buy & Sell Bitcoin, and more with ease - Coinmerce',
    description:
      'Coinmerce is a Dutch, fiat ⇄ cryptocurrency trading platform that focuses entirely on usability and simplicity to offer its users a safe, educational, simple and enjoyable experience.',
    images: ['https://coinmerce.io/assets/images/og-image.png?v=72.89'],
    creator: '@coinmerce_io',
  },

  // icons: {
  //   icon: [
  //     {
  //       rel: 'apple-touch-icon',
  //       sizes: '180x180',
  //       url: '/apple-touch-icon.png',
  //     },
  //     {
  //       rel: 'apple-touch-icon',
  //       sizes: '60x60',
  //       url: '/favicons/favicon60w.webp',
  //     },
  //     {
  //       rel: 'icon',
  //       type: 'image/png',
  //       sizes: '32x32',
  //       url: '/favicon-32x32.png',
  //     },
  //     {
  //       rel: 'icon',
  //       type: 'image/png',
  //       sizes: '16x16',
  //       url: '/favicon-16x16.png',
  //     },
  //     {
  //       rel: 'mask-icon',
  //       url: '/safari-pinned-tab.svg',
  //       color: '#5bbad5',
  //     },
  //   ],
  //   apple: [
  //     { url: '/assets/favicons/favicon57w.png', sizes: '57x57' },
  //     { url: '/assets/favicons/favicon60w.png', sizes: '60x60' },
  //     { url: '/assets/favicons/favicon72w.png', sizes: '72x72' },
  //     { url: '/assets/favicons/favicon76w.png', sizes: '76x76' },
  //     { url: '/assets/favicons/favicon114w.png', sizes: '114x114' },
  //     { url: '/assets/favicons/favicon120w.png', sizes: '120x120' },
  //     { url: '/assets/favicons/favicon144w.png', sizes: '144x144' },
  //     { url: '/assets/favicons/favicon152w.png', sizes: '152x152' },
  //     { url: '/assets/favicons/favicon180w.png', sizes: '180x180' },
  //   ],
  //   shortcut: '/favicon.ico',
  // },

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

  manifest: 'https://coinmerce.io/assets/favicons/manifest.json',

  //themeColor: '#ffffff',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': 130,
    },
  },

  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage':
      'https://coinmerce.io/assets/favicons/favicon144w.png?v=72.89',
    'msapplication-config':
      'https://coinmerce.io/assets/favicons/browserconfig.xml?v=72.89',
    'insight-app-sec-validation': '05a0e376-bed2-43de-80e1-f6c507353e33',
    'jam:team': '5c16271b-f51c-4c89-a310-eb0fb6fb9554',
  },
};

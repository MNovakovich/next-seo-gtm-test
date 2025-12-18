import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api',
        // English routes
        '/en/dashboard/*',
        '/en/orders/*',
        '/en/profile/*',
        // Dutch routes
        '/nl/dashboard',
        '/nl/micar/',
        '/nl/orders',
        '/nl/profiel/',
        // German routes
        '/de/dashboard/',
        '/de/orders/',
        '/de/profil/',
      ],
    },
    sitemap: 'https://coinmerce.io/sitemap.xml',
  };
}

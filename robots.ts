import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
   const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://coinmerce.io';
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
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

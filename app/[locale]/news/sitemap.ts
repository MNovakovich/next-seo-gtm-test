import type { MetadataRoute } from 'next';
import { LOCALES, pathnames, type PathnameKeys } from '@/i18n/routing';
import { fetchAllNews } from '@/services/news.services';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://coinmerce.io';

// Static pages to include in the sitemap (excluding dynamic routes like /news/[id])
const staticRoutes: PathnameKeys[] = ['/home', '/news'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  // Generate entries for each static route
  staticRoutes.forEach((route) => {
    const pathConfig = pathnames[route];

    LOCALES.forEach((locale) => {
      // Get the localized path for this locale
      const localizedPath =
        typeof pathConfig === 'string'
          ? pathConfig
          : pathConfig[locale as keyof typeof pathConfig] || route;

      entries.push({
        url: `${BASE_URL}/${locale}${localizedPath}`,
        lastModified: new Date(),
        changeFrequency: route === '/home' ? 'daily' : 'weekly',
        priority: route === '/home' ? 1.0 : 0.9,
      });
    });
  });

  // generate sitemap for news
  const news = await fetchAllNews();
  news.forEach((item) => {
    console.log(item);
    entries.push({
      url: `${BASE_URL}/en/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
    // entries.push({
    //   url: `${BASE_URL}/news/${item.slug}`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    //   alternates: {
    //     languages: {
    //       en: `${BASE_URL}/en/news/${item.slug}`,
    //       nl: `${BASE_URL}/nl/news/${item.slug}`,
    //       de: `${BASE_URL}/de/news/${item.slug}`,
    //       fr: `${BASE_URL}/fr/news/${item.slug}`,
    //       es: `${BASE_URL}/es/news/${item.slug}`,
    //     },
    //   },
    // });
  });

  return entries;
}

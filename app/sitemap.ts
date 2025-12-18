import type { MetadataRoute } from "next";
import { LOCALES, pathnames, type PathnameKeys } from "@/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://coinmerce.io";

// Static pages to include in the sitemap (excluding dynamic routes like /news/[id])
const staticRoutes: PathnameKeys[] = ["/home", "/news"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Generate entries for each static route
  staticRoutes.forEach((route) => {
    const pathConfig = pathnames[route];

    LOCALES.forEach((locale) => {
      // Get the localized path for this locale
      const localizedPath =
        typeof pathConfig === "string"
          ? pathConfig
          : pathConfig[locale as keyof typeof pathConfig] || route;

      entries.push({
        url: `${BASE_URL}/${locale}${localizedPath}`,
        lastModified: new Date(),
        changeFrequency: route === "/home" ? "daily" : "weekly",
        priority: route === "/home" ? 1.0 : 0.9,
      });
    });
  });

  return entries;
}

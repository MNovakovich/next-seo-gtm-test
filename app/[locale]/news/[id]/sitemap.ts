import type { MetadataRoute } from "next";
import axios from "redaxios";
import { LOCALES, pathnames } from "@/i18n/routing";

interface NewsItem {
  id: string;
  title: string;
  description: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://coinmerce.io";
const ITEMS_PER_SITEMAP = 50000; // Google's limit is 50,000 URLs per sitemap

const fetchAllNews = async (): Promise<NewsItem[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const { data } = await axios.get<NewsItem[]>(`${apiUrl}/api/news`);
    return data;
  } catch {
    return [];
  }
};

// Generate multiple sitemaps when you have many news items
// Each sitemap will contain up to ITEMS_PER_SITEMAP URLs
export async function generateSitemaps(): Promise<{ id: number }[]> {
  const news = await fetchAllNews();
  const totalItems = news.length * LOCALES.length; // Each news item has multiple locale versions
  const numberOfSitemaps = Math.ceil(totalItems / ITEMS_PER_SITEMAP) || 1;

  return Array.from({ length: numberOfSitemaps }, (_, i) => ({ id: i }));
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const news = await fetchAllNews();

  // Calculate which items belong to this sitemap
  const start = id * ITEMS_PER_SITEMAP;
  const end = start + ITEMS_PER_SITEMAP;

  // Create all locale combinations for news items
  const allEntries: MetadataRoute.Sitemap = [];

  news.forEach((item) => {
    LOCALES.forEach((locale) => {
      const localizedPath =
        pathnames["/news/[id]"][
          locale as keyof (typeof pathnames)["/news/[id]"]
        ] || "/news/[id]";
      const resolvedPath = localizedPath.replace("[id]", item.id);

      // Generate alternate language URLs
      const languages: Record<string, string> = {};
      LOCALES.forEach((altLocale) => {
        const altPath =
          pathnames["/news/[id]"][
            altLocale as keyof (typeof pathnames)["/news/[id]"]
          ] || "/news/[id]";
        languages[altLocale] = `${BASE_URL}/${altLocale}${altPath.replace("[id]", item.id)}`;
      });

      allEntries.push({
        url: `${BASE_URL}/${locale}${resolvedPath}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: {
          languages,
        },
      });
    });
  });

  // Return only the entries for this sitemap chunk
  return allEntries.slice(start, end);
}


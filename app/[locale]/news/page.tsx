import axios from 'redaxios';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LOCALES, pathnames, Link } from '@/i18n/routing';
import { defaultMetadata } from '@/utils/defautlMetadata';
interface NewsItem {
  id: string;
  title: string;
  description: string;
}

type IIndexProps = {
  params: Promise<{ locale: string }>;
};




// export const metadata = {
//   title: 'Kako investirati u kripto',
//   description: 'Vodič za početnike',

//   openGraph: {
//     title: 'Kako investirati u kripto',
//     description: 'Vodič za početnike',
//     url: 'https://example.com/blog/kripto',
//     siteName: 'My Blog',
//     images: [
//       {
//         url: 'https://example.com/og/kripto.png',
//         width: 1200,
//         height: 630,
//         alt: 'Kako investirati u kripto',
//       },
//     ],
//     locale: 'sr_RS',
//     type: 'article',
//   },
// };

const fetchNews = async (): Promise<NewsItem[]> => {
  // Use relative URL in production or environment variable
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const { data } = await axios.get<NewsItem[]>(`${apiUrl}/api/news`);
  return data;
};

// JSON-LD structured data for better SEO
function generateJsonLd(news: NewsItem[], locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'News',
    description: 'Latest news and updates from Coinmerce',
    inLanguage: locale,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: news.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'NewsArticle',
          headline: item.title,
          description: item.description,
          // Add these when available:
          // datePublished: item.publishedAt,
          // dateModified: item.updatedAt,
          // author: { '@type': 'Organization', name: 'Coinmerce' },
          // image: item.imageUrl,
        },
      })),
    },
  };
}

export default async function NewsPage(props: IIndexProps) {
  const { locale } = await props.params;

  // Enable static rendering for this locale
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'News' });
  const news = await fetchNews();

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateJsonLd(news, locale)),
        }}
      />

      <div className="flex flex-col gap-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          {t('Latest_News')}
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          {t('meta_description')}
        </p>

        {news && news.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <Link
                key={item.id}
                href={{ pathname: '/news/[id]', params: { id: item.id } }}
              >
                <article className="h-full rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
                  <h2 className="mb-2 text-xl font-semibold text-foreground">
                    {item.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        )}

        {(!news || news.length === 0) && (
          <p className="text-zinc-500 dark:text-zinc-400">
            No news available at the moment.
          </p>
        )}
      </div>
    </>
  );
}

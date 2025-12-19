import axios from 'redaxios';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { LOCALES, pathnames, Link } from '@/i18n/routing';

interface NewsItem {
  id: string;
  slug: string;
  title: string;
  description: string;
}

type INewsDetailProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://coinmerce.io';

const fetchNewsBySlug = async (slug: string): Promise<NewsItem | null> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const { data } = await axios.get<NewsItem>(`${apiUrl}/api/news/${slug}`);
    return data;
  } catch {
    return null;
  }
};

export async function generateMetadata(
  props: INewsDetailProps
): Promise<Metadata> {
  const { locale, slug } = await props.params;
  const news = await fetchNewsBySlug(slug);

  if (!news) {
    return {
      title: 'News Not Found',
    };
  }

  const localizedPath =
    pathnames['/news/[slug]'][
      locale as keyof (typeof pathnames)['/news/[slug]']
    ] || '/news/[slug]';
  const resolvedPath = localizedPath.replace('[slug]', slug);
  const canonicalUrl = `${BASE_URL}/${locale}${resolvedPath}`;

  const alternateLanguages = LOCALES.reduce((acc, loc) => {
    const path =
      pathnames['/news/[slug]'][
        loc as keyof (typeof pathnames)['/news/[slug]']
      ] || '/news/[slug]';
    acc[loc] = `${BASE_URL}/${loc}${path.replace('[slug]', slug)}`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: news.title,
    description: news.description,

    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },

    openGraph: {
      title: news.title,
      description: news.description,
      url: canonicalUrl,
      siteName: 'Coinmerce',
      locale: locale,
      type: 'article',
    },

    twitter: {
      card: 'summary_large_image',
      title: news.title,
      description: news.description,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

function generateJsonLd(news: NewsItem, locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: news.title,
    description: news.description,
    inLanguage: locale,
    publisher: {
      '@type': 'Organization',
      name: 'Coinmerce',
    },
  };
}

export default async function NewsDetailPage(props: INewsDetailProps) {
  const { locale, slug } = await props.params;

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'News' });
  const news = await fetchNewsBySlug(slug);
  if (!news) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateJsonLd(news, locale)),
        }}
      />

      <div className="flex flex-col gap-8 py-16">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          {t('back_to_news')}
        </Link>

        <article className="max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
            {news.title}
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {news.description}
          </p>
        </article>
      </div>
    </>
  );
}


import axios from 'redaxios';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
interface NewsItem {
  id: string;
  title: string;
  description: string;
}
type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'News',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const fetchNews = async (): Promise<NewsItem[]> => {
  const { data } = await axios.get<NewsItem[]>('http://localhost:3000/api/news');
  return data;
};

export default async function NewsPage() {
  const news = await fetchNews();
  return (
    <div className="flex flex-col gap-8 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Latest News
      </h1>
      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        Stay updated with the latest news and announcements.
      </p>

      {/* {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-100" />
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
          Failed to load news. Please try again later.
        </div>
      )} */}

      {news && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h2 className="mb-2 text-xl font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

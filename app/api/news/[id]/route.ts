import { NextResponse } from 'next/server';
import { news } from '../route';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const newsItem = news.find((item) => item.slug === slug);

  if (!newsItem) {
    return NextResponse.json({ error: 'News item not found' }, { status: 404 });
  }

  return NextResponse.json(newsItem);
}

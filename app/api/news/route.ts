import { NextResponse } from "next/server";

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  description: string;
}

export const news: NewsItem[] = [
  {
    id: "1",
    slug: "next-js-15-released",
    title: "Next.js 15 Released",
    description:
      "The latest version of Next.js brings exciting new features and performance improvements.",
  },
  {
    id: "2",
    slug: "react-server-components",
    title: "React Server Components",
    description:
      "Learn how React Server Components can improve your application performance.",
  },
  {
    id: "3",
    slug: "typescript-5-3-updates",
    title: "TypeScript 5.3 Updates",
    description:
      "Explore the new features and improvements in TypeScript 5.3.",
  },
];

export async function GET() {
  return NextResponse.json(news);
}


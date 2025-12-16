import { NextResponse } from "next/server";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
}

const news: NewsItem[] = [
  {
    id: "1",
    title: "Next.js 15 Released",
    description:
      "The latest version of Next.js brings exciting new features and performance improvements.",
  },
  {
    id: "2",
    title: "React Server Components",
    description:
      "Learn how React Server Components can improve your application performance.",
  },
  {
    id: "3",
    title: "TypeScript 5.3 Updates",
    description:
      "Explore the new features and improvements in TypeScript 5.3.",
  },
];

export async function GET() {
  return NextResponse.json(news);
}


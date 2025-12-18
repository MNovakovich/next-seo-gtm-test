import { NextResponse } from "next/server";
import { news } from "../route";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const newsItem = news.find((item) => item.id === id);

  if (!newsItem) {
    return NextResponse.json(
      { error: "News item not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(newsItem);
}


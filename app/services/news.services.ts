import  axios  from 'redaxios';
import { NewsItem } from "@/app/api/news/route";

export const fetchAllNews = async (): Promise<NewsItem[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const { data } = await axios.get<NewsItem[]>(`${apiUrl}/api/news`);
    return data;
  } catch {
    return [];
  }
};
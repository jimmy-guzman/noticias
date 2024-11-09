import { StoriesTable } from "@/components/organisms";
import { fetchTopStories } from "@/services/hacker-news";

export default async function Page() {
  const data = await fetchTopStories();

  return <StoriesTable stories={data} />;
}

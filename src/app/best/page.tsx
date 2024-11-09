import { StoriesTable } from "@/components/organisms";
import { fetchBestStories } from "@/services/hacker-news";

export default async function Page() {
  const data = await fetchBestStories();

  return <StoriesTable stories={data} />;
}

import { StoriesTable } from "@/components/organisms";
import { fetchShows } from "@/services/hacker-news";

export default async function Page() {
  const data = await fetchShows();

  return <StoriesTable stories={data} />;
}

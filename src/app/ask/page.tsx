import { StoriesTable } from "@/components/organisms";
import { fetchAsks } from "@/services/hacker-news";

export default async function Page() {
  const data = await fetchAsks();

  return <StoriesTable stories={data} />;
}

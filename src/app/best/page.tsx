import { StoriesTable } from "@/components/tables";
import { fetchBestStories } from "@/data/hacker-news";

export default async function Page() {
  const data = await fetchBestStories();

  return (
    <div className="prose max-w-none">
      <StoriesTable stories={data} />
    </div>
  );
}

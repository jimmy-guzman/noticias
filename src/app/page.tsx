import { StoriesTable } from "@/components/tables";
import { fetchTopStories } from "@/data/hacker-news";

export const runtime = "edge";

export default async function Page() {
  const data = await fetchTopStories();

  return (
    <div className="prose max-w-none">
      <StoriesTable stories={data} />
    </div>
  );
}

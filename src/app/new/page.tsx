import { StoriesTable } from "@/components/tables";
import { fetchNewStories } from "@/data/hacker-news";

export default async function Page() {
  const data = await fetchNewStories();

  return (
    <div className="prose max-w-none">
      <StoriesTable stories={data} />
    </div>
  );
}

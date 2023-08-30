import { StoriesTable } from "@/components/organisms";
import { fetchNewStories } from "@/services/hacker-news";

export default async function Page() {
  const data = await fetchNewStories();

  return (
    <div className="prose max-w-none">
      <StoriesTable stories={data} />
    </div>
  );
}

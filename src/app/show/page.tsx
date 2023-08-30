import { StoriesTable } from "@/components/tables";
import { fetchShows } from "@/data/hacker-news";

export default async function Page() {
  const data = await fetchShows();

  return (
    <div className="prose max-w-none">
      <StoriesTable stories={data} />
    </div>
  );
}

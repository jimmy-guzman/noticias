import { StoriesTable } from "@/components/organisms";
import { fetchShows } from "@/services/hacker-news";

export default async function Page() {
  const data = await fetchShows();

  return (
    <div className="prose max-w-none">
      <StoriesTable stories={data} />
    </div>
  );
}

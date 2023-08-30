import { StoriesTable } from "@/components/tables";
import { fetchAsks } from "@/data/hacker-news";

export default async function Page() {
  const data = await fetchAsks();

  return (
    <div className="prose max-w-none">
      <StoriesTable stories={data} />
    </div>
  );
}

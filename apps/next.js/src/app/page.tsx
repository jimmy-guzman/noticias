import { fetchTopStories } from "@noticias/hn";

import { StoriesTable } from "@/components/stories-table";

export default async function Page() {
  const data = await fetchTopStories();

  return <StoriesTable stories={data} />;
}

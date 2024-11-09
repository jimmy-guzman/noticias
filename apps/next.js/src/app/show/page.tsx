import { fetchShows } from "@noticias/hn";

import { StoriesTable } from "@/components/stories-table";

export default async function Page() {
  const data = await fetchShows();

  return <StoriesTable stories={data} />;
}

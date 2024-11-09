import { fetchAsks } from "@noticias/hn";

import { StoriesTable } from "@/components/stories-table";

export default async function Page() {
  const data = await fetchAsks();

  return <StoriesTable stories={data} />;
}

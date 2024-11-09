import { fetchAsks } from "@noticias/hn";

import { StoriesTable } from "@/components/organisms";

export default async function Page() {
  const data = await fetchAsks();

  return <StoriesTable stories={data} />;
}

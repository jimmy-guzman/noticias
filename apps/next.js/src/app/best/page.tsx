import { fetchBestStories } from "@noticias/hn";

import { StoriesTable } from "@/components/organisms";

export default async function Page() {
  const data = await fetchBestStories();

  return <StoriesTable stories={data} />;
}

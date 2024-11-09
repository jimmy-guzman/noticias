import { fetchNewStories } from "@noticias/hn";

import { StoriesTable } from "@/components/organisms";

export default async function Page() {
  const data = await fetchNewStories();

  return <StoriesTable stories={data} />;
}

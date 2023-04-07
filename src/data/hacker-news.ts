export interface Story {
  by: string;
  descendants?: number;
  id: number;
  kids?: number[];
  score: number;
  time: number;
  title: string;
  type: "story";
  url?: string;
}

export type StoriesPrefix = "best" | "new" | "top";
export type Route = `${StoriesPrefix}stories` | `item/${number}`;
export type Versions = 0;

export const hackerNewsApi = (route: Route, version: Versions = 0) => {
  return `https://hacker-news.firebaseio.com/v${version}/${route}.json?print=pretty`;
};

export const fetchStory = async (id: number) => {
  const response = await fetch(hackerNewsApi(`item/${id}`));
  const story: Story = await response.json();

  return { ...story };
};

export const createFetchStories = (type: StoriesPrefix) => {
  return async () => {
    const response = await fetch(hackerNewsApi(`${type}stories`));
    const stories: number[] = await response.json();
    const results = await Promise.all(stories.map(fetchStory));

    return results.filter(Boolean);
  };
};

export const fetchTopStories = createFetchStories("top");

export const fetchNewStories = createFetchStories("new");

export const fetchBestStories = createFetchStories("best");

interface BaseItem {
  id: number;
  by: string;
  time: number;
}

export interface Story extends BaseItem {
  type: "story";
  descendants?: number;
  kids?: number[];
  score: number;
  title: string;
  url?: string;
}

export interface Comment extends BaseItem {
  type: "comment";
  kids: number[];
  parent: number;
  text: string;
}

export interface Job extends BaseItem {
  score: string;
  text: string;
  title: string;
  type: string;
  url: string;
}

export interface Show extends BaseItem {
  type: "story";
  descendants?: number;
  kids?: number[];
  score: number;
  title: string;
  url?: string;
}

export interface Ask extends BaseItem {
  type: "story";
  descendants: number;
  kids: number[];
  score: number;
  text: string;
  title: string;
}

export type Item = Ask | Job | Show | Story;

export type StoriesPrefix = "ask" | "best" | "job" | "new" | "show" | "top";
export type Route = `${StoriesPrefix}stories` | `item/${number}`;

export const hackerNewsApi = (route: Route) => {
  return `https://hacker-news.firebaseio.com/v0/${route}.json?print=pretty`;
};

export const fetchItem = async <TItem extends Item>(id: number) => {
  const response = await fetch(hackerNewsApi(`item/${id}`));
  const item: TItem = await response.json();

  return item;
};

export const createFetchItems = <TItem extends Item>(type: StoriesPrefix) => {
  return async () => {
    const response = await fetch(hackerNewsApi(`${type}stories`));
    const stories: number[] = await response.json();
    const results = await Promise.all(stories.map(fetchItem<TItem>));

    return results.filter(Boolean);
  };
};

export const fetchTopStories = createFetchItems<Story>("top");
export const fetchNewStories = createFetchItems<Story>("new");
export const fetchBestStories = createFetchItems<Story>("best");
export const fetchJobs = createFetchItems<Job>("job");
export const fetchShows = createFetchItems<Show>("show");
export const fetchAsks = createFetchItems<Ask>("ask");

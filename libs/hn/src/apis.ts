import type {
  Ask,
  Item,
  Job,
  Route,
  Show,
  StoriesPrefix,
  Story,
} from "./types";

const hackerNewsApi = (route: Route) => {
  return `https://hacker-news.firebaseio.com/v0/${route}.json?print=pretty`;
};

const fetchItem = async <TItem extends Item>(id: number) => {
  const response = await fetch(hackerNewsApi(`item/${id}`));
  const item = (await response.json()) as TItem;

  return item;
};

const createFetchItems = <TItem extends Item>(type: StoriesPrefix) => {
  return async () => {
    const response = await fetch(hackerNewsApi(`${type}stories`));
    const stories = (await response.json()) as number[];

    const results = await Promise.allSettled(stories.map(fetchItem<TItem>));

    return results
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);
  };
};

export const fetchTopStories = createFetchItems<Story>("top");
export const fetchNewStories = createFetchItems<Story>("new");
export const fetchBestStories = createFetchItems<Story>("best");
export const fetchJobs = createFetchItems<Job>("job");
export const fetchShows = createFetchItems<Show>("show");
export const fetchAsks = createFetchItems<Ask>("ask");

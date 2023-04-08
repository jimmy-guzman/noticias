import {
  fetchAsks,
  fetchBestStories,
  fetchJobs,
  fetchNewStories,
  fetchShows,
  fetchTopStories,
} from "@/data/hacker-news";

import { procedure, router } from "../trpc";

export const appRouter = router({
  asks: procedure.query(fetchAsks),
  bestStories: procedure.query(fetchBestStories),
  jobs: procedure.query(fetchJobs),
  newStories: procedure.query(fetchNewStories),
  shows: procedure.query(fetchShows),
  topStories: procedure.query(fetchTopStories),
});

export type AppRouter = typeof appRouter;

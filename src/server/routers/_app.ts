import {
  fetchBestStories,
  fetchNewStories,
  fetchTopStories,
} from "@/data/hacker-news";

import { procedure, router } from "../trpc";

export const appRouter = router({
  topStories: procedure.query(fetchTopStories),
  newStories: procedure.query(fetchNewStories),
  bestStories: procedure.query(fetchBestStories),
});

export type AppRouter = typeof appRouter;

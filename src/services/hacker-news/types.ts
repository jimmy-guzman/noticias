interface BaseItem {
  id: number;
  by: string;
  time: number;
}

export interface Story extends BaseItem {
  descendants?: number;
  kids?: number[];
  score: number;
  title: string;
  type: "story";
  url?: string;
}

export interface Comment extends BaseItem {
  kids: number[];
  parent: number;
  text: string;
  type: "comment";
}

export interface Job extends BaseItem {
  score: string;
  text: string;
  title: string;
  type: "job";
  url: string;
}

export interface Show extends BaseItem {
  descendants?: number;
  kids?: number[];
  score: number;
  title: string;
  type: "story";
  url?: string;
}

export interface Ask extends BaseItem {
  descendants: number;
  kids: number[];
  score: number;
  text: string;
  title: string;
  type: "story";
}

export type Item = Ask | Job | Show | Story;

export type StoriesPrefix = "ask" | "best" | "job" | "new" | "show" | "top";

export type Route = `${StoriesPrefix}stories` | `item/${number}`;

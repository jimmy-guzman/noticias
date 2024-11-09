interface BaseItem {
  /**
   * The username of the item's author.
   */
  by: string;
  /**
   * The item's unique id.
   */
  id: number;
  /**
   * Creation date of the item, in UNIX Time.
   */
  time: number;
}

export interface Story extends BaseItem {
  /**
   * In the case of stories or polls, the total comment count.
   */
  descendants?: number;
  /**
   * The ids of the item's comments, in ranked display order.
   */
  kids?: number[];
  /**
   * The story's score, or the votes for a pollopt.
   */
  score: number;
  /**
   * The title of the story, poll or job. HTML.
   */
  title: string;
  /**
   * The type of item. One of "job", "story", "comment", "poll", or "pollopt".
   */
  type: "story";
  /**
   * The URL of the story.
   */
  url?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO: use
interface Comment extends BaseItem {
  /**
   * The ids of the item's comments, in ranked display order.
   */
  kids: number[];
  /**
   * The comment's parent: either another comment or the relevant story.
   */
  parent: number;
  /**
   * The comment, story or poll text. HTML.
   */
  text: string;
  /**
   * The type of item. One of "job", "story", "comment", "poll", or "pollopt".
   */
  type: "comment";
}

export interface Job extends BaseItem {
  /**
   * The story's score, or the votes for a pollopt.
   */
  score: string;
  /**
   * The comment, story or poll text. HTML.
   */
  text: string;
  /**
   * The title of the story, poll or job. HTML.
   */
  title: string;
  /**
   * The type of item. One of "job", "story", "comment", "poll", or "pollopt".
   */
  type: "job";
  /**
   * The URL of the story.
   */
  url: string;
}

export interface Show extends BaseItem {
  /**
   * In the case of stories or polls, the total comment count.
   */
  descendants?: number;
  /**
   * The ids of the item's comments, in ranked display order.
   */
  kids?: number[];
  /**
   * The story's score, or the votes for a pollopt.
   */
  score: number;
  /**
   * The title of the story, poll or job. HTML.
   */
  title: string;
  /**
   * The type of item. One of "job", "story", "comment", "poll", or "pollopt".
   */
  type: "story";
  /**
   * The URL of the story.
   */
  url?: string;
}

export interface Ask extends BaseItem {
  /**
   * In the case of stories or polls, the total comment count.
   */
  descendants: number;
  /**
   * The ids of the item's comments, in ranked display order.
   */
  kids: number[];
  /**
   * The story's score, or the votes for a pollopt.
   */
  score: number;
  /**
   * The comment, story or poll text. HTML.
   */
  text: string;
  /**
   * The title of the story, poll or job. HTML.
   */
  title: string;
  /**
   * The type of item. One of "job", "story", "comment", "poll", or "pollopt".
   */
  type: "story";
}

export type Item = Ask | Job | Show | Story;

export type StoriesPrefix = "ask" | "best" | "job" | "new" | "show" | "top";

export type Route = `${StoriesPrefix}stories` | `item/${number}`;

import type { Story } from "@noticias/hn";

import { formatTimestamp } from "@/utils/format-time";

export const StoriesTable = ({ stories: data }: { stories: Story[] }) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {data.map((story, index) => {
        return (
          <li className="list-row" key={story.id}>
            <div className="w-18 text-right text-4xl font-thin tabular-nums opacity-30">
              {index + 1}
            </div>
            <div className="list-col-grow">
              <a
                className="link-hover link"
                href={story.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {story.title}
              </a>
              <div className="text-xs opacity-60">
                {story.score} by {story.by} | {formatTimestamp(story.time)} |{" "}
                {story.descendants} comments
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

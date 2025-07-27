import type { Job } from "@noticias/hn";

import { formatTimestamp } from "@/utils/format-time";

export const JobsTable = ({ jobs: data }: { jobs: Job[] }) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {data.map((job, index) => {
        return (
          <li className="list-row" key={job.id}>
            <div className="w-18 text-right text-4xl font-thin tabular-nums opacity-30">
              {index + 1}
            </div>
            <div className="list-col-grow">
              <a
                className="link-hover link"
                href={job.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {job.title}
              </a>
              <div className="text-xs opacity-60">
                {job.score} by {job.by} | {formatTimestamp(job.time)}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

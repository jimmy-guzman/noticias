import { createColumnHelper } from "@tanstack/react-table";
import { formatDistanceToNow, fromUnixTime } from "date-fns";

import type { Story } from "@/data/hacker-news";

import { Table } from "./table";

const columnHelper = createColumnHelper<Story>();

const columns = [
  columnHelper.display({
    id: "index",
    cell: (info) => info.row.index + 1,
  }),
  columnHelper.accessor("title", {
    cell: (info) =>
      info.row.original.url ? (
        <a
          href={info.row.original.url}
          className="link link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          {info.getValue()}
        </a>
      ) : (
        info.getValue()
      ),
  }),
  columnHelper.accessor("score", {
    header: "Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("descendants", {
    header: "Comments",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("by", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("time", {
    header: "Created",
    cell: (info) => `${formatDistanceToNow(fromUnixTime(info.getValue()))} ago`,
  }),
];

export const StoriesTable = ({ stories: data }: { stories: Story[] }) => {
  return <Table columns={columns} data={data} />;
};

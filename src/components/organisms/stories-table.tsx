"use client";
import { createColumnHelper } from "@tanstack/react-table";

import type { Story } from "@/services/hacker-news";

import { formatTime } from "@/utils/format-time";

import { Table } from "../molecules";

const columnHelper = createColumnHelper<Story>();

const columns = [
  columnHelper.display({
    cell: (info) => {return info.row.index + 1},
    id: "index",
  }),
  columnHelper.accessor("title", {
    cell: (info) =>
      {return info.row.original.url ? (
        <a
          className="link-hover link"
          href={info.row.original.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {info.getValue()}
        </a>
      ) : (
        info.getValue()
      )},
  }),
  columnHelper.accessor("score", {
    cell: (info) => {return info.getValue()},
    header: "Points",
  }),
  columnHelper.accessor("descendants", {
    cell: (info) => {return info.getValue()},
    header: "Comments",
  }),
  columnHelper.accessor("by", {
    cell: (info) => {return info.getValue()},
  }),
  columnHelper.accessor("time", {
    cell: (info) => {return formatTime(info.getValue())},
    header: "Created",
  }),
];

export const StoriesTable = ({ stories: data }: { stories: Story[] }) => {
  return <Table columns={columns} data={data} />;
};

"use client";
import { createColumnHelper } from "@tanstack/react-table";

import type { Story } from "@/services/hacker-news";

import { formatTime } from "@/utils/format-time";

import { Table } from "../molecules";

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
          className="link-hover link"
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
    cell: (info) => formatTime(info.getValue()),
  }),
];

export const StoriesTable = ({ stories: data }: { stories: Story[] }) => {
  return <Table columns={columns} data={data} />;
};

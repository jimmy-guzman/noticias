"use client";
import { createColumnHelper } from "@tanstack/react-table";

import type { Job } from "@/services/hacker-news";

import { formatTime } from "@/utils/format-time";

import { Table } from "../molecules";

const columnHelper = createColumnHelper<Job>();

const columns = [
  columnHelper.accessor("title", {
    cell: (info) => {
      return info.row.original.url ? (
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
      );
    },
  }),
  columnHelper.accessor("by", {
    cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("time", {
    cell: (info) => {
      return formatTime(info.getValue());
    },
    header: "Created",
  }),
];

export const JobsTable = ({ jobs: data }: { jobs: Job[] }) => {
  return <Table columns={columns} data={data} />;
};

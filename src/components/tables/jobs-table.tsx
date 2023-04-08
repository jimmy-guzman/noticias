import { createColumnHelper } from "@tanstack/react-table";

import type { Job } from "@/data/hacker-news";

import { formatTime } from "@/utils/formatTime";

import { Table } from "./table";

const columnHelper = createColumnHelper<Job>();

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
  columnHelper.accessor("by", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("time", {
    header: "Created",
    cell: (info) => formatTime(info.getValue()),
  }),
];

export const JobsTable = ({ jobs: data }: { jobs: Job[] }) => {
  return <Table columns={columns} data={data} />;
};

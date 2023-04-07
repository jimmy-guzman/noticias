import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";

import { Table } from "./table";

interface SkeletonTableProps {
  cols: number[];
  rows: number;
}

export const SkeletonTable = ({ rows, cols }: SkeletonTableProps) => {
  const data = useMemo(() => {
    return Array.from({ length: rows }, () => {
      return Object.fromEntries(cols.map((col, key) => [key, "#".repeat(col)]));
    });
  }, [rows, cols]);

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<Record<string, string>>();

    return cols.map((_col, key) =>
      columnHelper.accessor(key.toString(), {
        header: () => <div className="h-4 rounded bg-base-200" />,
        cell: (info) => (
          <div className="h-4 rounded bg-base-200">
            <span className="invisible">{info.getValue()}</span>
          </div>
        ),
      })
    );
  }, [cols]);

  return <Table columns={columns} data={data} className="animate-pulse" />;
};

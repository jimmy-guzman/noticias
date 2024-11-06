"use client";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";

import { Table } from "../molecules";

interface SkeletonTableProps {
  cols: number[];
  rows: number;
}

export const SkeletonTable = ({ cols, rows }: SkeletonTableProps) => {
  const data = useMemo(() => {
    return Array.from({ length: rows }, () => {
      return Object.fromEntries(
        cols.map((col, key) => {
          return [key, "#".repeat(col)];
        }),
      );
    });
  }, [rows, cols]);

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<Record<string, string>>();

    return cols.map((_col, key) => {
      return columnHelper.accessor(key.toString(), {
        // eslint-disable-next-line react/no-unstable-nested-components -- TODO: refactor
        cell: (info) => {
          return (
            <div className="h-4 animate-pulse rounded bg-base-200">
              <span className="invisible">{info.getValue()}</span>
            </div>
          );
        },
        // eslint-disable-next-line react/no-unstable-nested-components -- TODO: refactor
        header: () => {
          return <div className="h-4 animate-pulse rounded bg-base-200" />;
        },
      });
    });
  }, [cols]);

  return <Table className="animate-pulse" columns={columns} data={data} />;
};

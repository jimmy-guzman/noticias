"use client";
import type { ColumnDef, SortingState } from "@tanstack/react-table";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { clsx } from "clsx";
import { useState } from "react";

import { TableHeader } from "./table-header";

export const Table = <TData,>({
  className,
  columns,
  data,
}: {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO: refactor
  columns: ColumnDef<TData, any>[];
  data: TData[];
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: { sorting },
  });

  return (
    <div className="overflow-x-auto">
      <table className={clsx("table table-sm", className)}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return <TableHeader header={header} key={header.id} />;
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

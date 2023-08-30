import { flexRender } from "@tanstack/react-table";

import type { Header } from "@tanstack/react-table";

export const TableHeader = <T,>({ header }: { header: Header<T, unknown> }) => {
  return (
    <th key={header.id} className="font-extrabold uppercase">
      {header.isPlaceholder ? null : (
        <div
          className={
            header.column.getCanSort() ? "cursor-pointer select-none" : ""
          }
          onClick={header.column.getToggleSortingHandler()}
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
          {{
            asc: " ⏶",
            desc: " ⏷",
          }[header.column.getIsSorted() as string] ?? null}
        </div>
      )}
    </th>
  );
};

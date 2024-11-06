import type { Header } from "@tanstack/react-table";

import { flexRender } from "@tanstack/react-table";

export const TableHeader = <T,>({ header }: { header: Header<T, unknown> }) => {
  return (
    <th className="font-extrabold uppercase" key={header.id}>
      {header.isPlaceholder ? null : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- TODO: refactor
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

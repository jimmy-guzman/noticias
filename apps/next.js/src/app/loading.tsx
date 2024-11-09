import { SkeletonTable } from "@noticias/ui/skeleton-table";

export default function Loading() {
  return <SkeletonTable cols={[1, 4, 2, 2, 2, 2]} rows={50} />;
}

import { SkeletonTable } from "@noticias/ui/skeleton-table";

export default function Loading() {
  // eslint-disable-next-line no-magic-numbers -- a bit of magic here, but it's just a placeholder for loading state
  return <SkeletonTable cols={[1, 4, 2, 2, 2, 2]} rows={50} />;
}

import { SkeletonTable } from "@/components/organisms";

export default function Loading() {
  return <SkeletonTable cols={[1, 4, 2, 2, 2, 2]} rows={50} />;
}

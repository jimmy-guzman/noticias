import { SkeletonTable } from "@/components/organisms";

export default function Loading() {
  return (
    <div className="prose max-w-none">
      <SkeletonTable cols={[1, 4, 2, 2, 2, 2]} rows={50} />
    </div>
  );
}

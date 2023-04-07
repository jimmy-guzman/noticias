import { SkeletonTable, StoriesTable } from "@/components/tables";
import { trpc } from "@/utils/trpc";

export default function New() {
  const { data } = trpc.newStories.useQuery();

  return (
    <div className="prose max-w-none">
      {data ? (
        <StoriesTable stories={data} />
      ) : (
        <SkeletonTable cols={[1, 4, 2, 2, 2, 2]} rows={50} />
      )}
    </div>
  );
}

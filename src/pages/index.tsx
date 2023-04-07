import { StoriesTable, SkeletonTable } from "@/components/tables";
import { trpc } from "@/utils/trpc";

export default function Home() {
  const { data } = trpc.topStories.useQuery();

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

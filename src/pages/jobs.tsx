import { JobsTable, SkeletonTable } from "@/components/tables";
import { trpc } from "@/utils/trpc";

export default function Jobs() {
  const { data } = trpc.jobs.useQuery();

  return (
    <div className="prose max-w-none">
      {data ? (
        <JobsTable jobs={data} />
      ) : (
        <SkeletonTable cols={[1, 4, 2, 2, 2, 2]} rows={50} />
      )}
    </div>
  );
}

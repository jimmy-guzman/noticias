import { JobsTable } from "@/components/tables";
import { fetchJobs } from "@/data/hacker-news";

export default async function Page() {
  const data = await fetchJobs();

  return (
    <div className="prose max-w-none">
      <JobsTable jobs={data} />
    </div>
  );
}

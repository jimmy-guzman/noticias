import { JobsTable } from "@/components/organisms";
import { fetchJobs } from "@/services/hacker-news";

export default async function Page() {
  const data = await fetchJobs();

  return (
    <div className="prose max-w-none">
      <JobsTable jobs={data} />
    </div>
  );
}

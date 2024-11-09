import { JobsTable } from "@/components/organisms";
import { fetchJobs } from "@/services/hacker-news";

export default async function Page() {
  const data = await fetchJobs();

  return <JobsTable jobs={data} />;
}

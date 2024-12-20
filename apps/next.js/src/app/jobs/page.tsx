import { fetchJobs } from "@noticias/hn";

import { JobsTable } from "@/components/jobs-table";

export default async function Page() {
  const data = await fetchJobs();

  return <JobsTable jobs={data} />;
}

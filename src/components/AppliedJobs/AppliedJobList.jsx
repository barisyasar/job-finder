import AppliedJobItem from "./AppliedJobItem";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useAppliedJobs } from "@/hooks/useAppliedobs";

function AppliedJobList() {
  const results = useAppliedJobs();

  const isLoading = results.some((result) => result.isLoading);

  const hasError = results.some((result) => result.isError);

  const jobs = results
    .filter((result) => result.isSuccess)
    .map((result) => result.data);

  if (isLoading) return <div>Loading...</div>;

  if (hasError) {
    return (
      <Alert variant="error" className="text-red-400">
        <InfoCircledIcon className="h-4 w-4 stroke-red-400" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load some of the applied jobs.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container my-3 gy-3">
      {jobs.length === 0 ? (
        <Alert variant="info" className="text-yellow-400">
          <InfoCircledIcon className="h-4 w-4 stroke-yellow-400" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>There are no applied jobs.</AlertDescription>
        </Alert>
      ) : (
        jobs.map((job, index) => <AppliedJobItem key={index} job={job} />)
      )}
    </div>
  );
}

export default AppliedJobList;

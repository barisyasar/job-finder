// Applied Jobs List
import useZustand from "@/state/useZustand";
import AppliedJobItem from "./AppliedJobItem";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";

function AppliedJobList() {
  const { user } = useZustand();

  return (
    <div className="container my-3 gy-3">
      {user.appliedJobs.length === 0 ? (
        <Alert variant="info" className="text-yellow-400">
          <InfoCircledIcon className="h-4 w-4 stroke-yellow-400" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>There is no applied job exist.</AlertDescription>
        </Alert>
      ) : (
        user.appliedJobs.map((job) => <AppliedJobItem key={job.id} job={job} />)
      )}
    </div>
  );
}

export default AppliedJobList;

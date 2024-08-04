// Job Panel
import useScreen from "@/hooks/useScreen";
import { Separator } from "../ui/separator";
import JobDisplayCount from "./JobDisplayCount";
import JobList from "./JobList";
import JobPagination from "./JobPagination";
import OrderJobInput from "./OrderJobInput";
import SearchJobIntput from "./SearchJobInput";
import AppliedJobsSheet from "../AppliedJobsSheet/AppliedjobsSheet";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useJobs } from "@/hooks/useJobs";

function JobPanel() {
  const isAboveLarge = useScreen("lg");

  const { isLoading, error, data } = useJobs();

  if (isLoading) return <div className="container mt-3">Loading...</div>;
  if (error)
    return (
      <div className="container mt-4 max-w-2xl">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error loading jobs</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      </div>
    );

  return (
    <section>
      <div className="container">
        <div className="flex gap-3 my-3 items-center">
          <div className="text-sm hidden sm:block">Basic Filter</div>
          <div className="w-[140px]">
            <OrderJobInput />
          </div>
          <div className="w-[140px]">
            <SearchJobIntput />
          </div>

          {!isAboveLarge && (
            <div className="ms-auto">
              <AppliedJobsSheet />
            </div>
          )}
        </div>
      </div>
      <Separator />
      <JobList jobs={data.data} />
      <Separator />
      <div className="container my-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-5 lg:items-center">
          <div className="hidden sm:block w-[125px]"></div>
          <div>
            <JobPagination totalCount={data.meta.total} />
          </div>
          <div className="flex gap-3 items-center justify-center sm:justify-end self-center w-[125px]">
            <div className="text-sm">Show</div>
            <div className="w-[70px]">
              <JobDisplayCount />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobPanel;

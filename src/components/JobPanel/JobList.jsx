// Job List
import { ScrollArea } from "../ui/scroll-area";
import JobItem from "./JobItem";

function JobList({ jobs }) {
  return (
    <div className="container my-3 gy-3">
      <ScrollArea className="sm:h-[calc(100vh-14rem)] md:h-[calc(100vh-15rem)]">
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </ScrollArea>
    </div>
  );
}

export default JobList;

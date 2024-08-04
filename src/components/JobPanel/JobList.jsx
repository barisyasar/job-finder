// Job List
import { ScrollArea } from "../ui/scroll-area";
import JobItem from "./JobItem";

function JobList() {
  return (
    <div className="container my-3 gy-3">
      <ScrollArea className="">
        {Array.from({ length: 3 }).map((_, i) => (
          <JobItem key={i} />
        ))}
      </ScrollArea>
    </div>
  );
}

export default JobList;

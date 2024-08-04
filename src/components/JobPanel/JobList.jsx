// Job List
import { ScrollArea } from "../ui/scroll-area";
import JobItem from "./JobItem";

function JobList() {
  return (
    <div className="container my-3 gy-3">
      <ScrollArea className="sm:h-[calc(100vh-14rem)] md:h-[calc(100vh-15rem)]">
        {Array.from({ length: 10 }).map((_, i) => (
          <JobItem key={i} />
        ))}
      </ScrollArea>
    </div>
  );
}

export default JobList;

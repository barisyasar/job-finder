// Job List
import JobItem from "./JobItem";

function JobList() {
  return (
    <div className="container my-3 gy-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <JobItem key={i} />
      ))}
    </div>
  );
}

export default JobList;

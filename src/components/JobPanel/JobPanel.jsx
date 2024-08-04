// Job Panel
import { Separator } from "../ui/separator";
import JobDisplayCount from "./JobDisplayCount";
import JobList from "./JobList";
import JobPagination from "./JobPagination";
import OrderJobInput from "./OrderJobInput";
import SearchJobIntput from "./SearchJobInput";

function JobPanel() {
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
        </div>
      </div>
      <Separator />
      <JobList />
      <Separator />
      <div className="container my-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-5 lg:items-center">
          <div className="hidden sm:block w-[125px]"></div>
          <div>
            <JobPagination currentPage={1} pageCount={10} />
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

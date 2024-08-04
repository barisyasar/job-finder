// Job Item
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BriefcaseBusiness } from "lucide-react";
import JobDetailDialog from "../JobDetailDialog";
import { Separator } from "../ui/separator";
import KeywordList from "../KeywordList";
import useZustand from "@/state/useZustand";
import WithdrawButton from "../WithdrawButton/WithdrawButton";

function JobItem({ job }) {
  const { user } = useZustand();
  const { appliedJobs } = user;

  return (
    <Card className="job-item lg:flex items-start">
      <BriefcaseBusiness size={48} className="hidden lg:block ms-6 mt-6" />
      <div className="lg:flex-grow">
        <CardHeader>
          <div className="flex items-start xl:items-start gap-3">
            <BriefcaseBusiness size={28} className="lg:hidden" />
            <CardTitle className="flex xl:items-center flex-col xl:flex-row gap-2">
              <div>{job.companyName}</div>
              <Separator
                orientation="vertical"
                className="hidden xl:block h-6 bg-blue-800"
              />
              <div>{job.name}</div>
            </CardTitle>
          </div>
          <CardDescription>Location: {job.location}</CardDescription>
          <CardDescription>Salary: {job.salary} $</CardDescription>
        </CardHeader>
        <CardContent className="max-w-3xl">
          <p className="mb-4">{job.description}</p>
          <KeywordList keywords={job.keywords} />
        </CardContent>
      </div>
      <CardFooter className="gap-5 lg:flex lg:flex-col lg:gap-3 lg:m-6">
        <JobDetailDialog job={job} />
        {appliedJobs.includes(job.id) && <WithdrawButton id={job.id} />}
      </CardFooter>
    </Card>
  );
}

export default JobItem;

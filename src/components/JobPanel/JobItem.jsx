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
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import JobDetailDialog from "../JobDetailDialog";
import { Separator } from "../ui/separator";

function JobItem({ job }) {
  return (
    <Card className="job-item lg:flex items-start">
      <BriefcaseBusiness size={48} className="hidden lg:block ms-6 mt-6" />
      <div className="lg:flex-grow">
        <CardHeader>
          <div className="flex items-center gap-3">
            <BriefcaseBusiness size={28} className="lg:hidden" />
            <CardTitle className="flex items-center">
              {job.companyName}
              <Separator
                orientation="vertical"
                className="h-6 mx-2 bg-blue-800"
              />
              {job.name}
            </CardTitle>
          </div>
          <CardDescription>Location: {job.location}</CardDescription>
          <CardDescription>Salary: {job.salary}</CardDescription>
        </CardHeader>
        <CardContent className="max-w-3xl">
          <p className="mb-4">{job.description}</p>
          <div className="flex gap-2">
            {job.keywords.map((keyword) => (
              <Badge key={keyword} className="bg-blue-800 text-white">
                # {keyword}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
      <CardFooter className="gap-5 lg:flex lg:flex-col lg:gap-3 lg:m-6">
        <JobDetailDialog job={job} />
        <Button className="w-[80px]" size="sm" variant="outline">
          Withdraw
        </Button>
      </CardFooter>
    </Card>
  );
}

export default JobItem;

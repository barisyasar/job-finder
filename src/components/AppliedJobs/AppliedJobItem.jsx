// Applied Job Item
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AppliedJobItem({ job }) {
  return (
    <Card className="applied-job-item">
      <CardHeader>
        <CardTitle>{job.name}</CardTitle>
        <CardDescription>
          <div className="flex flex-col space-y-1.5 mt-3">
            <div>
              <span className="font-semibold">Company Name:</span>{" "}
              <span className="font-light">{job.companyName}</span>
            </div>
            <div>
              <span className="font-semibold">Location:</span>{" "}
              <span className="font-light">{job.location}</span>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default AppliedJobItem;

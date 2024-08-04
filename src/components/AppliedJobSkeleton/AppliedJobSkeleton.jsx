import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function AppliedJobSkeleton() {
  return (
    <Card className="applied-job-item p-3 space-y-2.5">
      <Skeleton className="h-[20px] w-1/2" />
      <Skeleton className="h-[24px] w-full" />
      <Skeleton className="h-[24px] w-full" />
    </Card>
  );
}

export default AppliedJobSkeleton;

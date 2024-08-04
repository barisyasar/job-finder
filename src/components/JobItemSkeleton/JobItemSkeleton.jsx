import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function JobItemSkeleton() {
  return (
    <Card className="job-item p-3 space-y-4">
      <Skeleton className="h-[20px] w-1/2" />
      <Skeleton className="h-[24px] w-full" />
      <Skeleton className="h-[40px] w-full" />
    </Card>
  );
}

export default JobItemSkeleton;

// Applied Jobs Sheet
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AppliedJobList from "../AppliedJobs/AppliedJobList";
import { ScrollArea } from "../ui/scroll-area";
import UserProfile from "../UserProfile";

export default function AppliedJobsSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm">Applied Jobs</Button>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="applied-jobs-sheet-header">
          <UserProfile />
          <SheetTitle className="text-center">Applied Jobs</SheetTitle>
          <SheetDescription>
            <ScrollArea className="h-[calc(100vh-10rem)]">
              <AppliedJobList />
            </ScrollArea>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

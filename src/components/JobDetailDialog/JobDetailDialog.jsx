// Job Detail Dialog
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";

export default function JobDetailDialog({ job }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[80px]" size="sm">
          Detail
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>APPLY JOB</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col space-y-1.5 mt-3">
              <div>
                <span className="font-semibold">Company Name:</span>{" "}
                <span className="font-light">{job.companyName}</span>
              </div>
              <div>
                <span className="font-semibold">Job Name:</span>{" "}
                <span className="font-light">{job.name}</span>
              </div>
              <div>
                <span className="font-semibold">Created At:</span>{" "}
                <span className="font-light">{job.createdAt}</span>
              </div>
              <div>
                <span className="font-semibold">Keyword:</span>{" "}
                <span className="font-light">{job.salary}</span>
              </div>
              <div>
                <div className="font-semibold">Description:</div>{" "}
                <p className="font-light border p-4 mt-3">{job.description}</p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-row flex-wrap items-center">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button>Apply</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

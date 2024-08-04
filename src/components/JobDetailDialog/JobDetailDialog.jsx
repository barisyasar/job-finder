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
import { formatDate } from "@/utils/formatDate";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";
import KeywordList from "../KeywordList";
import ApplyJobButton from "../ApplyJobButton";
import useZustand from "@/state/useZustand";

export default function JobDetailDialog({ job }) {
  const { user } = useZustand();
  const { appliedJobs } = user;

  const isApplied = appliedJobs.includes(job.id);
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
            <div className="flex flex-col space-y-1.5 mt-3 text-start">
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
                <span className="font-light">{formatDate(job.createdAt)}</span>
              </div>
              <div>
                <span className="font-semibold">Location:</span>{" "}
                <span className="font-light">{job.location}</span>
              </div>
              <div>
                <div className="font-semibold mb-2">Keywords:</div>
                <KeywordList keywords={job.keywords} />
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
          {!isApplied && <ApplyJobButton id={job.id} />}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

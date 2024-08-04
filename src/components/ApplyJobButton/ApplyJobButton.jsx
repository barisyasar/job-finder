// Apply Job Button

import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useApplyJob } from "@/hooks/useApplyJob";

function ApplyJobButton({ id }) {
  const { isPending, mutate } = useApplyJob();
  const handleApply = () => {
    mutate(id);
  };
  return (
    <Button
      className={"transition-width duration-300"}
      onClick={handleApply}
      disabled={isPending}
      type="button"
    >
      {isPending && <ReloadIcon className="mr-2 h-3 w-3 animate-spin" />}
      Apply
    </Button>
  );
}

export default ApplyJobButton;

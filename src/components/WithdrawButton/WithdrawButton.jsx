// Withdraw Button

import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useWithDrawJob } from "@/hooks/useWithdrawJob";

function WithdrawButton({ id }) {
  const { isPending, mutate } = useWithDrawJob();
  const handleWithdraw = () => {
    mutate(id);
  };
  return (
    <Button
      className={`w-${
        isPending ? "[100px]" : "[80px]"
      } transition-width duration-300`}
      size="sm"
      variant="outline"
      onClick={handleWithdraw}
      disabled={isPending}
      type="button"
    >
      {isPending && <ReloadIcon className="mr-2 h-3 w-3 animate-spin" />}
      Withdraw
    </Button>
  );
}

export default WithdrawButton;

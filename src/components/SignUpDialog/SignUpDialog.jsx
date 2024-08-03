import useZustand from "@/state/useZustand";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function SignUpDialog() {
  const { dialog, setDialog, resetDialog } = useZustand();

  return (
    <Dialog
      open={dialog === "sign up"}
      onOpenChange={(open) => (open ? setDialog("sign up") : resetDialog())}
    >
      <DialogTrigger asChild>
        <Button size="sm">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>SIGN UP</DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex items-center gap-2">
          Already have an account?
          <Button
            variant="link"
            className="p-0 text-base"
            size="md"
            onClick={() => setDialog("login")}
          >
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

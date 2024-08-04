// Sign Up Dialog
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
import SignUpForm from "../SignUpForm";

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

        <SignUpForm />

        <DialogFooter className="flex flex-row flex-wrap items-center">
          <div>Already have an account?</div>&nbsp;&nbsp;
          <Button
            variant="link"
            className="p-0 text-base text-blue-600"
            onClick={() => setDialog("login")}
          >
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>SIGN UP</DialogTitle>
        </DialogHeader>

        <DialogFooter>Already have an account? Login</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

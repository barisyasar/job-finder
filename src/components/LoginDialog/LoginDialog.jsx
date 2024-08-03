import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useZustand from "@/state/useZustand";

export default function LoginDialog() {
  const { dialog, setDialog, resetDialog } = useZustand();

  return (
    <Dialog
      open={dialog === "login"}
      onOpenChange={(open) => (open ? setDialog("login") : resetDialog())}
    >
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>LOGIN</DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex items-center gap-2">
          Don&apos;t you have an account?
          <Button
            variant="link"
            className="p-0 text-base"
            size="md"
            onClick={() => setDialog("sign up")}
          >
            Sign Up
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

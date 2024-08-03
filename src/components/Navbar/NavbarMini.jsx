// NavbarMini
import { Button } from "../ui/button";
import { NavbarMinisheet } from "./NavbarMiniSheet";

function NavbarMini() {
  return (
    <nav className="container flex justify-between items-center">
      <NavbarMinisheet />
      <div className="flex gap-2">
        <Button size="sm" variant="outline">
          Log In
        </Button>
        <Button size="sm">Sign Up</Button>
      </div>
    </nav>
  );
}

export default NavbarMini;

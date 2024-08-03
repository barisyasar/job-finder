// NavbarLarge
import NavbarBrand from "../NavbarBrand";
import { Button } from "../ui/button";

function NavbarLarge() {
  return (
    <nav className="container flex justify-between items-center">
      <NavbarBrand />

      <div className="flex gap-2">
        <Button variant="outline">Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
}

export default NavbarLarge;

// NavbarMini
import LoginDialog from "../LoginDialog/LoginDialog";
import SignUpDialog from "../SignUpDialog";
import { NavbarMinisheet } from "./NavbarMiniSheet";

function NavbarMini() {
  return (
    <nav className="container flex justify-between items-center">
      <NavbarMinisheet />
      <div className="flex gap-3">
        <LoginDialog />
        <SignUpDialog />
      </div>
    </nav>
  );
}

export default NavbarMini;

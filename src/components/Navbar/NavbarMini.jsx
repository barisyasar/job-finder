// NavbarMini
import useZustand from "@/state/useZustand";
import LoginDialog from "../LoginDialog/LoginDialog";
import SignUpDialog from "../SignUpDialog";
import { NavbarMinisheet } from "./NavbarMiniSheet";
import UserProfile from "../UserProfile";
import LogoutButton from "../LogoutButton";

function NavbarMini() {
  const { user } = useZustand();

  return (
    <nav className="container flex justify-between items-center">
      <NavbarMinisheet />
      {user ? (
        <div className="flex items-center gap-4">
          <LogoutButton />
          <UserProfile />
        </div>
      ) : (
        <div className="flex gap-3">
          <LoginDialog />
          <SignUpDialog />
        </div>
      )}
    </nav>
  );
}

export default NavbarMini;

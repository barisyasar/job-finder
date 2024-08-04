// NavbarLarge
import useZustand from "@/state/useZustand";
import LoginDialog from "../LoginDialog";
import NavbarBrand from "../NavbarBrand";
import SignUpDialog from "../SignUpDialog";
import UserProfile from "../UserProfile";
import { NavLink } from "react-router-dom";
import LogoutButton from "../LogoutButton";

function NavbarLarge() {
  const { user } = useZustand();

  return (
    <nav className="container flex justify-between items-center">
      <NavbarBrand />

      {user ? (
        <div className="flex items-center gap-4">
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? "underline text-white" : ""
            }
          >
            Job List
          </NavLink>
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

export default NavbarLarge;

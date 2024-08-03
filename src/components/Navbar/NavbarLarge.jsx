// NavbarLarge
import LoginDialog from "../LoginDialog";
import NavbarBrand from "../NavbarBrand";
import SignUpDialog from "../SignUpDialog";

function NavbarLarge() {
  return (
    <nav className="container flex justify-between items-center">
      <NavbarBrand />

      <div className="flex gap-3">
        <LoginDialog />
        <SignUpDialog />
      </div>
    </nav>
  );
}

export default NavbarLarge;

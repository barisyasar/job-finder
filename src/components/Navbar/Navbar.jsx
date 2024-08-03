import useScreen from "@/hooks/useScreen";
import NavbarMini from "./NavbarMini";
import NavbarLarge from "./NavbarLarge";

function Navbar() {
  const isAboveMedium = useScreen("md");
  return <>{isAboveMedium ? <NavbarLarge /> : <NavbarMini />}</>;
}

export default Navbar;

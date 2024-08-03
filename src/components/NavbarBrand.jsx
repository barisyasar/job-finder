import { Link } from "react-router-dom";

function NavbarBrand() {
  return (
    <Link to="/" className="text-3xl font-bold hover:underline">
      ACME
    </Link>
  );
}

export default NavbarBrand;

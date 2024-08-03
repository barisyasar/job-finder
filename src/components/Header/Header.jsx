// Header.jsx
import Navbar from "../Navbar";

function Header() {
  return (
    <header className="fixed top-0 w-full border-b h-12 md:h-20 flex items-center bg-opacity-50 backdrop-blur-md">
      <Navbar />
    </header>
  );
}

export default Header;

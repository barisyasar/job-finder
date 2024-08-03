// Header.jsx
import Navbar from "../Navbar";

function Header() {
  return (
    <header className="fixed top-0 w-full border-b h-16 md:h-20 flex items-center bg-opacity-50 backdrop-blur-md">
      <Navbar />
    </header>
  );
}

export default Header;

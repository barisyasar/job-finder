// Layout.jsx
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
}

export default Layout;

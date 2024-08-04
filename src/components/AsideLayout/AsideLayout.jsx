// Aside Layout
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

function AsideLayout() {
  return (
    <>
      <div className="flex">
        <div>
          <Header />
          <Outlet />
        </div>
        <aside>asdf</aside>
      </div>
      <Toaster />
    </>
  );
}

export default AsideLayout;

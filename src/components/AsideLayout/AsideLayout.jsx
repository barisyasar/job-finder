// Aside Layout
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import useScreen from "@/hooks/useScreen";

function AsideLayout() {
  const isAboveLarge = useScreen("lg");

  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <Header />
          <Outlet />
        </div>
        {isAboveLarge && <aside>asdf</aside>}
      </div>
      <Toaster />
    </>
  );
}

export default AsideLayout;

// Aside Layout
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import useScreen from "@/hooks/useScreen";
import AppliedJobs from "../AppliedJobs";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

function AsideLayout() {
  const isAboveLarge = useScreen("lg");

  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <Header />
          <Outlet />
        </div>

        {isAboveLarge && (
          <>
            <Separator orientation="vertical" className="h-screen" />
            <aside className="w-1/3 xl:w-1/4">
              <ScrollArea className="h-screen pt-20">
                <AppliedJobs />
              </ScrollArea>
            </aside>
          </>
        )}
      </div>
      <Toaster />
    </>
  );
}

export default AsideLayout;

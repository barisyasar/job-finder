// Aside Layout
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import useScreen from "@/hooks/useScreen";
import AppliedJobs from "../AppliedJobs";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import UserProfile from "../UserProfile";
import useZustand from "@/state/useZustand";

function AsideLayout() {
  const isAboveLarge = useScreen("lg");

  const { user } = useZustand();

  return (
    <>
      <div className="lg:flex">
        <div className="lg:flex-grow">
          <Header />
          <Outlet />
        </div>

        {isAboveLarge && user && (
          <>
            <Separator orientation="vertical" className="h-screen" />
            <aside className="w-1/3 xl:w-1/4">
              <ScrollArea className="h-screen">
                <div className="mt-20">
                  <UserProfile />
                </div>

                <div className="mt-7 mb-5 text-xl text-center">
                  Applied Jobs
                </div>
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

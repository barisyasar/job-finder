import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavbarBrand from "../NavbarBrand";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import useZustand from "@/state/useZustand";

export function NavbarMinisheet() {
  const { user } = useZustand();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" size="icon">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <NavbarBrand />
          </SheetTitle>
          <SheetDescription>
            <ul>
              <li className="mb-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "underline text-white" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    to="/jobs"
                    className={({ isActive }) =>
                      isActive ? "underline text-white" : ""
                    }
                  >
                    Job List
                  </NavLink>
                </li>
              )}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

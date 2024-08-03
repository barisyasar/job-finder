import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import NavbarBrand from "../NavbarBrand";
import { NavLink } from "react-router-dom";

export function NavbarMinisheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" size="icon">
          <HamburgerMenuIcon className="h-5 w-5" />
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
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

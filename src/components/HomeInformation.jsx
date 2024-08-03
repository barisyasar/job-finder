// Home Information

import NavbarBrand from "./NavbarBrand";
import { Separator } from "./ui/separator";

function HomeInformation() {
  return (
    <section>
      <div className="container text-center lg:text-start lg:flex items-center lg:py-10">
        <div className="py-36 lg:py-0 lg:flex lg:gap-8 lg:w-1/2 lg:pe-10 self-start">
          <NavbarBrand />
          <article>
            <h2 className="text-2xl font-semibold">Ready to get started</h2>
            <p className="font-light mt-3 max-w-xl mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              ullam voluptatem enim, aut aliquid fugiat nesciunt voluptatibus
              voluptate esse ratione, pariatur odio ducimus quam debitis
              aspernatur. Minima expedita sint id?
            </p>
          </article>
        </div>

        <Separator className="lg:hidden" orientation="horizontal" />
        <Separator className="hidden h-56 lg:block" orientation="vertical" />

        <div className="py-5 lg:py-0 lg:ps-10 self-end">
          © 2010 — 2024 Privacy — Terms
        </div>
      </div>
    </section>
  );
}

export default HomeInformation;

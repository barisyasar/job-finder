import HomeHero from "@/components/HomeHero";
import HomeInformation from "@/components/HomeInformation";
import { Separator } from "@/components/ui/separator";

function Home() {
  return (
    <main>
      <HomeHero />
      <Separator />
      <HomeInformation />
    </main>
  );
}

export default Home;

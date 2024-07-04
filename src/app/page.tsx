import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Sponsors from "@/components/sponsors/Sponsors";
import Events from "@/components/events/Events";
import Stats from "@/components/stats/Stats";
import Cta from "@/components/cta/Cta";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Sponsors />
      <Events />
      <Stats />
      <Cta />
    </main>
  );
}

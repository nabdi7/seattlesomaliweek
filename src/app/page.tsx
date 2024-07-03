import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Events from "@/components/events/Events";
import Cta from "@/components/cta/Cta";
import Stats from "@/components/stats/Stats";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Events />
      <Stats />
      <Cta />
    </main>
  );
}

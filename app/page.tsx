import Backdrop from "@/components/Backdrop";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import SpecsStrip from "@/components/SpecsStrip";
import Vessel from "@/components/Vessel";
import OnBoard from "@/components/OnBoard";
import Destinations from "@/components/Destinations";
import Toys from "@/components/Toys";
import Gallery from "@/components/Gallery";
import Crew from "@/components/Crew";
import Galley from "@/components/Galley";
import Social from "@/components/Social";
import Specs from "@/components/Specs";
import Enquire from "@/components/Enquire";
import SiteFooter from "@/components/SiteFooter";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <>
      <Backdrop />
      <TopBar />
      <main>
        <Hero />
        <SpecsStrip />
        <Vessel />
        <OnBoard />
        <Destinations />
        <Toys />
        <Gallery />
        <Crew />
        <Galley />
        <Social />
        <Specs />
        <Enquire />
      </main>
      <SiteFooter />
      <ScrollEffects />
    </>
  );
}

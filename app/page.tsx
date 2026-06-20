import Backdrop from "@/components/Backdrop";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import SpecsStrip from "@/components/SpecsStrip";
import Vessel from "@/components/Vessel";
import OnBoard from "@/components/OnBoard";
import Gallery from "@/components/Gallery";
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
        <Gallery />
        <Specs />
        <Enquire />
      </main>
      <SiteFooter />
      <ScrollEffects />
    </>
  );
}

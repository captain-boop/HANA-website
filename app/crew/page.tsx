import type { Metadata } from "next";
import Backdrop from "@/components/Backdrop";
import TopBar from "@/components/TopBar";
import Crew from "@/components/Crew";
import SiteFooter from "@/components/SiteFooter";
import ScrollEffects from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: "The Crew — HANA | Mediterranean Charter",
  description:
    "Meet HANA's crew — fifteen across deck, galley and interior, led by rotational captains who know her intimately.",
  alternates: { canonical: "/crew" },
};

export default function CrewPage() {
  return (
    <>
      <Backdrop />
      <TopBar />
      <main className="subpage">
        <a id="top" />
        <Crew />
      </main>
      <SiteFooter />
      <ScrollEffects />
    </>
  );
}

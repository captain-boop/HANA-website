import type { Metadata } from "next";
import Backdrop from "@/components/Backdrop";
import TopBar from "@/components/TopBar";
import SiteFooter from "@/components/SiteFooter";
import ScrollEffects from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: "Terms — HANA | Mediterranean Charter",
  description: "Terms governing the use of the HANA charter website and enquiries.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Backdrop />
      <TopBar />
      <main className="subpage legal">
        <a id="top" />
        <div className="wrap">
          <h1 className="reveal">Terms</h1>
          <p className="legal-note reveal">
            This is placeholder text. Final terms should be reviewed and supplied
            by the operator&rsquo;s legal advisers before publication.
          </p>
          <div className="legal-body reveal">
            <h2>Website use</h2>
            <p>
              This website presents HANA for private charter. The descriptions,
              specifications, photography and sample itineraries are provided for
              general information and may change without notice. Nothing on this
              site constitutes a contract or an offer capable of acceptance.
            </p>
            <h2>Enquiries</h2>
            <p>
              Charter enquiries are handled directly by the yacht&rsquo;s
              management. All charters are subject to a separate written charter
              agreement, availability, and applicable terms and conditions agreed
              at the time of booking.
            </p>
            <h2>Contact</h2>
            <p>
              For any question about these terms, write to{" "}
              <a href="mailto:captain@myhana.com">captain@myhana.com</a>.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
      <ScrollEffects />
    </>
  );
}

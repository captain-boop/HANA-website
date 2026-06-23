import type { Metadata } from "next";
import Backdrop from "@/components/Backdrop";
import TopBar from "@/components/TopBar";
import SiteFooter from "@/components/SiteFooter";
import ScrollEffects from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: "Privacy — HANA | Mediterranean Charter",
  description: "How enquiry details submitted through the HANA website are handled.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Backdrop />
      <TopBar />
      <main className="subpage legal">
        <a id="top" />
        <div className="wrap">
          <h1 className="reveal">Privacy</h1>
          <p className="legal-note reveal">
            This is placeholder text. A final privacy policy should be reviewed
            and supplied by the operator&rsquo;s legal advisers before
            publication.
          </p>
          <div className="legal-body reveal">
            <h2>What we collect</h2>
            <p>
              When you send a charter enquiry, your email client submits the
              details you provide — your name, email address, preferred dates,
              party size and any message — directly to the yacht&rsquo;s
              management. This website does not store those details on a server.
            </p>
            <h2>How it is used</h2>
            <p>
              Enquiry details are used solely to respond to your charter enquiry
              and are not sold or shared for marketing purposes.
            </p>
            <h2>Contact</h2>
            <p>
              To ask about the information held about you, write to{" "}
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

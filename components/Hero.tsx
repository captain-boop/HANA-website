import Image from "next/image";

export default function Hero() {
  return (
    <>
      <a id="top" />
      <section className="hero">
        <span className="eyebrow rise">42.60m · CRN · Ancona</span>
        <Image
          className="hero-wordmark rise"
          src="/hana-logo.png"
          alt="HANA"
          width={1016}
          height={604}
          priority
        />
        <div className="keel" aria-hidden="true" />
        <p className="subline rise">
          Italian craftsmanship, reimagined for the modern Mediterranean.
        </p>
        <div className="scroll-cue" aria-hidden="true">
          Scroll
        </div>
      </section>
    </>
  );
}

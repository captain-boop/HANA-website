export default function Hero() {
  return (
    <>
      <a id="top" />
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/photos/hana-hero-poster.jpg"
          >
            <source src="/hana-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-scrim" />
        </div>

        <div className="hero-inner">
          <span className="eyebrow rise">42.60m · CRN · Ancona</span>
          <div className="keel" aria-hidden="true" />
          <p className="subline rise">
            Italian craftsmanship, reimagined for the modern Mediterranean.
          </p>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          Scroll
        </div>
      </section>
    </>
  );
}

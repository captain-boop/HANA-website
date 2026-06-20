// Wire this to your real charter desk before launch.
const ENQUIRY_EMAIL = "charter@example.com";

export default function Enquire() {
  const href =
    `mailto:${ENQUIRY_EMAIL}` +
    "?subject=HANA%20Charter%20Enquiry" +
    "&body=I%20would%20like%20to%20enquire%20about%20chartering%20HANA.";

  return (
    <section className="enquire" id="enquire">
      <div className="wrap">
        <div className="glass reveal">
          <span className="eyebrow">Charter</span>
          <div className="price">
            From €150,000 <span>per week</span>
          </div>
          <p className="area">Mediterranean · Summer &amp; Winter seasons</p>
          <a className="btn" href={href}>
            Enquire about HANA
          </a>
        </div>
      </div>
    </section>
  );
}

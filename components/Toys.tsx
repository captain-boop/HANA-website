import Image from "next/image";

const TOYS: string[] = [
  "Custom limousine tender",
  "Two Seabobs",
  "Jet-skis (RYA training aboard)",
  "Inflatable foiling boards",
  "Paddleboards & kayaks",
  "Wakeboard & water-skis",
  "Towable toys & sea trampoline",
  "Full snorkelling kit",
];

export default function Toys() {
  return (
    <section className="toys" id="toys">
      <div className="wrap">
        <div className="toys-row reveal">
          <div className="toys-visual lift">
            <Image
              src="/photos/Hana-5693-152-platform-730769.webp"
              alt="HANA's bathing platform and beach club at sea level"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
          <div className="toys-panel">
            <span className="eyebrow">The Water</span>
            <h2>Bring on the sea</h2>
            <p>
              Her beach club opens straight onto the Mediterranean, with a full
              garage of toys for every mood of the day — from a quiet morning
              paddle to foiling off the platform.
            </p>
            <ul className="toys-list">
              {TOYS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

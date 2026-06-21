import Image from "next/image";

export default function Crew() {
  return (
    <section className="crew" id="crew">
      <div className="wrap">
        <div className="crew-row reveal reverse">
          <div className="crew-visual lift">
            <Image
              src="/photos/Hana-5693-178-food-730795.webp"
              alt="A plated course from HANA's galley"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
          <div className="crew-panel">
            <span className="eyebrow">The Crew</span>
            <h2>A crew of nine</h2>
            <p>
              A captain and crew of nine who have made HANA their own — an
              experienced galley, attentive interior, and deck team who know
              every cove worth dropping anchor in. Discreet when you want the day
              to yourselves, ready the moment you don't.
            </p>
            <p className="crew-line">
              Five cabins · eleven guests · every detail anticipated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

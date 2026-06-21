import Image from "next/image";

type Place = { name: string; note: string; src: string; alt: string };

const PLACES: Place[] = [
  {
    name: "French & Italian Riviera",
    note: "Monaco, Saint-Tropez, Portofino — the classic coast, harbour to harbour.",
    src: "/photos/Hana-5693-135-running-730742.webp",
    alt: "HANA under way along the Riviera coastline",
  },
  {
    name: "Amalfi & the Aeolians",
    note: "Capri, Positano and the volcanic islands, anchored off for long Italian lunches.",
    src: "/photos/Hana-5693-142-deck-730751.webp",
    alt: "HANA's shaded deck looking out over the sea",
  },
  {
    name: "Balearics",
    note: "Ibiza, Formentera and the quiet calas of Mallorca, on her own schedule.",
    src: "/photos/Hana-5693-152-platform-730769.webp",
    alt: "HANA's bathing platform at the water's edge",
  },
];

export default function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <div className="wrap">
        <span
          className="eyebrow reveal"
          style={{ textAlign: "center", display: "block" }}
        >
          Cruising Grounds
        </span>
        <h2 className="reveal" style={{ textAlign: "center" }}>
          Where she sails
        </h2>
        <p className="sub reveal">
          Summer across the Western Mediterranean, an itinerary shaped around you
          — anchorages, restaurants and timing all yours to set.
        </p>
        <div className="dest-grid reveal">
          {PLACES.map((p) => (
            <article className="dest-card lift" key={p.name}>
              <div className="dest-img">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </div>
              <div className="dest-body">
                <h3>{p.name}</h3>
                <p>{p.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

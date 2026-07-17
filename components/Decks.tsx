import Image from "next/image";

type Deck = {
  num: string;
  name: string;
  line: string;
  src: string;
  alt: string;
};

const DECKS: Deck[] = [
  {
    num: "01",
    name: "Sundeck",
    line: "Jacuzzi set into the teak, bar & BBQ, al-fresco dining and 360° of horizon.",
    src: "/photos/Hana-5693-104-deck-572269.webp",
    alt: "HANA's sundeck from above — jacuzzi, curved seating and teak dining tables",
  },
  {
    num: "02",
    name: "Bridge Deck",
    line: "Sky lounge inside, a shaded aft lounge outside — and the wheelhouse forward.",
    src: "/photos/Hana-5693-140-deck-730748.webp",
    alt: "HANA's shaded bridge-deck aft lounge with sofas and teak coffee table",
  },
  {
    num: "03",
    name: "Main Deck",
    line: "Saloon, bar and formal dining, with the full-beam master suite forward.",
    src: "/photos/Hana-5693-155-saloon-730772.webp",
    alt: "HANA's main saloon with sculpted armchairs and colourful cushions",
  },
  {
    num: "04",
    name: "Lower Deck",
    line: "Three double cabins and a twin with Pullman, all ensuite, in warm Italian wood.",
    src: "/photos/Hana-5693-168-double-730785.webp",
    alt: "A double guest cabin aboard HANA in warm Italian wood",
  },
  {
    num: "05",
    name: "Waterline",
    line: "Beach club, sea-view gym and a swim platform straight into the Mediterranean.",
    src: "/photos/Hana-5693-152-platform-730769.webp",
    alt: "HANA's open beach club and swim platform at sea level with an eFoil ready",
  },
];

export default function Decks() {
  return (
    <section className="decks" id="decks">
      <div className="wrap">
        <h2 className="reveal">Deck by deck</h2>
        <p className="sub reveal">
          Five levels, arranged so the day flows — from sunrise on the top deck
          to a swim off the stern.
        </p>
        <div className="deck-grid">
          {DECKS.map((d) => (
            <article className="deck-card lift reveal" key={d.num}>
              <div className="deck-img">
                <Image
                  src={d.src}
                  alt={d.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 45vw, 20vw"
                />
              </div>
              <div className="deck-body">
                <span className="deck-num">{d.num}</span>
                <h3>{d.name}</h3>
                <p>{d.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

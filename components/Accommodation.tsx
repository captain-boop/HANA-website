import Image from "next/image";

type Cabin = {
  type: string;
  name: string;
  note: string;
  src: string;
  alt: string;
};

const CABINS: Cabin[] = [
  {
    type: "Double",
    name: "Double Cabin",
    note: "Ensuite double in warm Italian wood, with sea light through every window.",
    src: "/photos/Hana-5693-166-double-730783.webp",
    alt: "A double guest cabin aboard HANA",
  },
  {
    type: "Double",
    name: "Double Cabin",
    note: "Ensuite double, finished to the same standard as the master.",
    src: "/photos/Hana-5693-167-double-730784.webp",
    alt: "A second double guest cabin aboard HANA",
  },
  {
    type: "Double",
    name: "Double Cabin",
    note: "Ensuite double, calm and private, dressed in oyster and oak.",
    src: "/photos/Hana-5693-168-double-730785.webp",
    alt: "A third double guest cabin aboard HANA",
  },
  {
    type: "Twin · Pullman",
    name: "Twin Cabin",
    note: "Two single berths plus a Pullman — sleeps three, ensuite. Ideal for children.",
    src: "/photos/Hana-5693-169-twin-730786.webp",
    alt: "A twin guest cabin with Pullman berth aboard HANA",
  },
];

export default function Accommodation() {
  return (
    <section className="accommodation" id="accommodation">
      <div className="wrap">
        <div className="acc-head reveal">
          <span className="eyebrow">Accommodation</span>
          <h2>Where you sleep aboard</h2>
          <p className="sub">
            HANA accommodates up to 11 guests across five ensuite cabins. The
            master is a full-beam private retreat, complemented by three double
            cabins and a twin cabin with an additional Pullman berth — ideal for
            families travelling with children or for guests who prefer separate
            beds. Every cabin is finished to the same standard, so there is no
            compromise wherever you sleep aboard.
          </p>
          <ul className="acc-summary">
            <li>
              <strong>11</strong>guests
            </li>
            <li>
              <strong>5</strong>ensuite cabins
            </li>
            <li>
              <strong>1</strong>full-beam master
            </li>
            <li>
              <strong>3</strong>doubles
            </li>
            <li>
              <strong>1</strong>twin + Pullman
            </li>
          </ul>
        </div>

        <article className="acc-master reveal lift">
          <div className="acc-master-img">
            <Image
              src="/photos/Hana-5693-162-master-730779.webp"
              alt="HANA's full-beam master cabin"
              fill
              sizes="(max-width: 860px) 100vw, 100vw"
            />
          </div>
          <div className="acc-master-body">
            <span className="acc-type">Master</span>
            <h3>The full-beam master</h3>
            <p>
              A private retreat spanning the full beam of the yacht, with
              his-and-hers ensuites connected by a rain shower and a private,
              enclosed balcony that opens onto the sea.
            </p>
          </div>
        </article>

        <div className="acc-grid">
          {CABINS.map((c, i) => (
            <article className="acc-card reveal lift" key={i}>
              <div className="acc-card-img">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
                />
              </div>
              <div className="acc-card-body">
                <span className="acc-type">{c.type}</span>
                <h4>{c.name}</h4>
                <p>{c.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

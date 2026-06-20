import Image from "next/image";

type Feature = {
  num: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
};

const FEATURES: Feature[] = [
  {
    num: "01",
    title: "The Sundeck",
    body: "It spans over half her length — bar, BBQ, a jacuzzi set into the teak, and 360° of horizon. The kind of space that makes the day's plan optional.",
    src: "/photos/Hana-5693-150-jacuzzi-730767.webp",
    alt: "HANA's sundeck — teak loungers, dining and jacuzzi with open sea views",
  },
  {
    num: "02",
    title: "Beach Club & Gym",
    body: "At sea level, a gym that looks straight out at the water, with direct access the moment you want it. Train, then step off the platform into the Mediterranean.",
    src: "/photos/Hana-5693-175-fitness-730792.webp",
    alt: "HANA's sea-level gym with a window opening onto the water",
    reverse: true,
  },
  {
    num: "03",
    title: "Toys & Water",
    body: "A wide-ranging collection for every mood of the sea — including RYA-certified jet-ski training for guests who would rather learn properly than simply ride.",
    src: "/photos/Hana-5693-138-profile-730745.webp",
    alt: "A guest foiling beside HANA at anchor",
  },
];

export default function OnBoard() {
  return (
    <section className="onboard" id="onboard">
      <div className="wrap">
        <span
          className="eyebrow reveal"
          style={{ textAlign: "center", display: "block", marginBottom: "2.6rem" }}
        >
          On Board
        </span>

        {FEATURES.map((f) => (
          <div className={`row reveal${f.reverse ? " reverse" : ""}`} key={f.num}>
            <div className="visual lift">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 760px) 100vw, 55vw"
              />
            </div>
            <div className="panel">
              <span className="num">{f.num}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

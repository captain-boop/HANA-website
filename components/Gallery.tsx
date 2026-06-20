import Image from "next/image";

type Shot = { src: string; alt: string; className?: string };

const SHOTS: Shot[] = [
  {
    src: "/photos/Hana-5693-181-profile-733177.webp",
    alt: "HANA under way off the coast, tenders and foilers in her wake",
    className: "wide tall",
  },
  {
    src: "/photos/Hana-5693-120-saloon-572285.webp",
    alt: "Main saloon with twin sofas and sea views",
  },
  {
    src: "/photos/Hana-5693-146-deck-730759.webp",
    alt: "Shaded sun loungers on deck",
  },
  {
    src: "/photos/Hana-5693-162-master-730779.webp",
    alt: "Master cabin with panoramic windows over the coast",
  },
  {
    src: "/photos/Hana-5693-160-dining-730777.webp",
    alt: "Formal dining set for guests beneath original artwork",
  },
  {
    src: "/photos/Hana-5693-168-double-730785.webp",
    alt: "Guest double cabin in warm wood and soft linens",
    className: "tall",
  },
  {
    src: "/photos/Hana-5693-158-upper_saloon-730775.webp",
    alt: "Upper saloon lounge",
  },
  {
    src: "/photos/Hana-5693-152-platform-730769.webp",
    alt: "Bathing platform at the water's edge",
  },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <span
          className="eyebrow reveal"
          style={{ textAlign: "center", display: "block" }}
        >
          Aboard
        </span>
        <h2 className="reveal">A week, in rooms</h2>
        <p className="sub reveal">
          Saloons that hold the light, a master that opens to the coastline,
          dining that feels like a long lunch ashore.
        </p>
        <div className="grid reveal">
          {SHOTS.map((s) => (
            <figure className={s.className} key={s.src}>
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 760px) 50vw, 25vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

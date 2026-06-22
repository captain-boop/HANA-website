import Image from "next/image";

type Shot = { src: string; alt: string; className?: string };

const SHOTS: Shot[] = [
  {
    src: "/photos/Hana-5693-155-saloon-730772.webp",
    alt: "Main saloon in warm wood, soft seating framed by panoramic windows",
    className: "wide tall",
  },
  {
    src: "/photos/Hana-5693-120-saloon-572285.webp",
    alt: "Main saloon with twin sofas and sea views",
  },
  {
    src: "/photos/Hana-5693-169-twin-730786.webp",
    alt: "Twin guest cabin in warm wood with portholes to the sea",
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
    src: "/photos/Hana-5693-164-master-730781.webp",
    alt: "Private study in the master suite, opening to the coastline",
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
        <h2 className="reveal">Inside, room by room</h2>
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

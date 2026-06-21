import Image from "next/image";

type Member = {
  name: string;
  role: string;
  nationality: string;
  src: string;
  languages: string;
  hobbies: string;
  bio: string;
};

const CREW: Member[] = [
  {
    name: "Lars Viljoen",
    role: "Captain",
    nationality: "British",
    src: "/photos/crew/lars-viljoen.jpg",
    languages: "English",
    hobbies: "Motorsports, racing, yoga",
    bio: "A yachtsman from Devon who took to the sea early under his father's influence — a captain by 23. Away from the helm he races GT cars on circuits including Daytona, with Le Mans in his sights. Calm and exacting, he makes every passage smooth.",
  },
  {
    name: "Ryan Sandwith",
    role: "Captain · Rotational",
    nationality: "South African",
    src: "/photos/crew/ryan-sandwith.jpg",
    languages: "English",
    hobbies: "Rock climbing, hiking, camping",
    bio: "Shaped by the coastline of Durban, Ryan joined yachting in 2015 after a B.Com at Pretoria. Eight years aboard HANA have made him part of her fabric; now in a rotational Captain role, he keeps every charter seamless.",
  },
  {
    name: "Marek Kotkowiak",
    role: "Chief Engineer · Rotational",
    nationality: "Polish",
    src: "/photos/crew/marek-kotkowiak.jpg",
    languages: "Polish, English",
    hobbies: "Horse riding, history, reading",
    bio: "A valued member of the crew since 2007, Marek completed his maritime studies in 1990 and spent nineteen years in the Merchant Navy. Off the water he's a true outdoorsman, horse-trekking across the Polish countryside.",
  },
  {
    name: "Adam Lang",
    role: "Chief Engineer · Rotational",
    nationality: "South African",
    src: "/photos/crew/adam-lang.jpg",
    languages: "English",
    hobbies: "Surfing, kitesurfing, diving",
    bio: "South African-born and two decades at sea, Adam found his calling in the engine rooms of the world's finest yachts. Now based in Palma, he keeps HANA running quietly and faultlessly behind the scenes.",
  },
  {
    name: "Ryan Carr",
    role: "Chef · Rotational",
    nationality: "British",
    src: "/photos/crew/ryan-carr.jpg",
    languages: "English",
    hobbies: "Gardening, foraging, food",
    bio: "From the northeast of England, Ryan trained in Michelin-starred kitchens and at New York's Eleven Madison Park before running his own restaurant, ELEVEN, built on natural produce and open-fire cooking. Now in his fourth year aboard, he cooks for flavour over fuss.",
  },
  {
    name: "Leo Maple",
    role: "Chef · Rotational",
    nationality: "British",
    src: "/photos/crew/leo-maple.jpg",
    languages: "English",
    hobbies: "Nature, foraging, his dogs",
    bio: "Surrey-raised, Leo learned early that food brings people together. Eighteen years and a string of Michelin kitchens later, he's stepping into his first yachting season with real creativity and discipline. Off duty, he's walking his dogs somewhere green.",
  },
  {
    name: "Amber Claxton",
    role: "Chief Stewardess · Rotational",
    nationality: "South African",
    src: "/photos/crew/amber-claxton.jpg",
    languages: "English",
    hobbies: "Yoga, photography, hiking",
    bio: "Cape Town-born, Amber came to yachting from fine dining for the love of people and the ocean. In her tenth season and fourth aboard HANA, she runs the interior alongside her partner, Captain Lars — expert care from start to finish.",
  },
  {
    name: "Noelia Cufre",
    role: "Chief Stewardess · Rotational",
    nationality: "Argentinian",
    src: "/photos/crew/noelia-cufre.jpg",
    languages: "Spanish, English",
    hobbies: "Swimming, pottery, nature",
    bio: "From Salta, Noelia holds a six-year honours degree in nutrition and competed as a national-level swimmer and professional lifeguard. After three years as Second Stew she steps into a rotational Chief Stew role, warmth and energy in equal measure.",
  },
  {
    name: "Kourtney McKay",
    role: "Second Stewardess",
    nationality: "British",
    src: "/photos/crew/kourtney-mckay.jpg",
    languages: "English",
    hobbies: "Pilates, gym, reading",
    bio: "Born on the Cornish coast, Kourtney pairs fine-dining hospitality and event styling with a degree in Psychology — anticipating needs before they're spoken. Two years into yachting, she delivers polished, intuitive service.",
  },
  {
    name: "Jonathan VDW",
    role: "First Mate",
    nationality: "South African",
    src: "/photos/crew/jonathan-vdw.jpg",
    languages: "English",
    hobbies: "Guitar, videography, surfing",
    bio: "Durban-born Jono has spent five years building his career at sea. Now in his second year aboard and stepping up to First Mate, he brings energy and precision to the deck — and captures the journey through his camera.",
  },
  {
    name: "Montana Smith",
    role: "Stewardess",
    nationality: "Australian",
    src: "/photos/crew/montana-smith.jpg",
    languages: "English",
    hobbies: "Pilates, cooking, reading",
    bio: "Australian and raised by the ocean, Monty came to yachting from teaching and hospitality. She brings warm, attentive service and a gift for the small moments — and you'll find her by the water whenever she's off.",
  },
  {
    name: "Baylee Longstaff",
    role: "Deck / Stewardess",
    nationality: "New Zealander",
    src: "/photos/crew/baylee-longstaff.jpg",
    languages: "English",
    hobbies: "Sewing, baking, running",
    bio: "From New Zealand's west coast, Baylee's background spans education, lifeguarding and water sports. Onboard she brings creativity and a naturally positive energy; off duty, she's outdoors or settled with a coffee and a book.",
  },
  {
    name: "Matias Rico",
    role: "Bosun",
    nationality: "Argentinian",
    src: "/photos/crew/matias-rico.jpg",
    languages: "Spanish, English",
    hobbies: "Training, football, F1",
    bio: "Buenos Aires-raised and football-mad since the age of three, Matias brings team spirit from the pitch to the deck. Hardworking and quick to smile, he's a devoted F1 fan who gives a consistent hundred percent.",
  },
  {
    name: "Devan Stroebel",
    role: "Deckhand",
    nationality: "South African",
    src: "/photos/crew/devan-stroebel.jpg",
    languages: "Afrikaans, English",
    hobbies: "Padel, hiking, training",
    bio: "From Blouberg, Devan grew up bodyboarding, sailing and fishing off his father's yacht. He joined HANA in October 2025, bringing a steady, hands-on approach and an easy readiness to help wherever needed.",
  },
  {
    name: "Kristofer Ennok",
    role: "Chase Boat Captain",
    nationality: "Estonian",
    src: "/photos/crew/kristofer-ennok.jpg",
    languages: "Estonian, English, Russian",
    hobbies: "Travel, gym, classic cars",
    bio: "Raised in Pärnu, Estonia, Kristofer was racing dinghies by seven and diving by ten. He's worked the world's largest sailing yachts — Obsidian, EOS — and served as a rescue swimmer with the Estonian Navy.",
  },
];

export default function Crew() {
  return (
    <section className="crew" id="crew">
      <div className="wrap">
        <div className="crew-head reveal">
          <span className="eyebrow">The Crew</span>
          <h2>A team that makes HANA her own</h2>
          <p className="sub">
            Fifteen across deck, galley and interior — discreet when you want the
            day to yourselves, ready the moment you don't.
          </p>
        </div>

        <div className="crew-grid">
          {CREW.map((m) => (
            <article className="crew-card reveal" key={m.name}>
              <div className="crew-photo">
                <Image
                  src={m.src}
                  alt={`${m.name} — ${m.role}`}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              <div className="crew-body">
                <span className="crew-role">{m.role}</span>
                <h3>{m.name}</h3>
                <span className="crew-nat">{m.nationality}</span>
                <p>{m.bio}</p>
                <dl className="crew-meta">
                  <div>
                    <dt>Languages</dt>
                    <dd>{m.languages}</dd>
                  </div>
                  <div>
                    <dt>Off duty</dt>
                    <dd>{m.hobbies}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

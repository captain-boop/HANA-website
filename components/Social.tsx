import Image from "next/image";
import InstagramIcon from "@/components/icons/Instagram";
import TikTokIcon from "@/components/icons/TikTok";
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  TIKTOK_URL,
  TIKTOK_HANDLE,
} from "@/lib/social";

const TILES: { src: string; alt: string }[] = [
  { src: "/photos/Hana-5693-140-deck-730748.webp", alt: "On deck aboard HANA" },
  { src: "/photos/Hana-5693-150-jacuzzi-730767.webp", alt: "The sundeck jacuzzi" },
  { src: "/photos/Hana-5693-145-deck-730755.webp", alt: "Sun loungers on deck" },
  { src: "/photos/Hana-5693-181-profile-733177.webp", alt: "HANA at sea" },
];

export default function Social() {
  return (
    <section className="social" id="social">
      <div className="wrap">
        <div className="social-head reveal">
          <h2>Life aboard, as it happens</h2>
          <p className="sub">
            Follow along on Instagram and TikTok — two windows onto the same
            yacht.
          </p>
        </div>

        <div className="social-handles reveal">
          <a
            className="social-handle"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-handle-icon" aria-hidden="true">
              <InstagramIcon />
            </span>
            <span className="social-handle-text">
              <strong>{INSTAGRAM_HANDLE}</strong>
              <span>The yacht, her charters and the Mediterranean.</span>
            </span>
          </a>
          <a
            className="social-handle"
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-handle-icon" aria-hidden="true">
              <TikTokIcon />
            </span>
            <span className="social-handle-text">
              <strong>{TIKTOK_HANDLE}</strong>
              <span>
                The crew, unscripted — more crew-focused videos and the lighter
                side of life aboard.
              </span>
            </span>
          </a>
        </div>

        <div className="social-grid reveal">
          {TILES.map((t) => (
            <a
              className="social-tile lift"
              key={t.src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.alt} — view on Instagram`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(max-width: 760px) 50vw, 25vw"
              />
              <span className="social-ig-badge" aria-hidden="true">
                <InstagramIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

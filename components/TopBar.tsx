import Image from "next/image";
import InstagramIcon from "@/components/icons/Instagram";
import TikTokIcon from "@/components/icons/TikTok";
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/social";

export default function TopBar() {
  return (
    <header className="topbar" id="topbar">
      <a className="brand" href="#top" aria-label="HANA — home">
        <Image
          src="/hana-logo.png"
          alt="HANA"
          width={1016}
          height={604}
          priority
          style={{ height: 30, width: "auto" }}
        />
      </a>
      <nav>
        <a className="nav-hide" href="#onboard">
          On Board
        </a>
        <a className="nav-hide" href="#accommodation">
          Cabins
        </a>
        <a className="nav-hide" href="#destinations">
          Destinations
        </a>
        <a className="nav-hide" href="#gallery">
          Gallery
        </a>
        <a className="nav-hide" href="#crew">
          Crew
        </a>
        <a className="nav-hide" href="#galley">
          Chef
        </a>
        <a className="nav-hide" href="/hana-brochure.pdf" download>
          Brochure
        </a>
        <a
          className="nav-ig"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="HANA on Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          className="nav-ig"
          href={TIKTOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="HANA on TikTok"
        >
          <TikTokIcon />
        </a>
        <a className="nav-cta" href="#enquire">
          Enquire
        </a>
      </nav>
    </header>
  );
}

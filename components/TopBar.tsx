"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import InstagramIcon from "@/components/icons/Instagram";
import TikTokIcon from "@/components/icons/TikTok";
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/social";

const LINKS: [string, string][] = [
  ["#onboard", "On Board"],
  ["#accommodation", "Cabins"],
  ["#destinations", "Destinations"],
  ["#gallery", "Gallery"],
  ["#crew", "Crew"],
  ["#galley", "Chef"],
];

export default function TopBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="topbar" id="topbar">
      <a className="brand" href="#top" aria-label="HANA — home" onClick={close}>
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
        {LINKS.map(([href, label]) => (
          <a className="nav-hide" href={href} key={href}>
            {label}
          </a>
        ))}
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

        <button
          type="button"
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " open" : ""}`}
        hidden={!open}
      >
        <nav className="mobile-nav">
          {LINKS.map(([href, label]) => (
            <a href={href} key={href} onClick={close}>
              {label}
            </a>
          ))}
          <a href="/hana-brochure.pdf" download onClick={close}>
            Brochure
          </a>
          <a className="mobile-cta" href="#enquire" onClick={close}>
            Enquire
          </a>
          <div className="mobile-social">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HANA on Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HANA on TikTok"
            >
              <TikTokIcon />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

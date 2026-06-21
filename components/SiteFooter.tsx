import Image from "next/image";
import InstagramIcon from "@/components/icons/Instagram";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/social";

export default function SiteFooter() {
  return (
    <footer>
      <span className="brand-mark">
        <Image
          src="/hana-logo.png"
          alt="HANA"
          width={1016}
          height={604}
          style={{ height: 34, width: "auto" }}
        />
      </span>
      <div className="line">
        Italian craftsmanship, reimagined for the modern Mediterranean.
      </div>
      <a
        className="footer-ig"
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className="footer-ig-icon" />
        <span>{INSTAGRAM_HANDLE}</span>
      </a>
      <div className="meta">42.60m CRN · Mediterranean Charter</div>
    </footer>
  );
}

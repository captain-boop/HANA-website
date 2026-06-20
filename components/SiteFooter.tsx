import Image from "next/image";

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
      <div className="meta">42.60m CRN · Mediterranean Charter</div>
    </footer>
  );
}

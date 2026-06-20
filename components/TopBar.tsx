import Image from "next/image";

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
        <a className="nav-hide" href="#vessel">
          The Vessel
        </a>
        <a className="nav-hide" href="#onboard">
          On Board
        </a>
        <a className="nav-hide" href="#gallery">
          Gallery
        </a>
        <a className="nav-cta" href="#enquire">
          Enquire
        </a>
      </nav>
    </header>
  );
}

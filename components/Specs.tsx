const PARTICULARS = [
  { l: "Builder", v: "CRN, Ancona" },
  { l: "Year", v: "2008" },
  { l: "Refit", v: "2024" },
  { l: "Length overall", v: "42.60 m" },
  { l: "Beam", v: "8.70 m" },
  { l: "Draft", v: "2.40 m" },
  { l: "Guests", v: "11 in 5 cabins" },
  { l: "Interior", v: "Laura Pomponi" },
  { l: "Crew", v: "International" },
];

export default function Specs() {
  return (
    <section className="specs" id="specs">
      <div className="wrap">
        <h2 className="reveal">Details &amp; downloads</h2>
        <p className="sub reveal">
          The full particulars, and a brochure to take away.
        </p>
        <div className="dgrid reveal">
          {PARTICULARS.map((p) => (
            <div className="dcell" key={p.l}>
              <div className="l">{p.l}</div>
              <div className="v">{p.v}</div>
            </div>
          ))}
        </div>
        <div className="specs-download reveal">
          <a className="btn btn-ghost" href="/hana-brochure.pdf" download>
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}

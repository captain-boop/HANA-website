const STATS = [
  { v: "42.6m", l: "Length overall" },
  { v: "11", l: "Guests" },
  { v: "5", l: "Cabins" },
  { v: "2024", l: "Refit" },
];

export default function SpecsStrip() {
  return (
    <div className="specs-strip wrap">
      <div className="glass">
        {STATS.map((s) => (
          <div className="spec" key={s.l}>
            <div className="v">{s.v}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

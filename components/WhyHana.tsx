const REASONS = [
  {
    t: "A genuine full-beam master",
    b: "Most yachts her size compromise here. HANA's master spans her full beam, with his-and-hers ensuites and a private balcony onto the sea.",
  },
  {
    t: "A sea-level beach club & gym",
    b: "Train looking straight at the water, then step off the platform into the Mediterranean. The waterline is part of the living space, not an afterthought.",
  },
  {
    t: "A sundeck over half her length",
    b: "Bar, BBQ, dining and a jacuzzi set into the teak, with 360° of horizon. Room enough that the day's plan stays optional.",
  },
  {
    t: "A 2024 refit, inside and out",
    b: "Reimagined by Laura Pomponi and freshly refitted in 2024 — the warmth of a private home with the discipline of a professional yacht.",
  },
  {
    t: "A crew who know her",
    b: "Fifteen across deck, galley and interior, led by rotational captains who know every metre of her. Service that anticipates rather than reacts.",
  },
  {
    t: "Built for families",
    b: "Five ensuite cabins including a twin with a Pullman berth — space for children and grandparents without anyone giving up comfort.",
  },
];

export default function WhyHana() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <h2 className="reveal">Why HANA</h2>
        <p className="sub reveal">
          A few of the things that set her apart from others of her size.
        </p>
        <div className="why-grid">
          {REASONS.map((r) => (
            <div className="why-cell reveal lift" key={r.t}>
              <h3>{r.t}</h3>
              <p>{r.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

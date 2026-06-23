const DAYS = [
  {
    d: "Day 1",
    place: "Naples → Capri",
    body: "Board in the afternoon, settle in over a first dinner at anchor as the island lights come up.",
  },
  {
    d: "Day 2",
    place: "Capri",
    body: "Tender into the Marina Piccola, the Blue Grotto early before the crowds, the afternoon on the toys off the back.",
  },
  {
    d: "Day 3",
    place: "Positano",
    body: "A slow cruise down the Amalfi coast. Lunch ashore, the jacuzzi and sundeck for the long golden afternoon.",
  },
  {
    d: "Day 4",
    place: "Amalfi & Ravello",
    body: "Morning ashore among the lemon groves and cathedrals, back aboard for a swim and a sea-level workout.",
  },
  {
    d: "Day 5",
    place: "Li Galli & Nerano",
    body: "Anchor off the islets, paddleboards and the seabob, then the famous spaghetti alle zucchine in Nerano.",
  },
  {
    d: "Day 6",
    place: "Ischia",
    body: "Cross to Ischia for thermal coves and quiet anchorages. A final long lunch under way.",
  },
  {
    d: "Day 7",
    place: "Ischia → Naples",
    body: "A last swim before breakfast, then an easy morning passage back to disembark.",
  },
];

export default function Itinerary() {
  return (
    <section className="itinerary" id="itinerary">
      <div className="wrap">
        <h2 className="reveal">A week in the Bay of Naples</h2>
        <p className="sub reveal">
          One example of how seven days aboard might unfold. Every charter is
          planned around you — this is a sketch, not a fixed route.
        </p>
        <ol className="itin-list">
          {DAYS.map((d) => (
            <li className="itin-step reveal" key={d.d}>
              <div className="itin-day">{d.d}</div>
              <div className="itin-body">
                <h3>{d.place}</h3>
                <p>{d.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

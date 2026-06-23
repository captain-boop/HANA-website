const DAYS = [
  {
    d: "Day 1",
    place: "Corfu",
    body: "Board in Corfu and settle in over a first dinner at anchor, the Venetian old town glowing across the water as the light fades.",
  },
  {
    d: "Day 2",
    place: "Paxos",
    body: "A short hop south to Paxos. Lunch in the natural harbour of Gaios, the afternoon drifting between sea caves and quiet olive-fringed coves.",
  },
  {
    d: "Day 3",
    place: "Antipaxos",
    body: "Anchor over the impossibly clear water off Voutoumi and Vrika. A day for the toys — paddleboards, the seabob, and long swims off the platform.",
  },
  {
    d: "Day 4",
    place: "Lefkada & Meganisi",
    body: "Cruise down to the green channels of Meganisi, tucking into Spartochori for a taverna lunch ashore and a swim in a private bay.",
  },
  {
    d: "Day 5",
    place: "Ithaca",
    body: "Homer's island. Morning ashore in Vathy, the afternoon at anchor in a sheltered cove with the jacuzzi and sundeck running late into the evening.",
  },
  {
    d: "Day 6",
    place: "Kefalonia",
    body: "Across to Kefalonia for the turquoise sweep of Myrtos and the harbour at Fiskardo — a last long lunch under way between anchorages.",
  },
  {
    d: "Day 7",
    place: "Kefalonia → Corfu",
    body: "A final swim before breakfast, then an easy passage back north to disembark.",
  },
];

export default function Itinerary() {
  return (
    <section className="itinerary" id="itinerary">
      <div className="wrap">
        <h2 className="reveal">A week in the Ionian</h2>
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

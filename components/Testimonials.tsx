const QUOTES = [
  {
    q: "The most relaxed week we've had as a family in years — the crew thought of everything before we did.",
    by: "Charter guest, Amalfi Coast",
  },
  {
    q: "She feels like a private home that happens to move. The beach club alone made the trip.",
    by: "Charter guest, French Riviera",
  },
  {
    q: "Faultless from the first tender to the last dinner. We've already asked about next summer.",
    by: "Charter guest, Aeolian Islands",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="wrap">
        <h2 className="reveal">In their words</h2>
        <p className="sub reveal">
          A few words from guests who have spent a week aboard.
        </p>
        <div className="quote-grid">
          {QUOTES.map((item) => (
            <figure className="quote reveal lift" key={item.by}>
              <blockquote>{item.q}</blockquote>
              <figcaption>{item.by}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

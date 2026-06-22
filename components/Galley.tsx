import Image from "next/image";

type Menu = {
  meal: string;
  courses: { course: string; dish: string }[];
};

// PLACEHOLDER MENUS — sample only, to be swapped for the chef's real menus.
const MENUS: Menu[] = [
  {
    meal: "Breakfast",
    courses: [
      { course: "To begin", dish: "Seasonal fruit, market yoghurt and honeycomb" },
      { course: "From the galley", dish: "Soft eggs, smoked salmon and chives" },
      { course: "Baked", dish: "Warm pastries and sourdough, churned butter" },
    ],
  },
  {
    meal: "Lunch",
    courses: [
      { course: "Starter", dish: "Burrata with heirloom tomato and basil" },
      { course: "Main", dish: "Line-caught sea bass, fennel and citrus" },
      { course: "Dessert", dish: "Lemon tart, crème fraîche" },
    ],
  },
  {
    meal: "Dinner",
    courses: [
      { course: "Starter", dish: "Hand-dived scallops, brown butter and capers" },
      { course: "Main", dish: "Aged fillet, charred leeks and bordelaise" },
      { course: "Dessert", dish: "Dark chocolate, olive oil and sea salt" },
    ],
  },
];

export default function Galley() {
  return (
    <section className="galley" id="galley">
      <div className="wrap">
        <div className="galley-head reveal">
          <h2>A kitchen at the heart of the charter</h2>
        </div>

        <div className="chef-row reveal">
          <div className="chef-visual lift">
            <Image
              src="/photos/Hana-5693-178-food-730795.webp"
              alt="A plated dish aboard HANA"
              fill
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </div>
          <div className="chef-panel">
            <span className="chef-eyebrow">Your Chefs</span>
            <h3>Food is never off the clock</h3>
            <p className="chef-bg">
              Food aboard HANA is a genuine passion, not just a service. Our two
              chefs are happiest sourcing the best of what&rsquo;s around &mdash;
              foraging, seeking out natural produce, and building each day&rsquo;s
              menus around what&rsquo;s freshest and most local. It&rsquo;s the
              kind of care that comes from people who think about food even on
              their days off, and it shows in every plate that leaves the galley.
            </p>
            <p className="chef-diet">
              Every menu is tailored to guests. Dietary requirements, allergies
              and preferences are discussed before your charter and accommodated
              throughout &mdash; from young children to specific lifestyle or
              health needs.
            </p>
          </div>
        </div>

        <div className="menus">
          {MENUS.map((m) => (
            <article className="menu-card reveal" key={m.meal}>
              <h4>{m.meal}</h4>
              <dl>
                {m.courses.map((c) => (
                  <div className="menu-line" key={c.course}>
                    <dt>{c.course}</dt>
                    <dd>{c.dish}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="menus-note reveal">
          All menus are tailored to guests. These are examples only.
        </p>
      </div>
    </section>
  );
}

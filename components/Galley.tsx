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
          <span className="eyebrow">The Galley</span>
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
            {/* PLACEHOLDER — replace with the featured chef's real name and
                background (training, previous vessels or restaurants). */}
            <span className="chef-eyebrow">Your Chef</span>
            <h3>Chef name</h3>
            <p className="chef-bg">
              Culinary background — training, Michelin kitchens, previous yachts
              or restaurants. Two to three sentences on where they cooked before
              HANA and what shaped their food.
            </p>
            <p className="chef-philosophy">
              Sourced from local markets each morning, always seasonal and
              Mediterranean at heart — cooking that lets the produce speak.
            </p>
            <p className="chef-diet">
              Vegetarian, vegan, pescatarian and allergen-aware menus are
              prepared with the same care — simply let us know in advance.
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

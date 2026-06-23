import Image from "next/image";

export default function CrewTease() {
  return (
    <section className="crew-tease" id="crew">
      <div className="wrap">
        <div className="crew-tease-inner reveal lift">
          <div className="crew-tease-img">
            <Image
              src="/photos/crew/lars-viljoen.jpg"
              alt="HANA's captains and crew"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </div>
          <div className="crew-tease-body">
            <h2>The crew</h2>
            <p>
              Fifteen across deck, galley and interior, led by rotational
              captains who know her intimately — discreet when you want the day
              to yourselves, ready the moment you don&apos;t.
            </p>
            <a className="btn btn-ghost" href="/crew">
              Meet the crew
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

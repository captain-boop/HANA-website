"use client";

import { useEffect } from "react";

/**
 * Mirrors the vanilla behaviour of the prototype:
 *  - condenses the top bar after 60px of scroll
 *  - reveals `.reveal` elements via IntersectionObserver (threshold 0.18)
 *  - respects prefers-reduced-motion
 * Mounted once; queries the DOM after hydration.
 */
export default function ScrollEffects() {
  useEffect(() => {
    document.documentElement.classList.remove("no-js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bar = document.getElementById("topbar");

    const onScroll = () => {
      if (!bar) return;
      bar.classList.toggle("condensed", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let io: IntersectionObserver | undefined;

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
      );
      items.forEach((el) => io!.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return null;
}

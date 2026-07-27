"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const TOUR_URL = "https://tour.theatro360.com/t/hana/FL-KN31";

export default function StepAboard() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("tour-open");
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove("tour-open");
      triggerRef.current?.focus();
    };
  }, [open, close]);

  return (
    <section className="tour" id="tour">
      <div className="wrap">
        <h2 className="reveal">Step aboard</h2>
        <p className="sub reveal">
          Walk her decks in 360° — saloon to sundeck, cabin to beach club — and
          find your favourite corner before you ever step off the dock.
        </p>

        <button
          type="button"
          className="tour-facade lift reveal"
          ref={triggerRef}
          onClick={() => setOpen(true)}
          aria-label="Open HANA's 360° virtual tour"
        >
          <Image
            src="/photos/Hana-5693-120-saloon-572285.webp"
            alt="HANA's main saloon, the starting point of the virtual tour"
            fill
            sizes="(max-width: 1180px) 100vw, 1180px"
          />
          <span className="tour-scrim" aria-hidden="true" />
          <span className="tour-cue" aria-hidden="true">
            <span className="tour-ring">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path
                  d="M24 14c8 0 15 3.6 15 8 0 3.2-3.7 6-9.3 7.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M24 34c-8 0-15-3.6-15-8 0-3.2 3.7-6 9.3-7.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M27 11l-3.4 3 3.6 2.8M21 37l3.4-3-3.6-2.8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="tour-label">360° Virtual Tour</span>
          </span>
        </button>
      </div>

      {open &&
        mounted &&
        createPortal(
          <div
            className="tour-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="HANA 360° virtual tour"
          >
          <div
            className="tour-lightbox-scrim"
            onClick={close}
            aria-hidden="true"
          />
          <div className="tour-frame">
            <div className="tour-frame-bar">
              <span className="tour-frame-title">HANA · 360° Virtual Tour</span>
              <a
                className="tour-newtab"
                href={TOUR_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in new tab ↗
              </a>
              <button
                type="button"
                className="tour-close"
                ref={closeRef}
                onClick={close}
                aria-label="Close tour"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <iframe
              className="tour-iframe"
              src={TOUR_URL}
              title="HANA 360° virtual tour"
              allow="accelerometer; gyroscope; magnetometer; xr-spatial-tracking; fullscreen"
              allowFullScreen
            />
          </div>
          </div>,
          document.body
        )}
    </section>
  );
}

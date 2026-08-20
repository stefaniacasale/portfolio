"use client";

import { useState } from "react";
import { organizations } from "@/data/content";
import { PauseIcon, PlayIcon } from "./icons";
import LogoImage from "./LogoImage";
import { container, kicker } from "./ui";

/**
 * Seamless marquee: the track holds two identical copies of the logo row and
 * slides exactly one copy width (translateX(-50%)) before looping, so the seam
 * never lands mid animation. The marquee itself is aria-hidden and the four
 * names are exposed once, in reading order, through a visually hidden list.
 *
 * Under prefers-reduced-motion the track does not animate at all and the
 * pause control is removed from the layout and the accessibility tree.
 */
export default function LogoCarousel() {
  const [paused, setPaused] = useState(false);

  // Spacing lives in each item's trailing padding rather than a flex gap, so
  // the two copies are exactly the same width and translateX(-50%) lands on a
  // perfect seam. The gaps are wide enough that one full row outruns the strip
  // at desktop widths, so a logo is never on screen twice at once.
  const row = (
    <ul className="flex shrink-0 items-center">
      {organizations.map((org) => (
        <li
          key={org.name}
          className="flex shrink-0 items-center justify-center pr-24 sm:pr-32 lg:pr-36"
        >
          <LogoImage
            src={org.logo}
            slot={42}
            maxWidth={190}
            className="marquee-logo"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="border-y border-line bg-ivory-warm/60">
      <div
        className={`${container} flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:gap-10`}
      >
        <h2 className={`${kicker} shrink-0`}>Experience across</h2>

        <ul className="sr-only">
          {organizations.map((org) => (
            <li key={org.name}>{org.name}</li>
          ))}
        </ul>

        <div className="flex min-w-0 flex-1 items-center gap-4">
          <div
            aria-hidden="true"
            className="marquee-viewport min-w-0 flex-1 overflow-hidden py-1"
          >
            <div className="marquee-track flex w-max" data-paused={paused}>
              {row}
              {row}
            </div>
          </div>

          <button
            type="button"
            aria-pressed={paused}
            aria-label={paused ? "Resume logo carousel" : "Pause logo carousel"}
            onClick={() => setPaused((value) => !value)}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-ivory-warm text-ink transition-colors duration-200 hover:border-ink hover:bg-sand-soft motion-reduce:hidden"
          >
            {paused ? <PlayIcon /> : <PauseIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}

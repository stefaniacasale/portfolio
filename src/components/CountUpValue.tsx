"use client";

import { useEffect, useRef } from "react";

/**
 * Counts a metric up from zero once, on mount.
 *
 * The value strings in content.ts carry their own formatting ("$100K+", "12+",
 * "3.82"), so the string is split into prefix, number, and suffix and only the
 * number is animated. Decimal places are held constant for the whole run, so
 * "3.82" never flickers through "3" or "3.8".
 *
 * Notes on the markup:
 * - The animated node is written through a ref rather than state. A count up
 *   is roughly seventy frames, and none of them need a React render.
 * - The final string is also rendered, invisibly, to reserve the exact width so
 *   the card never reflows as digits are added.
 * - The server renders the zero state, so the number does not appear at full
 *   value and then snap back when hydration lands. Reduced motion and no
 *   JavaScript both swap to the final string in CSS, before any script runs.
 */

const VALUE_PATTERN = /^(\D*)(\d+(?:\.\d+)?)(.*)$/;

const DURATION_MS = 1200;

/** Cubic ease out: quick off the mark, settles gently on the target. */
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

type CountUpValueProps = {
  value: string;
};

export default function CountUpValue({ value }: CountUpValueProps) {
  const match = VALUE_PATTERN.exec(value);
  const nodeRef = useRef<HTMLSpanElement>(null);

  const prefix = match?.[1] ?? "";
  const digits = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = Number(digits);
  const decimals = digits.split(".")[1]?.length ?? 0;
  const animatable = digits.length > 0 && Number.isFinite(target);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !animatable) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const format = (amount: number) =>
      `${prefix}${amount.toFixed(decimals)}${suffix}`;

    let frame = 0;
    let start: number | null = null;

    const step = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / DURATION_MS, 1);
      node.textContent = format(target * easeOut(progress));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
    // Runs once: a card's target never changes.
  }, [animatable, decimals, prefix, suffix, target]);

  if (!animatable) return <>{value}</>;

  return (
    <span className="relative inline-block">
      <span className="sr-only">{value}</span>
      <span
        aria-hidden="true"
        className="count-up-final invisible motion-reduce:visible"
      >
        {value}
      </span>
      <span
        ref={nodeRef}
        aria-hidden="true"
        className="count-up-live absolute top-0 left-0 tabular-nums whitespace-nowrap motion-reduce:hidden"
      >
        {`${prefix}${(0).toFixed(decimals)}${suffix}`}
      </span>
    </span>
  );
}

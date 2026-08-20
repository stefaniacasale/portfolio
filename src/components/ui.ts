/**
 * Shared class strings so spacing, pills, and labels stay consistent
 * across sections. Kept as plain strings for Tailwind's source scanner.
 */

export const container = "mx-auto w-full max-w-6xl px-6 sm:px-8";

export const section = "py-16 lg:py-24";

export const kicker =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/65";

export const kickerDark =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-sand";

const pillBase =
  "inline-flex max-w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200";

export const pillPrimary = `${pillBase} bg-ink text-ivory hover:bg-ink/85`;

export const pillSecondary = `${pillBase} border border-line bg-ivory-warm text-ink hover:border-ink hover:bg-sand-soft`;

export const pillSand = `${pillBase} focus-light bg-sand text-ink hover:bg-sand-soft`;

export const pillOutlineLight = `${pillBase} focus-light border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10`;

export const tagPill =
  "rounded-full border border-line bg-ivory px-3 py-1 text-xs font-medium text-ink/70";

export const tagPillDark =
  "rounded-full border border-ivory/30 px-3 py-1 text-xs font-medium text-ivory/80";

/** Attributes every link that leaves the site should carry. */
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

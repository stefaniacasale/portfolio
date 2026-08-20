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

/**
 * Skill and project tags. Practices ("Newsletter planning") are plain; named
 * tools and platforms lead with a 20px mark, which needs the left padding
 * tightened to seat it. Both keep the same height and text treatment.
 */
const tagPillBase =
  "inline-flex min-h-[1.875rem] items-center rounded-full border border-line bg-ivory py-1 text-xs font-medium text-ink/70";

export const tagPill = `${tagPillBase} px-3`;

export const tagPillWithIcon = `${tagPillBase} gap-2 pr-3 pl-1.5`;

/** Attributes every link that leaves the site should carry. */
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

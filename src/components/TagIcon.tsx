import type { ReactNode } from "react";
import { HeartIcon, ShareIcon } from "./icons";
import LogoImage, { isLogoAsset } from "./LogoImage";

/**
 * Resolves a tag's `icon` value: a file under /public/logos, a hand authored
 * inline glyph, or "letter" for a named tool that has no mark of its own.
 *
 * Tags with no icon render nothing here and sit in a plain pill. That split is
 * deliberate: a mark says "this is a product you could go and look up", so
 * practices like "Newsletter planning" are better with no mark than with a
 * placeholder standing in for one.
 */

const glyphs: Record<string, ReactNode> = {
  share: <ShareIcon className="size-4 text-ink/75" />,
  heart: <HeartIcon className="size-4 text-ink/75" />,
};

type TagIconProps = {
  icon?: string;
  label: string;
};

export default function TagIcon({ icon, label }: TagIconProps) {
  if (isLogoAsset(icon)) {
    return (
      <span className="flex h-5 min-w-5 shrink-0 items-center justify-center">
        <LogoImage src={icon} slot={20} maxWidth={48} />
      </span>
    );
  }

  if (icon && glyphs[icon]) {
    return (
      <span className="flex size-5 shrink-0 items-center justify-center">
        {glyphs[icon]}
      </span>
    );
  }

  if (icon === "letter") {
    return (
      <span
        aria-hidden="true"
        className="flex size-5 shrink-0 items-center justify-center rounded-md bg-sand-soft text-[10px] leading-none font-bold text-ink"
      >
        {label.charAt(0).toUpperCase()}
      </span>
    );
  }

  return null;
}

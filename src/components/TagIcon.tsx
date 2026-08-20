import type { ReactNode } from "react";
import { HeartIcon, ShareIcon } from "./icons";
import LogoImage, { isLogoAsset } from "./LogoImage";

/**
 * Resolves a tag's `icon` value: a file under /public/logos, or a hand authored
 * inline glyph. Tags with no icon render nothing here and sit in a plain pill.
 *
 * That split is deliberate: a mark says "this is a product you could go and
 * look up", so practices like "Newsletter planning" are better with no mark
 * than with a placeholder standing in for one.
 *
 * The slot is a 20px tall band of flexible width rather than a square. Several
 * of these platforms only publish a wordmark, and squeezing a 4:1 wordmark into
 * a square box would shrink it past reading size.
 */

const glyphs: Record<string, ReactNode> = {
  share: <ShareIcon className="size-4 text-ink/75" />,
  heart: <HeartIcon className="size-4 text-ink/75" />,
};

type TagIconProps = {
  icon?: string;
};

export default function TagIcon({ icon }: TagIconProps) {
  if (isLogoAsset(icon)) {
    return (
      <span className="flex h-5 min-w-5 shrink-0 items-center justify-center">
        <LogoImage src={icon} slot={20} maxWidth={80} />
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

  return null;
}

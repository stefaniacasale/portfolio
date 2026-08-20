import Image from "next/image";

/**
 * Brand logos live in /public/logos and arrive at wildly different aspect
 * ratios, from square app tiles to 7:1 wordmarks. Rendering them all at one
 * literal pixel height would make the wordmarks tower over the tiles, so every
 * call site asks for a `slot` (the height a square tile would occupy) and each
 * logo is scaled inside that slot by an optical factor.
 *
 * Sizes below are the source viewBox or bitmap dimensions, and the rendered box
 * is computed from them rather than left to the browser. Some of these files
 * (wealthsimple.svg) carry a viewBox and no width or height, so an `auto` box
 * collapses to nothing; computing both axes from the known ratio also keeps the
 * aspect ratio exact and reserves the space before the file loads.
 */

type LogoAsset = {
  width: number;
  height: number;
  /** Rendered height as a fraction of the slot. Wordmarks sit smaller. */
  optical?: number;
};

export const logoAssets: Record<string, LogoAsset> = {
  "/logos/adobe-cc.svg": { width: 240, height: 234 },
  "/logos/androidstudio.svg": { width: 24, height: 24 },
  "/logos/booker.svg": { width: 147, height: 35, optical: 0.9 },
  "/logos/canva.svg": { width: 128, height: 128 },
  "/logos/dem.png": { width: 200, height: 200 },
  "/logos/eden.png": { width: 815, height: 434, optical: 0.95 },
  "/logos/emplifi.svg": { width: 238, height: 52, optical: 0.62 },
  "/logos/excel.svg": { width: 2290, height: 2130 },
  "/logos/iba.png": { width: 512, height: 512 },
  "/logos/java.svg": { width: 128, height: 128 },
  "/logos/jira.svg": { width: 24, height: 24 },
  "/logos/massageaddict.png": { width: 250, height: 89, optical: 0.72 },
  "/logos/mississauga.svg": { width: 140, height: 68 },
  "/logos/outlook.svg": { width: 1831, height: 1703 },
  "/logos/providerconnect.png": { width: 350, height: 100, optical: 0.9 },
  "/logos/redcross.svg": { width: 100, height: 100 },
  "/logos/sunlife.png": { width: 500, height: 123, optical: 0.9 },
  "/logos/telus-health.svg": { width: 213, height: 28, optical: 0.9 },
  "/logos/uoft.svg": { width: 429, height: 159, optical: 0.8 },
  "/logos/wealthsimple-w.png": { width: 120, height: 120 },
  "/logos/wealthsimple.svg": { width: 1798, height: 296, optical: 0.45 },
  "/logos/word.svg": { width: 1881, height: 1750 },
};

export const isLogoAsset = (value: string | undefined): value is string =>
  Boolean(value && value in logoAssets);

type LogoImageProps = {
  src: string;
  /** Height a square logo would render at, in pixels. */
  slot: number;
  /** Upper bound on rendered width. Defaults to four slots. */
  maxWidth?: number;
  /**
   * Set only when the logo stands alone with no text beside it. It then carries
   * the accessible name, and doubles as the fallback if the file fails to load.
   * Left unset the logo is decorative, because adjacent text already names it.
   */
  alt?: string;
  className?: string;
};

export default function LogoImage({
  src,
  slot,
  maxWidth,
  alt,
  className = "",
}: LogoImageProps) {
  const asset = logoAssets[src];
  if (!asset) return null;

  const ratio = asset.width / asset.height;
  const limit = maxWidth ?? slot * 4;

  let height = slot * (asset.optical ?? 1);
  let width = height * ratio;

  // Very wide wordmarks are capped on width and give back height to match.
  if (width > limit) {
    width = limit;
    height = limit / ratio;
  }

  return (
    <Image
      src={src}
      alt={alt ?? ""}
      aria-hidden={alt ? undefined : "true"}
      width={asset.width}
      height={asset.height}
      // The optimizer refuses SVG unless dangerouslyAllowSVG is on, and these
      // files are already tiny, so they are served as authored.
      unoptimized={src.endsWith(".svg")}
      style={{ width: Math.round(width), height: Math.round(height) }}
      className={`object-contain ${className}`}
    />
  );
}

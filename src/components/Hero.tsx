import Image from "next/image";
import { hero, site } from "@/data/content";
import AccentText from "./AccentText";
import { ArrowUpRightIcon, LinkedInIcon } from "./icons";
import {
  container,
  externalLinkProps,
  pillPrimary,
  pillSecondary,
} from "./ui";

/** The name carries the italic serif accent in the headline. */
const headlineAccents = [site.name];

export default function Hero() {
  return (
    <section id="top" className={`${container} pt-12 pb-14 lg:pt-20 lg:pb-16`}>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <div className="rise-in">
          <h1 className="hero-display font-extrabold tracking-tight break-words text-balance">
            <AccentText text={hero.headline} accents={headlineAccents} />
          </h1>

          <p className="mt-7 max-w-prose text-lg leading-relaxed text-ink/80">
            {hero.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.name}`}
              className={pillPrimary}
            >
              Email me
            </a>
            <a
              href={site.linkedin}
              {...externalLinkProps}
              aria-label="LinkedIn profile, opens in new tab"
              className={pillSecondary}
            >
              <LinkedInIcon />
              LinkedIn
              <ArrowUpRightIcon className="size-3.5 text-ink/60" />
            </a>
          </div>

          <ul className="mt-10 space-y-3 border-t border-line pt-8">
            {hero.facts.map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-3 text-sm leading-relaxed text-ink/75"
              >
                <span aria-hidden="true" className="mt-[0.45em] size-2 shrink-0 bg-sand" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="rise-in-late mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-3xl border border-line bg-linear-to-b from-sand-soft to-ivory-warm">
            {site.headshotSrc ? (
              <Image
                src={site.headshotSrc}
                alt="Portrait of Stefania Casale"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 24rem, 100vw"
                className="object-cover"
              />
            ) : (
              <>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-serif text-[clamp(5rem,14vw,9rem)] leading-none italic text-ink/85"
                >
                  SC
                </span>
                <span
                  aria-hidden="true"
                  className="absolute top-[64%] left-1/2 h-px w-16 -translate-x-1/2 bg-line"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

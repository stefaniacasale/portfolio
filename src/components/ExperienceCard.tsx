import type { ExperienceItem } from "@/data/content";
import LogoImage from "./LogoImage";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export default function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="rounded-3xl border border-line bg-ivory-warm p-6 transition-colors duration-200 hover:border-sand sm:p-8 lg:p-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
        <div>
          <div className="flex items-center gap-3">
            {/* Tile keeps a fixed height and grows sideways for wordmarks. */}
            <span className="inline-flex h-12 min-w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-ivory px-2.5">
              <LogoImage src={item.logo} slot={30} maxWidth={84} />
            </span>
            <p className="text-sm leading-snug font-semibold tracking-tight text-ink/80">
              {item.org}
            </p>
          </div>

          <p className="mt-4 text-sm font-medium tabular-nums text-ink/65">
            {item.period}
          </p>
          <p className="mt-1 text-sm text-ink/65">{item.location}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold tracking-tight text-balance lg:text-2xl">
            {item.role}
          </h3>
          <ul className="mt-5 space-y-2.5">
            {item.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm leading-relaxed text-ink/75"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.5em] size-1.5 shrink-0 bg-sand"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

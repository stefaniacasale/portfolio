import type { ExperienceItem } from "@/data/content";

type ExperienceEntryProps = {
  item: ExperienceItem;
};

export default function ExperienceEntry({ item }: ExperienceEntryProps) {
  return (
    <li className="grid gap-4 border-t border-line py-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12 lg:py-10">
      <div>
        <p className="text-sm font-medium tabular-nums text-ink/65">
          {item.period}
        </p>
        <p className="mt-1 text-sm text-ink/65">{item.location}</p>
      </div>

      <div>
        <h3 className="text-lg font-bold tracking-tight">{item.role}</h3>
        <p className="mt-1 font-medium text-ink/70">{item.org}</p>
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
    </li>
  );
}

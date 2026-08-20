import type { ImpactItem } from "@/data/content";
import { tagPill, tagPillDark } from "./ui";

type ImpactCardProps = {
  item: ImpactItem;
  tone?: "light" | "dark";
};

export default function ImpactCard({ item, tone = "light" }: ImpactCardProps) {
  const dark = tone === "dark";

  return (
    <article
      className={`rounded-3xl border p-6 transition duration-200 hover:-translate-y-0.5 hover:border-sand sm:p-8 lg:p-10 ${
        dark ? "border-panel bg-panel text-ivory" : "border-line bg-ivory-warm"
      }`}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
        <div>
          <p
            className={`text-[11px] font-semibold tracking-[0.18em] uppercase ${
              dark ? "text-sand" : "text-ink/65"
            }`}
          >
            {item.org}
          </p>
          <p
            className={`mt-2 text-sm tabular-nums ${
              dark ? "text-ivory/70" : "text-ink/65"
            }`}
          >
            {item.period}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li key={tag} className={dark ? tagPillDark : tagPill}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold tracking-tight text-balance">
            {item.title}
          </h3>
          <p
            className={`mt-4 leading-relaxed ${
              dark ? "text-ivory/75" : "text-ink/75"
            }`}
          >
            {item.body}
          </p>
        </div>
      </div>
    </article>
  );
}

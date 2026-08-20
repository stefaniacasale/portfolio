import type { ProjectItem } from "@/data/content";
import { tagPill } from "./ui";

type ProjectCardProps = {
  item: ProjectItem;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-line bg-ivory-warm p-6 transition-colors duration-200 hover:border-sand sm:p-8">
      <h3 className="text-xl font-bold tracking-tight text-balance">
        {item.title}
      </h3>
      <p className="mt-3 text-sm text-ink/65">{item.context}</p>
      <p className="mt-1 text-sm tabular-nums text-ink/65">{item.period}</p>
      <p className="mt-5 text-sm leading-relaxed text-ink/75">{item.body}</p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-8">
        {item.tags.map((tag) => (
          <li key={tag} className={tagPill}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

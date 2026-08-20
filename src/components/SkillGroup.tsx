import type { SkillGroup as SkillGroupItem } from "@/data/content";
import { tagPill } from "./ui";

type SkillGroupProps = {
  group: SkillGroupItem;
};

export default function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="border-t border-line pt-5">
      <h3 className="font-semibold tracking-tight">{group.group}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item} className={tagPill}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

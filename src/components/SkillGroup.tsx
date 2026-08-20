import type { SkillGroup as SkillGroupItem } from "@/data/content";
import TagIcon from "./TagIcon";
import { tagPill, tagPillWithIcon } from "./ui";

type SkillGroupProps = {
  group: SkillGroupItem;
};

export default function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="border-t border-line pt-5">
      <h3 className="font-semibold tracking-tight">{group.group}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item.label}
            className={item.icon ? tagPillWithIcon : tagPill}
          >
            <TagIcon icon={item.icon} label={item.label} />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

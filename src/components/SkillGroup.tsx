import type { SkillGroup as SkillGroupItem } from "@/data/content";
import LogoImage, { isLogoAsset } from "./LogoImage";
import TagIcon from "./TagIcon";
import { tagPill, tagPillWithIcon } from "./ui";

type SkillGroupProps = {
  group: SkillGroupItem;
};

/**
 * Three pill shapes, all on the same 30px row:
 * - a wordmark alone, where the mark already spells the name out
 * - a mark plus text, where the mark is a symbol rather than a name
 * - plain text, for practices that have no product behind them
 */
export default function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="border-t border-line pt-5">
      <h3 className="font-semibold tracking-tight">{group.group}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) =>
          item.logoOnly && isLogoAsset(item.icon) ? (
            <li key={item.label} className={tagPill}>
              {/* No text beside it, so the logo carries the accessible name. */}
              <LogoImage
                src={item.icon}
                slot={22}
                maxWidth={140}
                alt={item.label}
              />
            </li>
          ) : (
            <li
              key={item.label}
              className={item.icon ? tagPillWithIcon : tagPill}
            >
              <TagIcon icon={item.icon} />
              {item.label}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

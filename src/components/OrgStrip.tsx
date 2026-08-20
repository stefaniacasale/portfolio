import { organizations } from "@/data/content";
import { container, kicker } from "./ui";

export default function OrgStrip() {
  return (
    <div className="border-y border-line bg-ivory-warm/60">
      <div
        className={`${container} flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-10`}
      >
        <h2 className={`${kicker} shrink-0`}>Experience across</h2>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {organizations.map((org, index) => (
            <li key={org} className="flex items-center gap-4">
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-sand"
                />
              ) : null}
              <span className="text-lg font-medium">{org}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

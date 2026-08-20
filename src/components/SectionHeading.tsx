import type { ReactNode } from "react";
import { kicker, kickerDark } from "./ui";

type SectionHeadingProps = {
  /** Small uppercase label sitting above the heading. */
  label: string;
  children: ReactNode;
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
};

const headingSize = {
  md: "text-[clamp(1.75rem,3.6vw,2.75rem)]",
  lg: "text-[clamp(2.125rem,5vw,3.75rem)]",
};

export default function SectionHeading({
  label,
  children,
  tone = "light",
  size = "md",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className={tone === "dark" ? kickerDark : kicker}>{label}</p>
      <h2
        className={`mt-4 max-w-3xl text-balance font-extrabold leading-[1.02] tracking-tight ${
          headingSize[size]
        } ${tone === "dark" ? "text-ivory" : "text-ink"}`}
      >
        {children}
      </h2>
    </div>
  );
}

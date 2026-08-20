import type { ReactNode } from "react";

type SectionHeadingProps = {
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
  children,
  tone = "light",
  size = "md",
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`max-w-3xl text-balance font-extrabold leading-[1.02] tracking-tight ${
        headingSize[size]
      } ${tone === "dark" ? "text-ivory" : "text-ink"} ${className}`}
    >
      {children}
    </h2>
  );
}

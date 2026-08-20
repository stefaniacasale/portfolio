import type { Metric } from "@/data/content";
import CountUpValue from "./CountUpValue";

type MetricCardProps = {
  metric: Metric;
  /** One card in the row uses the sand surface as a rhythm break. */
  accent?: boolean;
};

export default function MetricCard({ metric, accent = false }: MetricCardProps) {
  return (
    <div
      className={`flex h-full flex-col justify-between rounded-3xl border border-line p-5 sm:p-6 lg:p-7 ${
        accent ? "bg-sand-soft" : "bg-ivory-warm"
      }`}
    >
      {/*
        Scale is set by the longest value, "3.82/4.0". The binding cases are the
        two column grid at 360px and the four column grid at 1024px, where this
        leaves roughly 15px of slack rather than the 2px the previous scale did.
      */}
      <p className="text-[clamp(1.5rem,5vw,2.5rem)] leading-none font-extrabold tracking-tight tabular-nums">
        <CountUpValue value={metric.value} />
      </p>
      <p className="mt-5 text-sm leading-snug text-ink/70">{metric.label}</p>
    </div>
  );
}

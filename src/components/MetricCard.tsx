import type { Metric } from "@/data/content";

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
      <p className="text-[clamp(1.75rem,5.5vw,2.75rem)] leading-none font-extrabold tracking-tight tabular-nums">
        {metric.value}
      </p>
      <p className="mt-5 text-sm leading-snug text-ink/70">{metric.label}</p>
    </div>
  );
}

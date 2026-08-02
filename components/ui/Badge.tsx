type Props = {
  children: React.ReactNode;
  /** Show a small pulsing status dot before the label, e.g. for availability. */
  pulse?: boolean;
  tone?: "blue" | "emerald";
};

const toneClasses = {
  blue: "border-blue-500/20 bg-blue-500/10 text-blue-500",
  emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

export default function Badge({ children, pulse = false, tone = "blue" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur ${toneClasses[tone]}`}
    >
      {pulse && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
}
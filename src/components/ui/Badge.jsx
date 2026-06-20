import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-primary text-surface",
  accent: "bg-accent text-ink",
  success: "bg-success text-surface",
  muted: "bg-cream text-body",
};

export const Badge = ({ variant = "primary", className, children }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-pill text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};

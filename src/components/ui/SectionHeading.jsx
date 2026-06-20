import { cn } from "@/lib/cn";

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}) => {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={cn("space-y-4", alignClass, className)}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-semibold text-ink">{title}</h2>
      )}
      {subtitle && (
        <p className="text-base md:text-lg leading-relaxed text-body max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

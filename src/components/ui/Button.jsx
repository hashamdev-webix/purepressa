import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-primary text-surface hover:bg-primary-dark transition-colors shadow-soft hover:shadow-card",
  secondary:
    "bg-accent text-ink hover:bg-accent-dark transition-colors shadow-soft hover:shadow-card",
  outline:
    "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-surface transition-colors",
  ghost: "bg-transparent text-primary hover:bg-cream transition-colors",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = ({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-all",
        "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};

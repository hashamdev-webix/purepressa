import { cn } from "@/lib/cn";

export const FormField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required,
  error,
  className,
  as: Component = "input",
  rows,
  ...props
}) => {
  const id = `field-${name}`;

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-ink">
          {label}
          {required && <span className="text-danger ml-1">*</span>}
        </label>
      )}
      <Component
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={cn(
          "w-full px-4 py-3 border border-border rounded-md",
          "bg-surface text-ink placeholder:text-muted",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
          "transition-all",
          error && "border-danger focus:ring-danger",
          Component === "textarea" && "resize-vertical min-h-[120px]",
        )}
        {...props}
      />
      {error && <p className="text-sm text-danger">{error}</p>}
    </div>
  );
};

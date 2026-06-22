import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const FormField = forwardRef(function FormField(
  {
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
    options = [],
    id: providedId,
    ...props
  },
  ref,
) {
  const id = providedId || `field-${name}`;
  const errorId = `${id}-error`;
  const fieldClassName = cn(
    "w-full rounded-md border border-border bg-surface px-4 py-3 text-ink",
    "placeholder:text-muted focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary",
    "transition-all",
    error && "border-danger focus:ring-danger",
    Component === "textarea" && "min-h-[120px] resize-y",
  );

  const sharedProps = {
    id,
    name,
    value,
    onChange,
    required,
    ref,
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: fieldClassName,
    ...props,
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-ink">
          {label}
          {required && (
            <>
              <span className="ml-1 text-danger" aria-hidden="true">
                *
              </span>
              <span className="sr-only"> (required)</span>
            </>
          )}
        </label>
      )}

      {Component === "select" ? (
        <select {...sharedProps}>
          <option value="" disabled>
            {placeholder || "Select an option"}
          </option>
          {options.map((option) => {
            const optionValue =
              typeof option === "string" ? option : option.value;
            const optionLabel =
              typeof option === "string" ? option : option.label;

            return (
              <option key={optionValue} value={optionValue}>
                {optionLabel}
              </option>
            );
          })}
        </select>
      ) : Component === "textarea" ? (
        <textarea {...sharedProps} placeholder={placeholder} rows={rows} />
      ) : (
        <input {...sharedProps} type={type} placeholder={placeholder} />
      )}

      {error && (
        <p id={errorId} className="text-sm text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

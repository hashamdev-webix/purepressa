import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export const QuantitySelector = ({
  value,
  onChange,
  min = 1,
  max = 99,
  className,
  decrementLabel = "Decrease quantity",
  incrementLabel = "Increase quantity",
  ...props
}) => {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center border border-border rounded-md",
        className,
      )}
      {...props}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
        className="p-2 hover:bg-surface-alt transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label={decrementLabel}
      >
        <Minus className="w-4 h-4 text-ink" />
      </button>
      <span className="px-4 py-2 text-sm font-semibold text-ink min-w-[3ch] text-center">
        {value}
      </span>
      <button
        type="button"
        onClick={handleIncrement}
        disabled={value >= max}
        className="p-2 hover:bg-surface-alt transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label={incrementLabel}
      >
        <Plus className="w-4 h-4 text-ink" />
      </button>
    </div>
  );
};

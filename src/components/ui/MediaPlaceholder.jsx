import { Leaf } from "lucide-react";
import { cn } from "@/lib/cn";

export const MediaPlaceholder = ({ className, iconSize = 48 }) => {
  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center bg-cream",
        className,
      )}
      role="img"
      aria-label="Product image placeholder"
    >
      <Leaf className="text-primary opacity-30" size={iconSize} />
    </div>
  );
};

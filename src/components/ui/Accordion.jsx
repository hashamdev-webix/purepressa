import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export const Accordion = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-md overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-surface-alt transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-ink">{item.title}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-muted transition-transform flex-shrink-0",
                openIndex === index && "rotate-180",
              )}
            />
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-body leading-relaxed">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

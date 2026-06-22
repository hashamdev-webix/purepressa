import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export const Accordion = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionId = useId();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, index) => {
        const buttonId = `${accordionId}-button-${index}`;
        const panelId = `${accordionId}-panel-${index}`;

        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-md border border-border"
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-surface-alt"
              aria-expanded={openIndex === index}
              aria-controls={panelId}
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
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-4 pb-4 leading-relaxed text-body"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

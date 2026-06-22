import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export const NumberedSteps = ({
  steps,
  className,
  cardClassName,
  iconClassName,
}) => (
  <div
    data-numbered-steps
    className={cn(
      "grid items-stretch gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4",
      className,
    )}
  >
    {steps.map((step, index) => {
      const Icon = step.icon;

      return (
        <motion.article
          key={step.title}
          data-numbered-step
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={cn(
            "flex min-h-[270px] flex-col items-center rounded-card border border-border bg-surface p-6 text-center",
            cardClassName,
          )}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink">
            {index + 1}
          </span>
          <span
            className={cn(
              "mt-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-card bg-cream text-primary shadow-soft",
              iconClassName,
            )}
          >
            <Icon className="h-8 w-8" />
          </span>
          <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-body">
            {step.description}
          </p>
        </motion.article>
      );
    })}
  </div>
);

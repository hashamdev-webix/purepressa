import { cn } from "@/lib/cn";

export const Section = ({ className, children, ...props }) => {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      {children}
    </section>
  );
};

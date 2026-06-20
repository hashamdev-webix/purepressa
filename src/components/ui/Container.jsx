import { cn } from "@/lib/cn";

export const Container = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("mx-auto w-full px-4 md:px-6 lg:px-8", className)}
      style={{ maxWidth: "var(--container-max)" }}
      {...props}
    >
      {children}
    </div>
  );
};

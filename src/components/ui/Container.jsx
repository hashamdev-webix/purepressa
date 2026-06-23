import { cn } from "@/lib/cn";

export const Container = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-12 2xl:px-16",
        className,
      )}
      style={{ maxWidth: "var(--container-max)" }}
      {...props}
    >
      {children}
    </div>
  );
};

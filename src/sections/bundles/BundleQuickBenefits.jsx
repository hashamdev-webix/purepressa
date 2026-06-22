import {
  Building2,
  CalendarDays,
  Dumbbell,
  RefreshCw,
  Truck,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { bundleQuickBenefits } from "@/data/bundlesPage";

const icons = {
  calendar: CalendarDays,
  users: Users,
  building: Building2,
  fitness: Dumbbell,
  refresh: RefreshCw,
  truck: Truck,
};

export const BundleQuickBenefits = () => {
  return (
    <section className="border-y border-border bg-cream py-8">
      <Container>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {bundleQuickBenefits.map((benefit) => {
            const Icon = icons[benefit.icon];

            return (
              <div
                key={benefit.label}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-card bg-surface">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <span className="text-sm font-semibold leading-snug text-ink">
                  {benefit.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

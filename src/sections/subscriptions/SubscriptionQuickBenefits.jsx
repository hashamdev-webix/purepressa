import {
  Building2,
  CalendarDays,
  Dumbbell,
  RefreshCw,
  Repeat2,
  Truck,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { subscriptionQuickBenefits } from "@/data/subscriptionsPage";

const icons = {
  weekly: CalendarDays,
  biweekly: Repeat2,
  monthly: CalendarDays,
  truck: Truck,
  family: Users,
  fitness: Dumbbell,
  office: Building2,
  repeat: RefreshCw,
};

export const SubscriptionQuickBenefits = () => {
  return (
    <section className="border-y border-border bg-cream py-8">
      <Container>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {subscriptionQuickBenefits.map((benefit) => {
            const Icon = icons[benefit.icon];

            return (
              <div
                key={benefit.label}
                className="flex items-center gap-3 rounded-card bg-surface/60 p-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-surface">
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

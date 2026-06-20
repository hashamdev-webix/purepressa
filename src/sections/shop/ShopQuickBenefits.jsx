import {
  CupSoda,
  Package,
  RefreshCw,
  Store,
  Truck,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { quickBenefits } from "@/data/shop";

const icons = {
  bottle: CupSoda,
  package: Package,
  truck: Truck,
  refresh: RefreshCw,
  users: Users,
  store: Store,
};

export const ShopQuickBenefits = () => {
  return (
    <section className="border-y border-border bg-cream py-8">
      <Container>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {quickBenefits.map((benefit) => {
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

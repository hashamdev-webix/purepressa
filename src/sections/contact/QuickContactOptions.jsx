import {
  Building2,
  CircleHelp,
  RefreshCw,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { quickContactOptions } from "@/data/contact";

const icons = {
  question: CircleHelp,
  order: ShoppingBag,
  delivery: Truck,
  subscription: RefreshCw,
  wholesale: Store,
  business: Building2,
};

export const QuickContactOptions = () => (
  <section className="border-y border-border bg-cream py-8">
    <Container>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {quickContactOptions.map((option) => {
          const Icon = icons[option.icon];

          return (
            <div
              key={option.label}
              className="flex flex-col items-center gap-3 rounded-card bg-surface/70 p-4 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-card bg-surface text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-snug text-ink">
                {option.label}
              </span>
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);

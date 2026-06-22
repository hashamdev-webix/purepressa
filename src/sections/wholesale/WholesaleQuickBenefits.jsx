import {
  Building2,
  Coffee,
  Handshake,
  MapPin,
  PackageCheck,
  Store,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { wholesaleQuickBenefits } from "@/data/wholesale";

const icons = {
  bottle: PackageCheck,
  map: MapPin,
  store: Store,
  coffee: Coffee,
  office: Building2,
  support: Handshake,
};

export const WholesaleQuickBenefits = () => (
  <section className="border-y border-border bg-cream py-8">
    <Container>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {wholesaleQuickBenefits.map((benefit) => {
          const Icon = icons[benefit.icon];

          return (
            <div
              key={benefit.label}
              className="flex flex-col items-center gap-3 rounded-card bg-surface/70 p-4 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-card bg-surface text-primary">
                <Icon className="h-5 w-5" />
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

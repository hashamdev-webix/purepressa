import { ArrowDown, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactContent } from "@/data/contact";

export const DeliveryPickupSupport = ({ onContact }) => {
  const { delivery } = contactContent;

  return (
    <Section id="delivery" className="scroll-mt-20 bg-cream-soft">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow={delivery.eyebrow}
              title={delivery.title}
              subtitle={delivery.description}
              align="left"
              className="[&_p]:mx-0"
            />
            <Button onClick={onContact} className="mt-7">
              Contact Us
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-border bg-surface p-6">
              <Truck className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-lg font-semibold text-ink">
                Local Delivery
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Ask about order timing, Calgary delivery, and recurring
                delivery support.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-6">
              <MapPin className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-lg font-semibold text-ink">
                Pickup Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Contact the team about pickup availability and product
                collection questions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

import { Link } from "react-router-dom";
import { ArrowRight, Building2, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  businessSubscriptionBestFor,
  businessSubscriptionPricing,
  subscriptionsContent,
} from "@/data/subscriptionsPage";

export const OfficeBusinessSubscription = () => {
  const { office } = subscriptionsContent;

  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-lg border border-border bg-primary text-surface shadow-card">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
            <div className="space-y-7">
              <SectionHeading
                eyebrow="Business Subscriptions"
                title={office.title}
                subtitle={office.description}
                align="left"
                className="[&_h2]:text-surface [&_p]:text-cream"
              />

              <div>
                <p className="mb-3 font-display text-lg font-semibold text-surface">
                  Best For
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {businessSubscriptionBestFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-cream">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button as={Link} to="/contact" variant="secondary">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-3">
              {businessSubscriptionPricing.map((price) => (
                <div
                  key={price}
                  className="flex items-center gap-4 rounded-card bg-surface/10 p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-surface text-primary">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-surface">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

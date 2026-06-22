import { Link } from "react-router-dom";
import { ArrowRight, Check, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  bundlesContent,
  subscriptionBundleBenefits,
} from "@/data/bundlesPage";

export const SubscriptionBundlePromo = () => {
  const { subscription } = bundlesContent;

  return (
    <Section className="bg-cream">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 rounded-lg border border-border bg-surface p-8 shadow-soft md:p-10 lg:order-1">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-card bg-cream">
              <RefreshCw className="h-8 w-8 text-primary" />
            </div>
            <ul className="space-y-4">
              {subscriptionBundleBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                  <span className="text-body">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 space-y-6 lg:order-2">
            <SectionHeading
              eyebrow={subscription.eyebrow}
              title={subscription.title}
              subtitle={subscription.description}
              align="left"
            />
            <Button as={Link} to="/subscriptions" variant="secondary">
              Explore Subscription Bundles
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

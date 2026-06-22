import { Link } from "react-router-dom";
import { ArrowRight, Leaf, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { subscriptionsContent } from "@/data/subscriptionsPage";

export const FinalSubscriptionsCTA = ({
  onViewPlans,
  onBuildSubscription,
}) => {
  const { final } = subscriptionsContent;

  return (
    <Section className="relative overflow-hidden bg-linear-to-b from-cream to-cream-soft">
      <Container>
        <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {final.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
              {final.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-body md:text-lg">
              {final.description}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button onClick={onViewPlans} size="lg">
              <RefreshCw className="h-5 w-5" />
              View Plans
            </Button>
            <Button
              onClick={onBuildSubscription}
              size="lg"
              variant="outline"
            >
              Build Your Subscription
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button as={Link} to="/contact" size="lg" variant="ghost">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>

      <Leaf className="pointer-events-none absolute left-8 top-8 h-40 w-40 text-primary opacity-5" />
      <Leaf className="pointer-events-none absolute bottom-8 right-8 h-40 w-40 rotate-180 text-primary opacity-5" />
    </Section>
  );
};

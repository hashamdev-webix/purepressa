import { SubscriptionPlanCard } from "@/components/subscription/SubscriptionPlanCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { subscriptions } from "@/data/subscriptions";
import { subscriptionsContent } from "@/data/subscriptionsPage";

export const SubscriptionPlans = ({ onBuildSubscription }) => {
  const { plans } = subscriptionsContent;

  return (
    <Section
      id="subscription-plans"
      className="scroll-mt-20 bg-cream-soft"
    >
      <Container>
        <SectionHeading eyebrow={plans.eyebrow} title={plans.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subscriptions.map((plan) => (
            <SubscriptionPlanCard
              key={plan.id}
              plan={plan}
              onBuildSubscription={onBuildSubscription}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

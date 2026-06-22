import { ListChecks, Package, Settings, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NumberedSteps } from "@/components/ui/NumberedSteps";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  subscriptionsContent,
  subscriptionSteps,
} from "@/data/subscriptionsPage";

const icons = {
  plan: ListChecks,
  quantity: Package,
  truck: Truck,
  manage: Settings,
};

const steps = subscriptionSteps.map((step) => ({
  ...step,
  icon: icons[step.icon],
}));

export const HowSubscriptionsWork = () => {
  const { how } = subscriptionsContent;

  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={how.eyebrow} title={how.title} />

        <NumberedSteps steps={steps} className="mt-12" />
      </Container>
    </Section>
  );
};

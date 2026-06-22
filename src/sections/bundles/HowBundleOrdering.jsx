import { Heart, Package, ShoppingCart, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NumberedSteps } from "@/components/ui/NumberedSteps";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bundleOrderSteps, bundlesContent } from "@/data/bundlesPage";

const icons = {
  package: Package,
  cart: ShoppingCart,
  truck: Truck,
  heart: Heart,
};

const steps = bundleOrderSteps.map((step) => ({
  ...step,
  icon: icons[step.icon],
}));

export const HowBundleOrdering = () => {
  const { how } = bundlesContent;

  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading eyebrow={how.eyebrow} title={how.title} />

        <NumberedSteps
          steps={steps}
          className="mt-12"
          iconClassName="bg-cream"
        />
      </Container>
    </Section>
  );
};

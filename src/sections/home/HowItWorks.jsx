import { ShoppingCart, Package, Truck, Heart } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { NumberedSteps } from "@/components/ui/NumberedSteps";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ShoppingCart,
    title: "Choose Your Juices",
    description:
      "Browse our collection of cold-pressed juices, bundles, and subscriptions",
  },
  {
    icon: Package,
    title: "We Press Fresh",
    description: "Your order is cold-pressed using fresh, local ingredients",
  },
  {
    icon: Truck,
    title: "Delivered or Pickup",
    description: "Choose home delivery or pickup from our Calgary location",
  },
  {
    icon: Heart,
    title: "Enjoy & Repeat",
    description: "Feel the difference and reorder when you're ready for more",
  },
];

export const HowItWorks = () => {
  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading
          eyebrow="Simple Process"
          title="How It Works"
          subtitle="From order to delivery, we make getting fresh juice easy"
        />

        <NumberedSteps steps={steps} className="mt-12" />
      </Container>
    </Section>
  );
};

import { PackageCheck, ShoppingCart, Store, WandSparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NumberedSteps } from "@/components/ui/NumberedSteps";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, aboutSteps } from "@/data/about";

const icons = {
  creation: WandSparkles,
  packaging: PackageCheck,
  ordering: ShoppingCart,
  retail: Store,
};

const steps = aboutSteps.map((step) => ({
  ...step,
  icon: icons[step.icon],
}));

export const HowWeWork = () => {
  const { process } = aboutContent;

  return (
    <Section id="how-we-work" className="scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
        />
        <NumberedSteps steps={steps} className="mt-12" />
      </Container>
    </Section>
  );
};

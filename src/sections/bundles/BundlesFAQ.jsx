import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bundlesContent, bundlesFaqItems } from "@/data/bundlesPage";

export const BundlesFAQ = () => {
  const { faq } = bundlesContent;

  return (
    <Section className="bg-surface-alt">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
          <Accordion items={bundlesFaqItems} className="mt-10" />
        </div>
      </Container>
    </Section>
  );
};

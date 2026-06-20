import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { shopContent, shopFaqItems } from "@/data/shop";

export const ShopFAQ = () => {
  const { faq } = shopContent;

  return (
    <Section className="bg-surface-alt">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
          <Accordion items={shopFaqItems} className="mt-10" />
        </div>
      </Container>
    </Section>
  );
};

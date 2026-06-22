import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, aboutFaqItems } from "@/data/about";

export const AboutFAQ = () => {
  const { faq } = aboutContent;

  return (
    <Section id="faq" className="scroll-mt-20">
      <Container>
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <Accordion items={aboutFaqItems} className="mx-auto mt-10 max-w-3xl" />
      </Container>
    </Section>
  );
};

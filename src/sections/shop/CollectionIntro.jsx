import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { shopContent } from "@/data/shop";

export const CollectionIntro = () => {
  const { collection } = shopContent;

  return (
    <Section className="pb-10 md:pb-14">
      <Container>
        <SectionHeading
          eyebrow={collection.eyebrow}
          title={collection.title}
          subtitle={collection.description}
          className="mx-auto max-w-4xl"
        />
      </Container>
    </Section>
  );
};

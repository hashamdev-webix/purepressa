import { Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, whoWeAreParagraphs } from "@/data/about";

export const WhoWeAre = () => {
  const { who } = aboutContent;

  return (
    <Section id="who-we-are" className="scroll-mt-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28">
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-card bg-cream text-primary">
              <Leaf className="h-7 w-7" />
            </span>
            <SectionHeading
              eyebrow={who.eyebrow}
              title={who.title}
              align="left"
            />
          </div>

          <div className="space-y-5 rounded-lg border border-border bg-cream-soft p-7 shadow-soft md:p-10">
            {whoWeAreParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-body md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

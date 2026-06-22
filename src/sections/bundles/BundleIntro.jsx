import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bundlesContent } from "@/data/bundlesPage";

export const BundleIntro = ({ onExplore }) => {
  const { intro } = bundlesContent;

  return (
    <Section className="pb-10 md:pb-14">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading eyebrow={intro.eyebrow} title={intro.title} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-body md:text-lg">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button onClick={onExplore} variant="outline" className="mt-8">
            Explore All Bundles
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </Section>
  );
};

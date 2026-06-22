import { CheckCircle2, Handshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { wholesaleContent, whyPartnerItems } from "@/data/wholesale";

export const WhyPartner = () => {
  const { why } = wholesaleContent;

  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-lg border border-border bg-primary text-surface shadow-card">
          <div className="grid items-center gap-10 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div>
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-card bg-surface text-primary">
                <Handshake className="h-8 w-8" />
              </span>
              <SectionHeading
                eyebrow={why.eyebrow}
                title={why.title}
                align="left"
                className="[&_h2]:text-surface"
              />
            </div>

            <ul className="space-y-3">
              {whyPartnerItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-card bg-surface/10 p-4 text-cream"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

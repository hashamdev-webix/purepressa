import {
  Apple,
  Building2,
  Coffee,
  Dumbbell,
  ShoppingBag,
  Sparkles,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  wholesaleContent,
  wholesalePartnerTypes,
} from "@/data/wholesale";

const partnerIcons = [
  Store,
  Dumbbell,
  Coffee,
  Sparkles,
  Building2,
  ShoppingBag,
  Apple,
];

export const WhoWeSupply = ({ onContact }) => {
  const { partners } = wholesaleContent;

  return (
    <Section id="partners" className="scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow={partners.eyebrow}
          title={partners.title}
          subtitle={partners.description}
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {wholesalePartnerTypes.map((partner, index) => {
            const Icon = partnerIcons[index];

            return (
              <div
                key={partner}
                className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-cream text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-semibold leading-snug text-ink">
                  {partner}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button onClick={onContact}>Contact Us</Button>
        </div>
      </Container>
    </Section>
  );
};

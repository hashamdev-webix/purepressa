import {
  BriefcaseBusiness,
  Building2,
  Dumbbell,
  ShoppingBasket,
  Store,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, whoWeServeItems } from "@/data/about";

const icons = [
  BriefcaseBusiness,
  Dumbbell,
  Users,
  Building2,
  ShoppingBasket,
  Store,
];

export const WhoWeServe = () => {
  const { serve } = aboutContent;

  return (
    <Section className="bg-cream-soft">
      <Container>
        <SectionHeading
          eyebrow={serve.eyebrow}
          title={serve.title}
          subtitle={serve.intro}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whoWeServeItems.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item}
                className="flex gap-4 rounded-card border border-border bg-surface p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-cream text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="font-semibold leading-relaxed text-ink">{item}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

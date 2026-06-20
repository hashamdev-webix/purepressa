import { Link } from "react-router-dom";
import { ArrowRight, Check, Package } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { packOptions, shopContent } from "@/data/shop";

export const BuildYourPackPromo = () => {
  const { buildPack } = shopContent;

  return (
    <Section className="bg-cream-soft">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-card bg-cream">
              <Package className="h-8 w-8 text-primary" />
            </span>
            <SectionHeading
              eyebrow="Bundles & packs"
              title={buildPack.title}
              subtitle={buildPack.description}
              align="left"
            />
            <Button as={Link} to="/bundles">
              Build Your Pack
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {packOptions.map((option) => (
              <div
                key={option}
                className="flex items-center gap-3 rounded-card border border-border bg-surface p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                <span className="font-semibold text-ink">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

import { Link } from "react-router-dom";
import { ArrowRight, Building2, Store } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { shopContent, wholesalePricing } from "@/data/shop";

export const WholesaleCTA = () => {
  const { wholesale } = shopContent;

  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-lg border border-border bg-primary text-surface shadow-card">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:p-14">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Wholesale"
                title={wholesale.title}
                subtitle={wholesale.description}
                align="left"
                className="[&_h2]:text-surface [&_p]:text-cream"
              />
              <Button as={Link} to="/wholesale" variant="secondary">
                Become a Wholesale Partner
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-3">
              {wholesalePricing.map((price, index) => {
                const Icon = index === 0 ? Store : Building2;

                return (
                  <div
                    key={price}
                    className="flex items-center gap-4 rounded-card bg-surface/10 p-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-surface text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-semibold text-surface">{price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

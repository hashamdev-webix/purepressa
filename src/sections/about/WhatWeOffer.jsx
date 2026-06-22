import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, aboutOfferings } from "@/data/about";

export const WhatWeOffer = () => {
  const { offer } = aboutContent;

  return (
    <Section id="what-we-offer" className="scroll-mt-20">
      <Container>
        <div className="overflow-hidden rounded-lg border border-border bg-primary text-surface shadow-card">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
            <div>
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-card bg-surface text-primary">
                <ShoppingBag className="h-8 w-8" />
              </span>
              <SectionHeading
                eyebrow={offer.eyebrow}
                title={offer.title}
                align="left"
                className="[&_h2]:text-surface"
              />
              <Button
                as={Link}
                to="/shop"
                variant="secondary"
                className="mt-7"
              >
                Shop Our Products
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {aboutOfferings.map((offering) => (
                <li
                  key={offering}
                  className="flex items-start gap-3 rounded-card bg-surface/10 p-4 text-cream"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="font-medium">{offering}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

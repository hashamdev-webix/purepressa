import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  businessInquiryChecklist,
  contactContent,
} from "@/data/contact";

export const WholesaleBusinessInquiries = () => {
  const { wholesale } = contactContent;

  return (
    <Section id="wholesale" className="scroll-mt-20">
      <Container>
        <div className="overflow-hidden rounded-lg border border-border bg-primary text-surface shadow-card">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
            <div>
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-card bg-surface text-primary">
                <Building2 className="h-8 w-8" />
              </span>
              <SectionHeading
                eyebrow={wholesale.eyebrow}
                title={wholesale.title}
                subtitle={wholesale.description}
                align="left"
                className="[&_h2]:text-surface [&_p]:mx-0 [&_p]:text-cream"
              />
              <Button
                as={Link}
                to="/wholesale#wholesale-form"
                variant="secondary"
                className="mt-7"
              >
                Submit Wholesale Inquiry
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="rounded-card bg-surface/10 p-6">
              <p className="font-display text-lg font-semibold text-surface">
                Business inquiries should include
              </p>
              <ul className="mt-5 space-y-3">
                {businessInquiryChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-cream">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

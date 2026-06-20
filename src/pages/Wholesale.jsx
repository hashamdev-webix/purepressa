import { Helmet } from "react-helmet-async";
import { Store } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const Wholesale = () => {
  return (
    <>
      <Helmet>
        <title>Wholesale Partnerships | PurePressa</title>
        <meta
          name="description"
          content="Partner with PurePressa. Stock fresh, cold-pressed juices at your café, gym, or retail location. Wholesale pricing and reliable delivery."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-linear-to-b from-cream-soft to-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Business Partnerships
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink">
              Wholesale Partnerships
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-body">
              Stock premium cold-pressed juices at your location
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto bg-cream rounded-card p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-surface rounded-card">
              <Store className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-ink">
              Full Wholesale Page Coming Soon
            </h2>
            <p className="text-body leading-relaxed">
              We're preparing detailed partnership information, pricing tiers,
              and application forms. Contact us directly for wholesale
              inquiries.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

import { Helmet } from "react-helmet-async";
import { RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const Subscriptions = () => {
  return (
    <>
      <Helmet>
        <title>Juice Subscription Plans | PurePressa</title>
        <meta
          name="description"
          content="Subscribe and save on fresh cold-pressed juices. Weekly, biweekly, and monthly delivery options with flexible customization."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-linear-to-b from-cream-soft to-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Subscribe & Save
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink">
              Juice Subscription Plans
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-body">
              Never run out with flexible weekly, biweekly, or monthly delivery
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto bg-cream rounded-card p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-surface rounded-card">
              <RefreshCw className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-ink">
              Full Subscriptions Page Coming Soon
            </h2>
            <p className="text-body leading-relaxed">
              We're designing a seamless subscription management experience with
              plan comparisons and customization tools.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

import { Helmet } from "react-helmet-async";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | PurePressa</title>
        <meta
          name="description"
          content="Get in touch with PurePressa. Contact form, delivery info, and pickup location details. We're here to help."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-linear-to-b from-cream-soft to-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink">
              Contact Us
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-body">
              Questions? We're here to help with orders, delivery, and more
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto bg-cream rounded-card p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-surface rounded-card">
              <Mail className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-ink">
              Full Contact Page Coming Soon
            </h2>
            <p className="text-body leading-relaxed">
              We're building a complete contact experience with form, map,
              delivery zones, and pickup location details. For now, reach us at
              info@purepressa.com
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

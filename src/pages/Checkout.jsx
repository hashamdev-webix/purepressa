import { Helmet } from "react-helmet-async";
import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const Checkout = () => {
  return (
    <>
      <Helmet>
        <title>Checkout | PurePressa</title>
        <meta
          name="description"
          content="Complete your PurePressa order. Secure checkout with delivery and pickup options."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-linear-to-b from-cream-soft to-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Secure Checkout
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink">
              Complete Your Order
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-body">
              Review your cart and choose delivery or pickup
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto bg-cream rounded-card p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-surface rounded-card">
              <ShoppingBag className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-ink">
              Full Checkout Page Coming Soon
            </h2>
            <p className="text-body leading-relaxed">
              We're building a complete checkout flow with order summary,
              delivery/pickup selection, customer details form, and payment
              integration.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

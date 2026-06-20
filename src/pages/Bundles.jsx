import { Helmet } from "react-helmet-async";
import { Package } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const Bundles = () => {
  return (
    <>
      <Helmet>
        <title>Juice Bundles & Packs | PurePressa</title>
        <meta
          name="description"
          content="Save more with curated juice bundles. Weekly wellness packs, family boxes, fitness packs, and custom build-your-own options."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-linear-to-b from-cream-soft to-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Save More
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink">
              Juice Bundles & Packs
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-body">
              Curated multi-bottle packs for every lifestyle and wellness goal
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto bg-cream rounded-card p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-surface rounded-card">
              <Package className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-ink">
              Full Bundles Page Coming Soon
            </h2>
            <p className="text-body leading-relaxed">
              We're building a comprehensive bundles experience with custom pack
              builder and filtering options. Preview our bundles on the home
              page.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

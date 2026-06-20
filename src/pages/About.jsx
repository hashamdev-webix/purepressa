import { Helmet } from "react-helmet-async";
import { Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About PurePressa | Our Story</title>
        <meta
          name="description"
          content="Learn about PurePressa's mission, values, and commitment to fresh, locally-sourced cold-pressed juices in Calgary."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-linear-to-b from-cream-soft to-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink">
              About PurePressa
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-body">
              Calgary's premium cold-pressed juice bar, committed to wellness
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto bg-cream rounded-card p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-surface rounded-card">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-ink">
              Full About Page Coming Soon
            </h2>
            <p className="text-body leading-relaxed">
              We're crafting our full story including our mission, values,
              ingredient sourcing, cold-pressing process, and team introduction.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

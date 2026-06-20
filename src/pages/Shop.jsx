import { Helmet } from "react-helmet-async";
import { Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop Cold-Pressed Juices | PurePressa</title>
        <meta
          name="description"
          content="Browse our full collection of fresh, cold-pressed juices and wellness beverages. Filter by category and find your perfect blend."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-linear-to-b from-cream-soft to-surface py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Collection
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink">
              Shop Cold-Pressed Juices
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-body">
              Browse our full range of fresh, nutrient-packed wellness beverages
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto bg-cream rounded-card p-12 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-surface rounded-card">
              <Leaf className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-ink">
              Full Shop Page Coming Soon
            </h2>
            <p className="text-body leading-relaxed">
              We're crafting the perfect shopping experience with advanced
              filtering, sorting, and search. Check back soon or explore our
              featured products on the home page.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

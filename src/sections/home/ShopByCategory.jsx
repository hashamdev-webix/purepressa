import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";

const featuredCategories = categories.slice(0, 6);

export const ShopByCategory = () => {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Our Collection"
          title="Shop by Category"
          subtitle="Explore our range of cold-pressed juices, wellness blends, and curated packs"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategories.map((category, idx) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                to={`/shop?category=${category.slug}`}
                className="group block p-6 bg-cream hover:bg-cream-soft rounded-card border border-border hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-${category.accent}/10 rounded-md`}>
                    <Leaf className={`w-6 h-6 text-${category.accent}`} />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-body leading-relaxed line-clamp-2">
                  {category.blurb}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

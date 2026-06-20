import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/product/ProductCard";
import { featuredProducts } from "@/data/products";

export const FeaturedProducts = () => {
  const displayProducts = featuredProducts.slice(0, 4);

  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading
          eyebrow="Best Sellers"
          title="Featured Products"
          subtitle="Our most popular cold-pressed juices and wellness beverages"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Shop All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

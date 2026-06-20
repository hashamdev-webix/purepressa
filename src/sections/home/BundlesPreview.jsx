import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BundleCard } from "@/components/product/BundleCard";
import { bundles } from "@/data/bundles";

export const BundlesPreview = () => {
  const displayBundles = bundles.slice(0, 3);

  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Save More"
          title="Curated Bundles"
          subtitle="Weekly packs, family boxes, and custom bundles for every lifestyle"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayBundles.map((bundle, idx) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <BundleCard bundle={bundle} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/bundles"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Explore All Bundles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

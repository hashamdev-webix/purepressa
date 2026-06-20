import { motion } from "framer-motion";
import { Leaf, Droplets, Heart, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const points = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No additives, preservatives, or artificial ingredients",
  },
  {
    icon: Droplets,
    title: "Cold-Pressed",
    description: "Maximum nutrients and freshness in every bottle",
  },
  {
    icon: Heart,
    title: "Wellness Focused",
    description: "Blends designed for your health goals",
  },
  {
    icon: Truck,
    title: "Local Delivery",
    description: "Fresh delivery across Calgary",
  },
];

export const QuickValuePoints = () => {
  return (
    <section className="py-12 md:py-16 bg-surface">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center space-y-3"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cream rounded-card">
                <point.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-ink">{point.title}</h3>
              <p className="text-sm text-body leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

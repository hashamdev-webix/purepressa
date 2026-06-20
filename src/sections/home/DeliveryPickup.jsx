import { motion } from "framer-motion";
import { Truck, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const DeliveryPickup = () => {
  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading
          eyebrow="Convenient Options"
          title="Delivery & Pickup"
          subtitle="Choose what works best for your schedule"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Delivery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-surface rounded-card border border-border"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cream rounded-card mb-6">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-ink mb-4">
              Local Delivery
            </h3>
            <div className="space-y-3 text-body">
              <p className="leading-relaxed">
                Fresh juice delivered to your door across Calgary. Orders placed
                by 8pm arrive the next day.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Free delivery on orders over $50</li>
                <li>• Scheduled delivery windows available</li>
                <li>• Contact-free delivery options</li>
                <li>• Cooler packaging to keep juices fresh</li>
              </ul>
            </div>
          </motion.div>

          {/* Pickup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-surface rounded-card border border-border"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cream rounded-card mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-ink mb-4">
              Store Pickup
            </h3>
            <div className="space-y-3 text-body">
              <p className="leading-relaxed">
                Pick up your order from our Calgary location. Order online and
                collect same-day or next-day.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• No minimum order for pickup</li>
                <li>• Same-day pickup available</li>
                <li>• Convenient northeast Calgary location</li>
                <li>• Browse additional products in-store</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

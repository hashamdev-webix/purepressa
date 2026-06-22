import { ArrowDown, Package } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import {
  wholesaleContent,
  wholesaleProducts,
} from "@/data/wholesale";

const productImages = Object.fromEntries(
  products.map((product) => [product.id, product.image]),
);

export const WholesaleProducts = ({ onContact }) => {
  const { products: content } = wholesaleContent;

  return (
    <Section className="bg-cream-soft">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wholesaleProducts.map((product) => {
            const image = productImages[product.imageProductId];

            return (
              <article
                key={product.id}
                className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface transition-shadow hover:shadow-hover"
              >
                <div className="aspect-[4/3] overflow-hidden bg-cream">
                  {image ? (
                    <img
                      src={image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <MediaPlaceholder iconSize={52} />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cream text-primary">
                      <Package className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold text-ink">
                      {product.name}
                    </h3>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-body">
                    {product.description}
                  </p>
                  <p className="mt-5 font-semibold text-primary">
                    {product.priceLabel}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    <span className="font-semibold text-ink">Best For:</span>{" "}
                    {product.bestFor}
                  </p>
                  <Button
                    onClick={onContact}
                    variant="outline"
                    size="sm"
                    className="mt-6 w-full"
                  >
                    Contact Us
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

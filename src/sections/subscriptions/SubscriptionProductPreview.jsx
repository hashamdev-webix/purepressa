import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import {
  subscriptionsContent,
  subscriptionPreviews,
} from "@/data/subscriptionsPage";
import { useCart } from "@/hooks/useCart";

const productImages = Object.fromEntries(
  products.map((product) => [product.id, product.image]),
);

export const SubscriptionProductPreview = () => {
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();
  const { preview } = subscriptionsContent;

  const createCartItem = (item) => ({
    id: `sub-preview-${item.id}`,
    name: item.name,
    price: item.price,
    image: productImages[item.imageProductId] || null,
    meta: `${item.frequency} subscription`,
  });

  const handleAddToCart = (item) => {
    addItem(createCartItem(item));
    openCart();
  };

  const handleOrderNow = (item) => {
    addItem(createCartItem(item));
    navigate("/checkout");
  };

  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={preview.eyebrow} title={preview.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {subscriptionPreviews.map((item) => {
            const image = productImages[item.imageProductId];

            return (
              <article
                key={item.id}
                className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface transition-shadow hover:shadow-hover"
              >
                <div className="aspect-[4/3] overflow-hidden bg-cream">
                  {image ? (
                    <img
                      src={image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <MediaPlaceholder iconSize={48} />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                    {item.description}
                  </p>
                  <p className="mt-4 font-bold text-primary">
                    {item.priceLabel}
                  </p>
                  <div className="mt-5 grid gap-2">
                    <Button
                      onClick={() => handleAddToCart(item)}
                      variant="outline"
                      size="sm"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button onClick={() => handleOrderNow(item)} size="sm">
                      Order Now
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

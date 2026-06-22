import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Package,
  ShoppingCart,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { useCart } from "@/hooks/useCart";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/cn";

export const SubscriptionPlanCard = ({
  plan,
  onBuildSubscription,
  className,
}) => {
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();
  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const selectedTier = plan.tiers[selectedTierIndex];

  const createCartItem = () => ({
    id: `sub-${plan.id}-${selectedTier.label}`,
    name: `${plan.name} — ${selectedTier.label}`,
    price: selectedTier.price,
    image: plan.image,
    meta: `${plan.frequency} subscription`,
  });

  const handleAddToCart = () => {
    addItem(createCartItem());
    openCart();
  };

  const handleOrderNow = () => {
    addItem(createCartItem());
    navigate("/checkout");
  };

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface transition-all duration-300 hover:shadow-hover",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        {plan.image ? (
          <img
            src={plan.image}
            alt={plan.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <MediaPlaceholder iconSize={64} />
        )}
        {plan.badges?.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {plan.badges.map((badge) => (
              <Badge key={badge} variant="primary">
                {badge}
              </Badge>
            ))}
          </div>
        )}
        {plan.isBuilder && (
          <div className="absolute right-3 top-3">
            <Badge variant="accent">
              <Package className="h-3 w-3" />
              Customize
            </Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div>
          <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            {plan.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="muted">
              <CalendarDays className="h-3 w-3" />
              {plan.frequency}
            </Badge>
            <span className="rounded-pill border border-border px-3 py-1 text-xs font-medium text-muted">
              Best for: {plan.bestFor}
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-1 flex-col justify-end border-t border-border pt-5">
          {plan.ctaType === "contact" ? (
            <>
              <p className="text-lg font-bold text-primary">{plan.priceNote}</p>
              <Button as={Link} to="/contact" className="mt-5 w-full">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </>
          ) : plan.isBuilder ? (
            <>
              <p className="text-lg font-bold text-primary">{plan.priceNote}</p>
              <p className="mt-1 text-sm text-muted">
                Choose your size, products, and delivery frequency.
              </p>
              <Button
                onClick={onBuildSubscription}
                variant="secondary"
                className="mt-5 w-full"
              >
                Build Your Subscription
                <ArrowRight className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <>
              <fieldset>
                <legend className="mb-3 text-sm font-semibold text-ink">
                  Choose bottle quantity
                </legend>
                <div className="space-y-2">
                  {plan.tiers.map((tier, index) => {
                    const inputId = `${plan.id}-tier-${index}`;
                    const isSelected = selectedTierIndex === index;

                    return (
                      <label
                        key={tier.label}
                        htmlFor={inputId}
                        className={cn(
                          "flex cursor-pointer items-center justify-between gap-3 rounded-md border px-3 py-2.5 transition-colors",
                          isSelected
                            ? "border-primary bg-cream"
                            : "border-border hover:border-primary",
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <input
                            id={inputId}
                            type="radio"
                            name={`${plan.id}-tier`}
                            checked={isSelected}
                            onChange={() => setSelectedTierIndex(index)}
                            className="h-4 w-4 accent-primary"
                          />
                          <span className="text-sm font-semibold text-ink">
                            {tier.label}
                          </span>
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {formatCurrency(tier.price)}
                          <span className="font-normal text-muted">
                            {tier.unit}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <Button onClick={handleAddToCart} variant="outline" size="sm">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
                <Button onClick={handleOrderNow} size="sm">
                  Order Now
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

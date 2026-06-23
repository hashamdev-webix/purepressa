import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Repeat,
  ShoppingCart,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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

  const isMostPopular =
    plan.badges?.some((badge) => badge.toLowerCase().includes("popular")) ||
    false;

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

  // Determine icon based on frequency
  const lower = plan.frequency.toLowerCase();
  const showRepeatIcon =
    lower.includes("weekly") && (lower.includes("or") || lower.includes(","));
  const showBuildingIcon =
    lower.includes("business") || lower.includes("office");

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-card bg-surface p-6 shadow-soft transition-all duration-300 hover:shadow-card md:p-7",
        isMostPopular
          ? "border-2 border-primary/60 shadow-card"
          : "border border-border",
        className,
      )}
    >
      {/* Frequency pill at top */}
      <div className="inline-flex items-center gap-1.5 self-start rounded-pill bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
        {showRepeatIcon ? (
          <Repeat className="h-3.5 w-3.5" />
        ) : showBuildingIcon ? (
          <Building2 className="h-3.5 w-3.5" />
        ) : (
          <CalendarDays className="h-3.5 w-3.5" />
        )}
        {plan.frequency}
      </div>

      {/* Most Popular badge (if applicable) */}
      {isMostPopular && (
        <div className="mt-3">
          <Badge variant="primary">Most Popular</Badge>
        </div>
      )}

      {/* Plan name */}
      <h3 className="mt-4 text-xl font-semibold text-ink">{plan.name}</h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed text-body">
        {plan.description}
      </p>

      {/* Best for line */}
      <div className="mt-3 border-t border-border pt-3">
        <p className="text-xs text-muted">Best for: {plan.bestFor}</p>
      </div>

      {/* Pricing area - push to bottom */}
      <div className="mt-auto pt-5">
        {plan.ctaType === "contact" ? (
          <>
            <p className="text-primary font-semibold">{plan.priceNote}</p>
            <div className="mt-5">
              <Button as={Link} to="/contact" className="w-full">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </>
        ) : plan.isBuilder ? (
          <>
            <p className="text-2xl font-bold text-primary">{plan.priceNote}</p>
            <p className="mt-1 text-sm text-muted">
              Choose your size, products, and delivery frequency.
            </p>
            <div className="mt-5">
              <Button onClick={onBuildSubscription} className="w-full">
                Build Your Subscription
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </>
        ) : (
          <>
            <fieldset>
              <legend className="mb-3 text-sm font-medium text-ink">
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
                        "flex cursor-pointer items-center justify-between gap-3 rounded-md px-4 py-3 transition-all",
                        isSelected
                          ? "border-2 border-primary bg-cream ring-1 ring-primary/20"
                          : "border border-border bg-surface hover:border-primary/40",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <div className="relative flex h-4 w-4 items-center justify-center">
                          <input
                            id={inputId}
                            type="radio"
                            name={`${plan.id}-tier`}
                            checked={isSelected}
                            onChange={() => setSelectedTierIndex(index)}
                            className={cn(
                              "h-4 w-4 cursor-pointer appearance-none rounded-full border-2 transition-all",
                              isSelected
                                ? "border-primary bg-primary"
                                : "border-muted bg-surface",
                            )}
                          />
                          {isSelected && (
                            <span className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-surface" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-sm",
                            isSelected
                              ? "font-semibold text-ink"
                              : "font-normal text-body",
                          )}
                        >
                          {tier.label}
                        </span>
                      </span>
                      <span className="text-sm">
                        <span
                          className={cn(
                            isSelected
                              ? "font-bold text-primary"
                              : "font-normal text-body",
                          )}
                        >
                          {formatCurrency(tier.price)}
                        </span>
                        <span className="text-muted">{tier.unit}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-5 flex gap-3">
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="flex-1"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
              <Button onClick={handleOrderNow} className="flex-1">
                Order Now
              </Button>
            </div>
          </>
        )}
      </div>
    </article>
  );
};

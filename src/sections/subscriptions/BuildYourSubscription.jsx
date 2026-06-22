import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  RefreshCw,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import {
  subscriptionFrequencies,
  subscriptionPackSizes,
  subscriptionsContent,
} from "@/data/subscriptionsPage";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/cn";
import { formatCurrency } from "@/lib/format";

const stepLabels = ["Choose Box Size", "Select Products", "Frequency"];
const subscriptionProducts = products.filter(
  (product) => product.category !== "packs",
);

export const BuildYourSubscription = () => {
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [packSizeValue, setPackSizeValue] = useState(
    subscriptionPackSizes[0].value,
  );
  const [quantities, setQuantities] = useState({});
  const [frequencyValue, setFrequencyValue] = useState(
    subscriptionFrequencies[0].value,
  );

  const selectedPack = subscriptionPackSizes.find(
    (packSize) => packSize.value === packSizeValue,
  );
  const selectedFrequency = subscriptionFrequencies.find(
    (frequency) => frequency.value === frequencyValue,
  );
  const targetCount = selectedPack.count;

  const totalSelected = useMemo(
    () => Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0),
    [quantities],
  );

  const selectedProducts = useMemo(
    () =>
      subscriptionProducts
        .map((product) => ({
          product,
          quantity: quantities[product.id] || 0,
        }))
        .filter((selection) => selection.quantity > 0),
    [quantities],
  );

  const subtotal = useMemo(
    () =>
      selectedProducts.reduce(
        (sum, selection) =>
          sum + selection.product.price * selection.quantity,
        0,
      ),
    [selectedProducts],
  );

  const isComplete = totalSelected === targetCount;
  const progress = Math.min((totalSelected / targetCount) * 100, 100);

  const handlePackSizeChange = (value) => {
    setPackSizeValue(value);
    setQuantities({});
  };

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((current) => ({
      ...current,
      [productId]: quantity,
    }));
  };

  const createCartItem = () => {
    const contentsSummary = selectedProducts
      .map(
        ({ product, quantity }) =>
          `${quantity}× ${product.name.replace(" Juices", "")}`,
      )
      .join(", ");

    return {
      id: `sub-byo-${Date.now()}`,
      name: `Custom Subscription (${selectedPack.label})`,
      price: subtotal,
      image: null,
      meta: `${selectedFrequency.label} subscription · ${contentsSummary}`,
    };
  };

  const handleAddToCart = () => {
    if (!isComplete) return;
    addItem(createCartItem());
    openCart();
  };

  const handleOrderNow = () => {
    if (!isComplete) return;
    addItem(createCartItem());
    navigate("/checkout");
  };

  const { builder } = subscriptionsContent;

  return (
    <Section
      id="build-subscription"
      className="scroll-mt-20 bg-cream"
    >
      <Container>
        <SectionHeading
          eyebrow={builder.eyebrow}
          title={builder.title}
          subtitle={builder.description}
          className="mx-auto max-w-4xl"
        />

        <div className="mx-auto mt-10 flex max-w-3xl items-start justify-between gap-2">
          {stepLabels.map((label, index) => {
            const stepNumber = index + 1;
            const isActive = currentStep === stepNumber;
            const isCompleted = currentStep > stepNumber;

            return (
              <div
                key={label}
                className="flex min-w-0 flex-1 flex-col items-center gap-2 text-center"
                aria-current={isActive ? "step" : undefined}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold",
                    isActive && "border-primary bg-primary text-surface",
                    isCompleted && "border-accent bg-accent text-ink",
                    !isActive &&
                      !isCompleted &&
                      "border-border bg-surface text-muted",
                  )}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : stepNumber}
                </span>
                <span
                  className={cn(
                    "hidden text-xs font-semibold sm:block",
                    isActive ? "text-primary" : "text-muted",
                  )}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="rounded-lg border border-border bg-surface p-5 shadow-soft md:p-8">
            {currentStep === 1 && (
              <fieldset>
                <legend className="text-2xl font-semibold text-ink">
                  Step 1 — Choose Pack Size
                </legend>
                <p className="mt-2 text-body">
                  Choose the recurring box size that fits your routine.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {subscriptionPackSizes.map((packSize) => {
                    const inputId = `subscription-size-${packSize.value}`;
                    const isSelected = packSizeValue === packSize.value;

                    return (
                      <label
                        key={packSize.value}
                        htmlFor={inputId}
                        className={cn(
                          "cursor-pointer rounded-card border p-5 transition-colors",
                          isSelected
                            ? "border-primary bg-cream-soft"
                            : "border-border hover:border-primary",
                        )}
                      >
                        <input
                          id={inputId}
                          type="radio"
                          name="subscription-size"
                          value={packSize.value}
                          checked={isSelected}
                          onChange={() => handlePackSizeChange(packSize.value)}
                          className="sr-only"
                        />
                        <span className="block text-lg font-semibold text-ink">
                          {packSize.label}
                        </span>
                        <span className="mt-2 block text-sm text-muted">
                          From {formatCurrency(packSize.startingPrice)}
                        </span>
                      </label>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-end">
                  <Button onClick={() => setCurrentStep(2)}>
                    Select Products
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </fieldset>
            )}

            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-semibold text-ink">
                  Step 2 — Select Products
                </h3>
                <p className="mt-2 text-body">
                  Fill every spot in your {selectedPack.label.toLowerCase()}{" "}
                  subscription.
                </p>

                <div className="mt-6" aria-live="polite">
                  <div className="mb-2 flex items-center justify-between gap-4 text-sm font-semibold">
                    <span className="text-ink">
                      {totalSelected} of {targetCount} bottles selected
                    </span>
                    <span className={isComplete ? "text-success" : "text-muted"}>
                      {isComplete
                        ? "Box complete"
                        : `${targetCount - totalSelected} remaining`}
                    </span>
                  </div>
                  <div
                    className="h-2 overflow-hidden rounded-pill bg-cream"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax={targetCount}
                    aria-valuenow={totalSelected}
                    aria-label="Subscription box selection progress"
                  >
                    <div
                      className="h-full rounded-pill bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-6 divide-y divide-border rounded-card border border-border">
                  {subscriptionProducts.map((product) => {
                    const quantity = quantities[product.id] || 0;
                    const isAvailable = product.price !== null;
                    const maxQuantity = Math.max(
                      0,
                      targetCount - totalSelected + quantity,
                    );

                    return (
                      <div
                        key={product.id}
                        className={cn(
                          "flex flex-col gap-4 p-4 sm:flex-row sm:items-center",
                          !isAvailable && "bg-surface-alt",
                        )}
                      >
                        <div className="flex min-w-0 flex-1 items-center gap-4">
                          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md">
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <MediaPlaceholder iconSize={26} />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-ink">
                              {product.name}
                            </p>
                            <p className="mt-1 text-sm text-muted">
                              {product.priceLabel}
                            </p>
                          </div>
                        </div>

                        {isAvailable ? (
                          <QuantitySelector
                            value={quantity}
                            onChange={(nextQuantity) =>
                              handleQuantityChange(product.id, nextQuantity)
                            }
                            min={0}
                            max={maxQuantity}
                            aria-label={`${product.name} subscription quantity`}
                            decrementLabel={`Remove one ${product.name}`}
                            incrementLabel={`Add one ${product.name}`}
                            className="self-end sm:self-auto"
                          />
                        ) : (
                          <Badge variant="muted">
                            <Sparkles className="h-3 w-3" />
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col-reverse justify-between gap-3 sm:flex-row">
                  <Button onClick={() => setCurrentStep(1)} variant="ghost">
                    <ArrowLeft className="h-5 w-5" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(3)}
                    disabled={!isComplete}
                  >
                    Choose Frequency
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <fieldset>
                <legend className="text-2xl font-semibold text-ink">
                  Step 3 — Choose Frequency
                </legend>
                <p className="mt-2 text-body">
                  Choose how often your custom box should repeat.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {subscriptionFrequencies.map((frequency) => {
                    const inputId = `subscription-frequency-${frequency.value}`;
                    const isSelected = frequencyValue === frequency.value;

                    return (
                      <label
                        key={frequency.value}
                        htmlFor={inputId}
                        className={cn(
                          "cursor-pointer rounded-card border p-4 text-center transition-colors",
                          isSelected
                            ? "border-primary bg-cream-soft"
                            : "border-border hover:border-primary",
                        )}
                      >
                        <input
                          id={inputId}
                          type="radio"
                          name="subscription-frequency"
                          value={frequency.value}
                          checked={isSelected}
                          onChange={() => setFrequencyValue(frequency.value)}
                          className="sr-only"
                        />
                        <span className="font-semibold text-ink">
                          {frequency.label}
                        </span>
                      </label>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <Button onClick={() => setCurrentStep(2)} variant="ghost">
                    <ArrowLeft className="h-5 w-5" />
                    Back to Products
                  </Button>
                </div>
              </fieldset>
            )}
          </div>

          <aside
            className="rounded-lg border border-border bg-surface p-6 shadow-soft lg:sticky lg:top-24"
            aria-label="Custom subscription summary"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-card bg-cream">
                <RefreshCw className="h-6 w-6 text-primary" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Live Summary
                </p>
                <h3 className="text-xl font-semibold text-ink">
                  Your Subscription
                </h3>
              </div>
            </div>

            <dl className="mt-6 space-y-4 border-y border-border py-5">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-sm text-muted">Box size</dt>
                <dd className="text-right text-sm font-semibold text-ink">
                  {selectedPack.label}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-sm text-muted">Frequency</dt>
                <dd className="text-right text-sm font-semibold text-ink">
                  {selectedFrequency.label}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-sm text-muted">Bottles</dt>
                <dd className="text-right text-sm font-semibold text-ink">
                  {totalSelected} / {targetCount}
                </dd>
              </div>
            </dl>

            <div className="mt-5">
              <p className="text-sm font-semibold text-ink">Contents</p>
              {selectedProducts.length > 0 ? (
                <ul className="mt-3 space-y-2">
                  {selectedProducts.map(({ product, quantity }) => (
                    <li
                      key={product.id}
                      className="flex justify-between gap-3 text-sm text-body"
                    >
                      <span>{product.name}</span>
                      <span className="font-semibold text-ink">
                        × {quantity}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-muted">
                  Select products to build your recurring box.
                </p>
              )}
            </div>

            <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-5">
              <span className="font-semibold text-ink">Subtotal</span>
              <span className="text-2xl font-bold text-primary">
                {formatCurrency(subtotal)}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <Button
                onClick={handleAddToCart}
                disabled={!isComplete}
                className="w-full"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                onClick={handleOrderNow}
                disabled={!isComplete}
                variant="outline"
                className="w-full"
              >
                Order Now
              </Button>
              {!isComplete && (
                <p className="text-center text-xs text-muted">
                  Select exactly {targetCount} bottles to continue.
                </p>
              )}
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
};

import { Trash2 } from "lucide-react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { formatCurrency } from "@/lib/format";

export const OrderSummary = ({
  items,
  subtotal,
  deliveryFee,
  updateQty,
  removeItem,
}) => {
  const estimatedTotal = subtotal + deliveryFee;

  return (
    <aside
      className="rounded-lg border border-border bg-surface p-5 shadow-card lg:sticky lg:top-24 md:p-7"
      aria-labelledby="order-summary-title"
    >
      <h2 id="order-summary-title" className="text-2xl font-semibold text-ink">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-card border border-border bg-surface-alt p-4"
          >
            <div className="flex gap-4">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <MediaPlaceholder iconSize={26} />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-snug text-ink">
                      {item.name}
                    </h3>
                    {item.meta && (
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {item.meta}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="shrink-0 rounded-md p-1.5 text-danger transition-colors hover:bg-cream"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <QuantitySelector
                    value={item.qty}
                    onChange={(quantity) => updateQty(item.id, quantity)}
                    decrementLabel={`Decrease ${item.name} quantity`}
                    incrementLabel={`Increase ${item.name} quantity`}
                    aria-label={`${item.name} quantity`}
                    className="bg-surface"
                  />
                  <p className="font-bold text-primary">
                    {formatCurrency(item.price * item.qty)}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <dl className="mt-6 space-y-3 border-t border-border pt-5">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-body">Subtotal</dt>
          <dd className="font-semibold text-ink">
            {formatCurrency(subtotal)}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-body">Delivery fee (placeholder)</dt>
          <dd className="font-semibold text-ink">
            {formatCurrency(deliveryFee)}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
          <dt className="text-lg font-semibold text-ink">Estimated Total</dt>
          <dd className="text-xl font-bold text-primary">
            {formatCurrency(estimatedTotal)}
          </dd>
        </div>
      </dl>
    </aside>
  );
};

import { useNavigate } from "react-router-dom";
import { ShoppingCart, Package } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/cn";

export const BundleCard = ({ bundle, className, onBuild }) => {
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();

  const isAvailable = bundle.price !== null && !bundle.isBuilder;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!isAvailable) return;
    addItem(bundle);
    openCart();
  };

  const handleOrderNow = (e) => {
    e.stopPropagation();
    if (bundle.isBuilder) {
      onBuild?.();
      return;
    }
    if (!isAvailable) return;
    addItem(bundle);
    navigate("/checkout");
  };

  return (
    <div
      className={cn(
        "group relative bg-surface rounded-card border border-border overflow-hidden",
        "hover:shadow-hover transition-all duration-300",
        className,
      )}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-cream relative">
        {bundle.image ? (
          <img
            src={bundle.image}
            alt={bundle.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <MediaPlaceholder iconSize={64} />
        )}
        {bundle.isBuilder && (
          <div className="absolute top-3 right-3">
            <Badge variant="accent">
              <Package className="w-3 h-3" />
              Customize
            </Badge>
          </div>
        )}
        {bundle.badges?.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {bundle.badges.map((badge) => (
              <Badge key={badge} variant="primary">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-semibold text-ink line-clamp-2">
            {bundle.name}
          </h3>
          {bundle.description && (
            <p className="text-sm leading-relaxed text-body line-clamp-3">
              {bundle.description}
            </p>
          )}
          <div className="flex flex-wrap gap-2 text-xs text-muted">
            {bundle.packSize && (
              <span className="font-medium">{bundle.packSize}</span>
            )}
            {bundle.bestFor && <span>• {bundle.bestFor}</span>}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            <p className="text-xl font-bold text-primary">
              {bundle.priceLabel}
            </p>
          </div>
          {bundle.isBuilder ? (
            <Button size="sm" variant="secondary" onClick={handleOrderNow}>
              Build Your Pack
            </Button>
          ) : isAvailable ? (
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handleAddToCart}
                aria-label={`Add ${bundle.name} to cart`}
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="sm" onClick={handleOrderNow}>
                Order Now
              </Button>
            </div>
          ) : (
            <Badge variant="muted">Coming Soon</Badge>
          )}
        </div>
      </div>
    </div>
  );
};

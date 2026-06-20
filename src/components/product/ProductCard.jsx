import { useNavigate } from "react-router-dom";
import { ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/cn";

export const ProductCard = ({ product, className }) => {
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();

  const isAvailable = product.price !== null;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!isAvailable) return;
    addItem(product);
    openCart();
  };

  const handleOrderNow = (e) => {
    e.stopPropagation();
    if (!isAvailable) return;
    addItem(product);
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
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <MediaPlaceholder iconSize={64} />
        )}
        {/* Badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {product.badges.map((badge, idx) => (
              <Badge key={idx} variant={badge === "New" ? "accent" : "primary"}>
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
            {product.name}
          </h3>
          {product.description && (
            <p className="text-sm leading-relaxed text-body line-clamp-3">
              {product.description}
            </p>
          )}
          {product.size && (
            <p className="text-xs text-muted font-medium">{product.size}</p>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            <p className="text-xl font-bold text-primary">
              {product.priceLabel}
            </p>
          </div>
          {isAvailable ? (
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handleAddToCart}
                aria-label="Add to cart"
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="sm" onClick={handleOrderNow}>
                Order
              </Button>
            </div>
          ) : (
            <Badge variant="muted">
              <Sparkles className="w-3 h-3" />
              Coming Soon
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { useCart } from "@/hooks/useCart";
import { useScrollLock } from "@/hooks/useScrollLock";
import { formatCurrency } from "@/lib/format";

export const CartDrawer = () => {
  const navigate = useNavigate();
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal } =
    useCart();

  useScrollLock(isOpen);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) closeCart();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeCart]);

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/50 z-40"
            onClick={closeCart}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[90vw] max-w-md bg-surface z-50 flex flex-col shadow-hover"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-ink">Your Cart</h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-cream rounded-md transition-colors"
                aria-label="Close cart"
              >
                <X className="w-6 h-6 text-ink" />
              </button>
            </div>

            {/* Content */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <ShoppingBag className="w-16 h-16 text-muted mb-4" />
                <p className="text-lg font-semibold text-ink mb-2">
                  Your cart is empty
                </p>
                <p className="text-sm text-body mb-6">
                  Add some delicious cold-pressed juices to get started!
                </p>
                <Button onClick={closeCart}>Continue Shopping</Button>
              </div>
            ) : (
              <>
                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-surface-alt rounded-md border border-border"
                    >
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <MediaPlaceholder iconSize={32} />
                        )}
                      </div>

                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-ink line-clamp-1">
                              {item.name}
                            </h3>
                            {item.meta && (
                              <p className="text-xs text-muted">{item.meta}</p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 hover:bg-cream rounded transition-colors flex-shrink-0"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4 text-danger" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <QuantitySelector
                            value={item.qty}
                            onChange={(qty) => updateQty(item.id, qty)}
                          />
                          <p className="text-sm font-bold text-primary">
                            {formatCurrency(item.price * item.qty)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-between text-lg">
                    <span className="font-semibold text-ink">Subtotal</span>
                    <span className="font-bold text-primary">
                      {formatCurrency(subtotal)}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Button onClick={handleCheckout} className="w-full">
                      Checkout
                    </Button>
                    <Button
                      onClick={closeCart}
                      variant="outline"
                      className="w-full"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

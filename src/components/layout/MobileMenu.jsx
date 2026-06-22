import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollLock } from "@/hooks/useScrollLock";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";

export const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useScrollLock(isOpen);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
            className="fixed inset-0 bg-ink/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 w-[85vw] max-w-sm bg-surface z-50 lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-display text-xl font-bold text-primary">
                PurePressa
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-2 hover:bg-cream rounded-md transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-ink" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
              {mainNav.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-border last:border-0"
                >
                  {!item.children || item.children.length === 0 ? (
                    <Link
                      to={item.to}
                      onClick={onClose}
                      className="block py-3 text-ink font-medium hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between py-3 gap-2">
                        <Link
                          to={item.to}
                          onClick={onClose}
                          className="flex-1 text-ink font-medium hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleExpanded(index)}
                          className="p-2 hover:bg-cream rounded-md transition-colors"
                          aria-expanded={expandedIndex === index}
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 transition-transform",
                              expandedIndex === index && "rotate-180",
                            )}
                          />
                        </button>
                      </div>
                      {expandedIndex === index && (
                        <div className="pl-4 pb-3 space-y-2">
                          {item.children.map((child, childIdx) => (
                            <Link
                              key={childIdx}
                              to={child.to}
                              onClick={onClose}
                              className="block py-2 text-sm text-body hover:text-ink transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

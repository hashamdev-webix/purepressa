import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export const NavDropdown = ({ label, to, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!children || children.length === 0) {
    return (
      <Link
        to={to}
        className="text-ink hover:text-primary transition-colors font-medium"
      >
        {label}
      </Link>
    );
  }

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1 text-ink hover:text-primary transition-colors font-medium",
          isOpen && "text-primary",
        )}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 min-w-[200px] py-2 bg-surface border border-border rounded-md shadow-card z-50">
          {children.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="block px-4 py-2 text-sm text-body hover:bg-cream hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

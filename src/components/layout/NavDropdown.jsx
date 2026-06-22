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

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
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
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center gap-1">
        <Link
          to={to}
          className={cn(
            "text-ink hover:text-primary transition-colors font-medium",
            isOpen && "text-primary",
          )}
        >
          {label}
        </Link>
        <button
          onClick={toggleDropdown}
          className={cn(
            "p-1 rounded hover:bg-cream transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
            isOpen && "text-primary",
          )}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={`Toggle ${label} menu`}
        >
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </button>
      </div>

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

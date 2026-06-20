import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart } from "lucide-react";
import { NavDropdown } from "./NavDropdown";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";
import { useCart } from "@/hooks/useCart";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count, toggleCart } = useCart();

  return (
    <>
      <header className="sticky top-0 z-30 bg-surface/95 backdrop-blur-sm border-b border-border">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-display text-xl md:text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
            >
              PurePressa
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {mainNav.map((item, idx) => (
                <NavDropdown
                  key={idx}
                  label={item.label}
                  to={item.to}
                  children={item.children}
                />
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleCart}
                className="relative p-2 hover:bg-cream rounded-md transition-colors"
                aria-label="Open cart"
              >
                <ShoppingCart className="w-6 h-6 text-ink" />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-ink text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 hover:bg-cream rounded-md transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-ink" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

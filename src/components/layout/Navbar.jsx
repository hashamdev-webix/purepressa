import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart } from "lucide-react";
import { NavDropdown } from "./NavDropdown";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";
import { useCart } from "@/hooks/useCart";
import { mainNav } from "@/data/navigation";
import logo from "@/assets/logo/logo-transparent.png";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count, toggleCart } = useCart();

  return (
    <>
      <header className="sticky top-0 z-30 bg-surface/95 backdrop-blur-sm border-b border-border">
        <Container>
          <div className="flex h-20 items-center justify-between md:h-24 lg:h-32">
            {/* Logo */}
            <Link
              to="/"
              aria-label="PurePressa home"
              className="relative inline-flex h-16 w-40 shrink-0 items-center overflow-hidden sm:w-48 md:h-20 md:w-56 lg:h-28 lg:w-72"
            >
              <img
                src={logo}
                alt="PurePressa"
                className="absolute inset-0 h-full w-full translate-y-1 scale-[1.55] object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
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
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
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
                type="button"
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

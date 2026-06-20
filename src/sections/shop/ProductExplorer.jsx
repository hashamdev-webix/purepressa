import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { additionalFilters, sortOptions } from "@/data/shop";
import { useScrollLock } from "@/hooks/useScrollLock";
import { cn } from "@/lib/cn";

const validCategories = new Set(categories.map((category) => category.slug));
const validTags = new Set(additionalFilters.map((filter) => filter.value));
const validSorts = new Set(sortOptions.map((option) => option.value));
const categoryNames = Object.fromEntries(
  categories.map((category) => [category.slug, category.name]),
);

const FilterControls = ({
  idPrefix,
  selectedCategory,
  selectedTags,
  onCategoryChange,
  onTagToggle,
  onClear,
  hasActiveFilters,
}) => (
  <div className="space-y-8">
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-ink">Category</h3>
        <button
          type="button"
          onClick={onClear}
          disabled={!hasActiveFilters}
          className="text-sm font-semibold text-primary hover:text-primary-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear all
        </button>
      </div>

      <fieldset className="space-y-2">
        <legend className="sr-only">Filter products by category</legend>
        {[{ slug: "all", name: "All Products" }, ...categories].map(
          (category) => {
            const inputId = `${idPrefix}-category-${category.slug}`;

            return (
              <label
                key={category.slug}
                htmlFor={inputId}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition-colors",
                  selectedCategory === category.slug
                    ? "border-primary bg-cream text-ink"
                    : "border-transparent text-body hover:border-border hover:bg-surface-alt",
                )}
              >
                <input
                  id={inputId}
                  type="radio"
                  name={`${idPrefix}-category`}
                  value={category.slug}
                  checked={selectedCategory === category.slug}
                  onChange={() => onCategoryChange(category.slug)}
                  className="h-4 w-4 accent-primary"
                />
                <span className="font-medium">{category.name}</span>
              </label>
            );
          },
        )}
      </fieldset>
    </div>

    <fieldset>
      <legend className="mb-4 text-lg font-semibold text-ink">
        Additional Filters
      </legend>
      <div className="flex flex-wrap gap-2">
        {additionalFilters.map((filter) => {
          const inputId = `${idPrefix}-tag-${filter.value}`;
          const isSelected = selectedTags.includes(filter.value);

          return (
            <label
              key={filter.value}
              htmlFor={inputId}
              className={cn(
                "cursor-pointer rounded-pill border px-3 py-2 text-sm font-medium transition-colors",
                isSelected
                  ? "border-primary bg-primary text-surface"
                  : "border-border bg-surface text-body hover:border-primary hover:text-primary",
              )}
            >
              <input
                id={inputId}
                type="checkbox"
                checked={isSelected}
                onChange={() => onTagToggle(filter.value)}
                className="sr-only"
              />
              {filter.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  </div>
);

export const ProductExplorer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const filterPanelRef = useRef(null);
  const closeButtonRef = useRef(null);

  useScrollLock(mobileFiltersOpen);

  const categoryParam = searchParams.get("category");
  const selectedCategory = validCategories.has(categoryParam)
    ? categoryParam
    : "all";
  const selectedTags = (searchParams.get("tags") || "")
    .split(",")
    .filter((tag) => validTags.has(tag));
  const searchParam = searchParams.get("search") || "";
  const [searchState, setSearchState] = useState({
    param: searchParam,
    value: searchParam,
  });
  const searchTerm =
    searchState.param === searchParam ? searchState.value : searchParam;

  if (searchState.param !== searchParam) {
    setSearchState({ param: searchParam, value: searchParam });
  }
  const requestedSort = searchParams.get("sort");
  const selectedSort =
    searchParams.get("filter") === "best-sellers"
      ? "best-sellers"
      : validSorts.has(requestedSort)
        ? requestedSort
        : "featured";

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedTags.length > 0 ||
    searchTerm.length > 0 ||
    selectedSort !== "featured";

  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) +
    selectedTags.length +
    (searchTerm ? 1 : 0);

  const updateParams = (mutate, options) => {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);
      mutate(next);
      return next;
    }, options);
  };

  const handleCategoryChange = (category) => {
    updateParams((next) => {
      if (category === "all") next.delete("category");
      else next.set("category", category);
    });
  };

  const handleTagToggle = (tag) => {
    const nextTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];
    const orderedTags = additionalFilters
      .map((filter) => filter.value)
      .filter((value) => nextTags.includes(value));

    updateParams((next) => {
      if (orderedTags.length) next.set("tags", orderedTags.join(","));
      else next.delete("tags");
    });
  };

  const handleSearchChange = (event) => {
    setSearchState({ param: searchParam, value: event.target.value });
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    updateParams((next) => {
      if (value === "best-sellers") {
        next.set("filter", "best-sellers");
        next.delete("sort");
      } else {
        next.delete("filter");
        if (value === "featured") next.delete("sort");
        else next.set("sort", value);
      }
    });
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  useEffect(() => {
    if (searchTerm === searchParam) return undefined;

    const timeout = window.setTimeout(() => {
      setSearchParams(
        (current) => {
          const next = new URLSearchParams(current);
          if (searchTerm) next.set("search", searchTerm);
          else next.delete("search");
          return next;
        },
        { replace: true },
      );
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [searchParam, searchTerm, setSearchParams]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const matchingProducts = products.filter((product) => {
      if (
        selectedCategory !== "all" &&
        product.category !== selectedCategory
      ) {
        return false;
      }

      if (
        selectedTags.length > 0 &&
        !selectedTags.some((tag) => product.tags.includes(tag))
      ) {
        return false;
      }

      if (normalizedSearch) {
        const searchText = [
          product.name,
          product.description,
          categoryNames[product.category],
          product.salesFormat,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        if (!searchText.includes(normalizedSearch)) return false;
      }

      return true;
    });

    return matchingProducts.sort((a, b) => {
      if (selectedSort === "best-sellers") {
        const aIsBestSeller = a.badges.includes("Best Seller");
        const bIsBestSeller = b.badges.includes("Best Seller");
        return Number(bIsBestSeller) - Number(aIsBestSeller);
      }

      if (selectedSort === "price-low" || selectedSort === "price-high") {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return selectedSort === "price-low"
          ? a.price - b.price
          : b.price - a.price;
      }

      return Number(b.featured) - Number(a.featured);
    });
  }, [searchTerm, selectedCategory, selectedSort, selectedTags]);

  useEffect(() => {
    if (!mobileFiltersOpen) return undefined;

    const previouslyFocused = document.activeElement;
    const panel = filterPanelRef.current;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileFiltersOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusable = panel.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [mobileFiltersOpen]);

  return (
    <section id="products" className="scroll-mt-20 pb-16 md:pb-24">
      <Container>
        <div className="mb-6 flex items-center justify-between gap-4 lg:hidden">
          <Button
            type="button"
            variant="outline"
            onClick={() => setMobileFiltersOpen(true)}
            className="w-full sm:w-auto"
          >
            <SlidersHorizontal className="h-5 w-5" />
            Filters
            {activeFilterCount > 0 && (
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-1.5 text-xs text-surface">
                {activeFilterCount}
              </span>
            )}
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="hidden lg:block" aria-label="Product filters">
            <div className="sticky top-24 rounded-card border border-border bg-surface p-5">
              <FilterControls
                idPrefix="desktop"
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
                onCategoryChange={handleCategoryChange}
                onTagToggle={handleTagToggle}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
              <label className="relative block">
                <span className="sr-only">Search products</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search juices, ingredients, packs, or wellness goals"
                  className="w-full rounded-md border border-border bg-surface py-3 pl-12 pr-4 text-ink placeholder:text-muted focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>

              <label>
                <span className="sr-only">Sort products</span>
                <select
                  value={selectedSort}
                  onChange={handleSortChange}
                  className="w-full rounded-md border border-border bg-surface px-4 py-3 text-ink focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <p
                className="text-sm font-medium text-muted md:col-span-2"
                aria-live="polite"
              >
                Showing {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className="h-full"
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-card border border-border bg-cream-soft px-6 py-16 text-center">
                <h3 className="text-2xl font-semibold text-ink">
                  No products match your filters
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-body">
                  Try a different search or clear your selected categories and
                  formats.
                </p>
                <Button onClick={clearFilters} className="mt-6">
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-ink/50 lg:hidden"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
            />
            <motion.aside
              ref={filterPanelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-filter-title"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-[88vw] max-w-sm overflow-y-auto bg-surface shadow-hover lg:hidden"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface p-4">
                <h2
                  id="mobile-filter-title"
                  className="text-xl font-semibold text-ink"
                >
                  Filters
                </h2>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="rounded-md p-2 transition-colors hover:bg-cream"
                  aria-label="Close filters"
                >
                  <X className="h-6 w-6 text-ink" />
                </button>
              </div>

              <div className="p-5">
                <FilterControls
                  idPrefix="mobile"
                  selectedCategory={selectedCategory}
                  selectedTags={selectedTags}
                  onCategoryChange={handleCategoryChange}
                  onTagToggle={handleTagToggle}
                  onClear={clearFilters}
                  hasActiveFilters={hasActiveFilters}
                />
                <Button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="mt-8 w-full"
                >
                  View {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

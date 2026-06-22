import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { BundleCard } from "@/components/product/BundleCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { bundles } from "@/data/bundles";
import {
  bundleFilterOptions,
  bundleSortOptions,
} from "@/data/bundlesPage";
import { useScrollLock } from "@/hooks/useScrollLock";
import { cn } from "@/lib/cn";

const validFilters = new Set(
  bundleFilterOptions
    .filter((option) => option.value !== "all")
    .map((option) => option.value),
);
const validSorts = new Set(bundleSortOptions.map((option) => option.value));

const BundleFilterControls = ({
  idPrefix,
  selectedFilter,
  onFilterChange,
  onClear,
  hasActiveFilters,
}) => (
  <div>
    <div className="mb-4 flex items-center justify-between gap-4">
      <h3 className="text-lg font-semibold text-ink">Filter By</h3>
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
      <legend className="sr-only">Filter juice bundles</legend>
      {bundleFilterOptions.map((option) => {
        const inputId = `${idPrefix}-filter-${option.value}`;

        return (
          <label
            key={option.value}
            htmlFor={inputId}
            className={cn(
              "flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition-colors",
              selectedFilter === option.value
                ? "border-primary bg-cream text-ink"
                : "border-transparent text-body hover:border-border hover:bg-surface-alt",
            )}
          >
            <input
              id={inputId}
              type="radio"
              name={`${idPrefix}-bundle-filter`}
              value={option.value}
              checked={selectedFilter === option.value}
              onChange={() => onFilterChange(option.value)}
              className="h-4 w-4 accent-primary"
            />
            <span className="font-medium">{option.label}</span>
          </label>
        );
      })}
    </fieldset>
  </div>
);

export const BundleExplorer = ({ onBuildPack }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const filterPanelRef = useRef(null);
  const closeButtonRef = useRef(null);

  useScrollLock(mobileFiltersOpen);

  const filterParam = searchParams.get("filter");
  const selectedFilter = validFilters.has(filterParam) ? filterParam : "all";
  const requestedSort = searchParams.get("sort");
  const selectedSort = validSorts.has(requestedSort)
    ? requestedSort
    : "featured";
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

  const hasActiveFilters =
    selectedFilter !== "all" ||
    searchTerm.length > 0 ||
    selectedSort !== "featured";
  const activeFilterCount =
    (selectedFilter !== "all" ? 1 : 0) + (searchTerm ? 1 : 0);

  const updateParams = (mutate, options) => {
    setSearchParams((current) => {
      const next = new URLSearchParams(current);
      mutate(next);
      return next;
    }, options);
  };

  const handleFilterChange = (filter) => {
    updateParams((next) => {
      if (filter === "all") next.delete("filter");
      else next.set("filter", filter);
    });
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    updateParams((next) => {
      if (value === "featured") next.delete("sort");
      else next.set("sort", value);
    });
  };

  const handleSearchChange = (event) => {
    setSearchState({ param: searchParam, value: event.target.value });
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

  const filteredBundles = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const matchingBundles = bundles.filter((bundle) => {
      if (
        selectedFilter !== "all" &&
        !bundle.filters.includes(selectedFilter)
      ) {
        return false;
      }

      if (normalizedSearch) {
        const searchText = [
          bundle.name,
          bundle.description,
          bundle.includes,
          bundle.bestFor,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        if (!searchText.includes(normalizedSearch)) return false;
      }

      return true;
    });

    return matchingBundles.sort((a, b) => {
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
  }, [searchTerm, selectedFilter, selectedSort]);

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
    <section id="bundle-grid" className="scroll-mt-20 pb-16 md:pb-24">
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
          <aside className="hidden lg:block" aria-label="Bundle filters">
            <div className="sticky top-24 rounded-card border border-border bg-surface p-5">
              <BundleFilterControls
                idPrefix="desktop"
                selectedFilter={selectedFilter}
                onFilterChange={handleFilterChange}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
              <label className="relative block">
                <span className="sr-only">Search bundles</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search bundles, packs, routines, ingredients, or wellness goals"
                  className="w-full rounded-md border border-border bg-surface py-3 pl-12 pr-4 text-ink placeholder:text-muted focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>

              <label>
                <span className="sr-only">Sort bundles</span>
                <select
                  value={selectedSort}
                  onChange={handleSortChange}
                  className="w-full rounded-md border border-border bg-surface px-4 py-3 text-ink focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {bundleSortOptions.map((option) => (
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
                Showing {filteredBundles.length}{" "}
                {filteredBundles.length === 1 ? "bundle" : "bundles"}
              </p>
            </div>

            {filteredBundles.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredBundles.map((bundle) => (
                  <BundleCard
                    key={bundle.id}
                    bundle={bundle}
                    onBuild={onBuildPack}
                    className="h-full"
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-card border border-border bg-cream-soft px-6 py-16 text-center">
                <h3 className="text-2xl font-semibold text-ink">
                  No bundles match your filters
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-body">
                  Try a different search or clear your selected bundle type.
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
              aria-labelledby="mobile-bundle-filter-title"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-[88vw] max-w-sm overflow-y-auto bg-surface shadow-hover lg:hidden"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface p-4">
                <h2
                  id="mobile-bundle-filter-title"
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
                <BundleFilterControls
                  idPrefix="mobile"
                  selectedFilter={selectedFilter}
                  onFilterChange={handleFilterChange}
                  onClear={clearFilters}
                  hasActiveFilters={hasActiveFilters}
                />
                <Button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="mt-8 w-full"
                >
                  View {filteredBundles.length}{" "}
                  {filteredBundles.length === 1 ? "bundle" : "bundles"}
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

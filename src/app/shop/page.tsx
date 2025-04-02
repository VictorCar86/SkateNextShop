import { Suspense } from "react";
import { Metadata } from "next/types";
import { notFound } from "next/navigation";
import { ShopFilters } from "@/components/shop-page/shop-filters";
import { ShopHeader } from "@/components/shop-page/shop-header";
import { ProductGrid } from "@/components/shop-page/product-grid";
import { CustomPagination } from "@/components/CustomPagination";
import { FilterOptions } from "@/lib/types";
import { CURRENT_HOST } from "@/lib/constants";
import { ShopFiltersSkeleton } from "@/components/shop-page/shop-filters-skeleton";
import { ProductGridSkeleton } from "@/components/shop-page/product-grid-skeleton";

export const metadata: Metadata = {
  title: "SkateNextShop - Shop",
  description: "Shop for products",
};

type searchParamsProps = Promise<Partial<Omit<FilterOptions, "limit" | "types">>>;

// Separate component for filter options fetching
async function FilterOptionsLoader() {
  const filterOptionsRes = await fetch(`${CURRENT_HOST}/api/products`, {
    method: "OPTIONS",
    cache: "no-store",
  });

  if (!filterOptionsRes.ok) {
    return notFound();
  }

  const {
    categories: categoriesOptions,
    brands: brandsOptions,
    priceRange: priceRangeOptions,
  } = await filterOptionsRes.json();

  return (
    <ShopFilters
      categories={categoriesOptions}
      brands={brandsOptions}
      priceRange={priceRangeOptions}
    />
  );
}

// Separate component for products fetching
async function ProductsLoader({ searchParams }: { searchParams: searchParamsProps }) {
  const { categories, brands, minPrice, maxPrice, search, sort, page } =
    await searchParams;

  // Parse search params
  const currentPage = Number(page) || 1;
  const limit = 12;

  // Construct query string
  const queryParams = new URLSearchParams({
    ...(categories && { categories: categories.toString() }),
    ...(brands && { brands: brands.toString() }),
    ...(minPrice && { minPrice: minPrice.toString() }),
    ...(maxPrice && { maxPrice: maxPrice.toString() }),
    ...(search && { search: search.toString() }),
    ...(sort && { sort: sort.toString() }),
    page: currentPage.toString(),
    limit: limit.toString(),
  });

  // Get filtered products
  const productsRes = await fetch(`${CURRENT_HOST}/api/products?${queryParams}`);

  if (!productsRes.ok) {
    return notFound();
  }

  const { products, total } = await productsRes.json();
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex flex-col gap-6">
      {totalPages > 1 && (
        <Suspense>
          <CustomPagination currentPage={currentPage} totalPages={totalPages} />
        </Suspense>
      )}
      <ProductGrid products={products} />
      {totalPages > 1 && (
        <Suspense>
          <CustomPagination currentPage={currentPage} totalPages={totalPages} />
        </Suspense>
      )}
    </div>
  );
}

export default function ShopPage({ searchParams }: { searchParams: searchParamsProps }) {
  return (
    <div className="pb-16 pt-8 px-8">
      <Suspense>
        <ShopHeader />
      </Suspense>
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="md:w-[240px] md:flex-none">
          <Suspense fallback={<ShopFiltersSkeleton />}>
            <FilterOptionsLoader />
          </Suspense>
        </aside>
        <main className="flex-1">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductsLoader searchParams={searchParams} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

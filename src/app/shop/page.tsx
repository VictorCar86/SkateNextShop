import { Suspense } from "react";
import { Metadata } from "next/types";
import { ShopFilters } from "@/components/shop-filters";
import { ShopHeader } from "@/components/shop-header";
import { ProductGrid } from "@/components/product-grid";
import { getFilterOptions, getFilteredProducts } from "@/lib/actions";
import { CustomPagination } from "@/components/CustomPagination";

export const metadata: Metadata = {
  title: "SkateNextShop - Shop",
  description: "Shop for products",
};

interface ShopPageProps {
  searchParams: {
    categories?: string;
    brands?: string;
    minPrice?: string;
    maxPrice?: string;
    search?: string;
    sort?: string;
    page?: string;
  };
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  // Get filter options
  const { categories, brands, priceRange } = await getFilterOptions();

  // Await search params *required*
  const {
    categories: categoriesParams,
    brands: brandsParams,
    minPrice: minPriceParams,
    maxPrice: maxPriceParams,
    search: searchParam,
    sort: sortParams,
    page: pageParams,
  } = await searchParams;

  // Parse search params
  const currentPage = Number(pageParams) || 1;
  const limit = 12; // Products per page

  const filterOptions = {
    categories: categoriesParams?.split(","),
    brands: brandsParams?.split(","),
    priceRange: [
      Number(minPriceParams) || priceRange.min,
      Number(maxPriceParams) || priceRange.max,
    ] as [number, number],
    search: searchParam,
    sort: sortParams,
    page: currentPage,
    limit,
  };

  // Get filtered products
  const { products, total } = await getFilteredProducts(filterOptions);
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pb-16 pt-8 px-8">
      <Suspense fallback={<div>Loading...</div>}>
        <ShopHeader />
      </Suspense>
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="md:w-[240px] md:flex-none">
          <ShopFilters categories={categories} brands={brands} priceRange={priceRange} />
        </aside>
        <main className="flex-1">
          <Suspense fallback={<div>Loading products...</div>}>
            <div className="flex flex-col gap-6">
              {totalPages > 1 && (
                <CustomPagination currentPage={currentPage} totalPages={totalPages} />
              )}
              <ProductGrid products={products} />
              {totalPages > 1 && (
                <CustomPagination currentPage={currentPage} totalPages={totalPages} />
              )}
            </div>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

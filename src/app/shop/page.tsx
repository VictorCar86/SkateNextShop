import { Suspense } from "react";
import { Metadata } from "next/types";
import { notFound } from "next/navigation";
import { ShopFilters } from "@/components/shop-filters";
import { ShopHeader } from "@/components/shop-header";
import { ProductGrid } from "@/components/product-grid";
import { CustomPagination } from "@/components/CustomPagination";
import { FilterOptions } from "@/lib/types";
import { CURRENT_HOST } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SkateNextShop - Shop",
  description: "Shop for products",
};

type searchParamsProps = Promise<Partial<Omit<FilterOptions, "limit" | "types">>>;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: searchParamsProps;
}) {
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
    <div className="pb-16 pt-8 px-8">
      <Suspense fallback={<div>Loading...</div>}>
        <ShopHeader />
      </Suspense>
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="md:w-[240px] md:flex-none">
          <ShopFilters
            categories={categoriesOptions}
            brands={brandsOptions}
            priceRange={priceRangeOptions}
          />
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

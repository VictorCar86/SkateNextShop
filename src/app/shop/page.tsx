import { ShopFilters } from "@/components/shop-filters";
import { ShopHeader } from "@/components/shop-header";
import { ProductGrid } from "@/components/product-grid";

export default function ShopPage() {
  return (
    <div className="container pb-16 pt-8 px-8 mx-auto">
      <ShopHeader />
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="md:w-[240px] md:flex-none">
          <ShopFilters />
        </aside>
        <main className="flex-1">
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}

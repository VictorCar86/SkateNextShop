import { Suspense } from "react";
import { notFound } from "next/navigation";

import { ProductDetails } from "@/components/product-id/product-details";
import { ProductSpecs } from "@/components/product-id/product-specs";
import { RelatedProducts } from "@/components/product-id/related-products";
import { ProductReviews } from "@/components/product-id/product-reviews";
import { ProductDetailsSkeleton } from "@/components/product-id/skeletons/product-details-skeleton";
import { RelatedProductsSkeleton } from "@/components/product-id/skeletons/related-products-skeleton";
import { ProductReviewsSkeleton } from "@/components/product-id/skeletons/product-reviews-skeleton";

import { CURRENT_HOST } from "@/lib/constants";
import { Product } from "@/lib/types";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${CURRENT_HOST}/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

async function ProductContent({ productId }: { productId: string }) {
  const product = await getProduct(productId);
  const specs = product.skateboardProduct
    ? [
        { name: "Material", value: product.skateboardProduct.material || "N/A" },
        { name: "Length", value: `${product.skateboardProduct.length || "N/A"} inches` },
        { name: "Width", value: `${product.skateboardProduct.width || "N/A"} inches` },
        {
          name: "Wheelbase",
          value: `${product.skateboardProduct.wheelbase || "N/A"} inches`,
        },
        { name: "Concave", value: product.skateboardProduct.concave || "N/A" },
      ]
    : [];

  return (
    <>
      <ProductDetails product={product} />
      {specs.length > 0 && <ProductSpecs specs={specs} className="mt-10" />}
      <Suspense fallback={<RelatedProductsSkeleton className="mt-10" />}>
        <RelatedProducts currentProductId={product.id} className="mt-10" />
      </Suspense>
      <ProductReviews reviews={product.reviews} className="mt-10" />
    </>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: productId } = await params;
  return (
    <div className="py-10 px-8">
      <Suspense
        fallback={
          <>
            <ProductDetailsSkeleton />
            <RelatedProductsSkeleton className="mt-10" />
            <ProductReviewsSkeleton className="mt-10" />
          </>
        }
      >
        <ProductContent productId={productId} />
      </Suspense>
    </div>
  );
}

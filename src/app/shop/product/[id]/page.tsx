import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/product-id/product-details";
import { ProductSpecs } from "@/components/product-id/product-specs";
import { RelatedProducts } from "@/components/product-id/related-products";
import { ProductReviews } from "@/components/product-id/product-reviews";
import { CURRENT_HOST } from "@/lib/constants";
import { Product } from "@/lib/types";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${CURRENT_HOST}/api/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: productId } = await params;
  const product = await getProduct(productId);

  if (!product) {
    notFound();
  }

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
    <div className="py-10 px-8">
      <ProductDetails product={product} />
      {specs.length > 0 && <ProductSpecs specs={specs} className="mt-10" />}
      <RelatedProducts currentProductId={product.id} className="mt-10" />
      <ProductReviews reviews={product.reviews} className="mt-10" />
    </div>
  );
}

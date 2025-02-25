import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/product-details";
import { ProductSpecs } from "@/components/product-specs";
import { RelatedProducts } from "@/components/related-products";
import { ProductReviews } from "@/components/product-reviews";

// This would typically come from a database or API
const products = [
  {
    id: "1",
    name: "Pro Deck Model X",
    description:
      "Professional skateboard deck with custom artwork. Perfect for street skating and tricks.",
    price: 60.0,
    category: "Decks",
    subcategory: "Street",
    brand: "Element",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600&text=Image+2",
      "/placeholder.svg?height=600&width=600&text=Image+3",
      "/placeholder.svg?height=600&width=600&text=Image+4",
    ],
    sizes: ["7.75", "8.0", "8.25", "8.5"],
    specs: [
      { name: "Material", value: "7-ply Maple" },
      { name: "Length", value: "31.85 inches" },
      { name: "Width", value: "8.25 inches" },
      { name: "Wheelbase", value: "14.25 inches" },
      { name: "Concave", value: "Medium" },
    ],
  },
  // ... other products
];

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-10">
      <ProductDetails product={product} />
      <ProductSpecs specs={product.specs} className="mt-10" />
      <RelatedProducts currentProductId={product.id} className="mt-10" />
      <ProductReviews productId={product.id} className="mt-10" />
    </div>
  );
}

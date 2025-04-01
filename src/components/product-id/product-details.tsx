"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Product } from "@/lib/types";

export function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    product.skateboardProduct?.width?.toString() || "",
  );
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const sizes = product.skateboardProduct
    ? ["7.75", "8.0", "8.25", "8.5"]
    : product.clothingProduct
      ? ["S", "M", "L", "XL"]
      : [];

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setImageModalOpen(true);
  };

  return (
    <div className="grid gap-14 lg:grid-cols-2 lg:pl-12">
      <Carousel className="w-full max-w-[450px] justify-self-center">
        <CarouselContent>
          {product.images &&
            product.images.map((image, index) => (
              <CarouselItem key={index}>
                <div
                  className="aspect-square relative overflow-hidden rounded-lg cursor-pointer"
                  onClick={() =>
                    openImageModal(image.url || "/images/placeholder-product.webp")
                  }
                >
                  <Image
                    src={image.url || "/images/placeholder-product.webp"}
                    alt={image.alt || `${product.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold mt-2">${Number(product.price)}</p>
        </div>
        <p className="text-muted-foreground">{product.description}</p>
        <div>
          <h3 className="font-semibold mb-2">Size</h3>
          <RadioGroup
            value={selectedSize}
            onValueChange={setSelectedSize}
            className="flex gap-2"
          >
            {sizes.map((size) => (
              <div key={size}>
                <RadioGroupItem
                  value={size}
                  id={`size-${size}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`size-${size}`}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-popover cursor-pointer hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                >
                  {size}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1">Add to Cart</Button>
          <Button variant="secondary" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p>Category: {product?.category?.name || "N/N"}</p>
          <p>Brand: {product?.brand?.name || "N/N"}</p>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Product image"
                width={1200}
                height={800}
                className="object-contain max-h-[80vh]"
              />
            )}
            <DialogClose className="absolute top-2 right-2 bg-background/80 rounded-full p-2 hover:bg-background">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Heart } from "lucide-react";
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

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  brand: string;
  images: string[];
  sizes: string[];
}

export function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Carousel className="w-full">
        <CarouselContent>
          {product.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold mt-2">${product.price.toFixed(2)}</p>
        </div>
        <p className="text-muted-foreground">{product.description}</p>
        <div>
          <h3 className="font-semibold mb-2">Size</h3>
          <RadioGroup
            value={selectedSize}
            onValueChange={setSelectedSize}
            className="flex gap-2"
          >
            {product.sizes.map((size) => (
              <div key={size}>
                <RadioGroupItem
                  value={size}
                  id={`size-${size}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`size-${size}`}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
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
          <p>Category: {product.category}</p>
          <p>Subcategory: {product.subcategory}</p>
          <p>Brand: {product.brand}</p>
        </div>
      </div>
    </div>
  );
}

import {
  Product as PrismaProduct,
  Category,
  Brand,
  SkateboardProduct,
  ClothingProduct,
  AccessoryProduct,
  SkateboardType,
  ClothingType,
  AccessoryType,
} from "@prisma/client";

export interface Product extends PrismaProduct {
  images?: {
    url: string;
    alt: string | null;
  }[];
  category?: Category;
  brand?: Brand;
  skateboardProduct?: SkateboardProduct;
  clothingProduct?: ClothingProduct;
  accessoryProduct?: AccessoryProduct;
}

export type FilterOptions = {
  categories: string[];
  brands: string[];
  minPrice: number;
  maxPrice: number;
  types: SkateboardType[] | ClothingType[] | AccessoryType[];
  search: string;
  sort: "price-asc" | "price-desc" | "newest" | "best-selling" | "featured";
  page: number;
  limit: number;
};
import {
  Product as PrismaProduct,
  Category,
  Brand,
  Review,
  SkateboardProduct,
  ClothingProduct,
  AccessoryProduct,
  SkateboardType,
  ClothingType,
  AccessoryType,
  User,
} from "@prisma/client";

export interface Product extends PrismaProduct {
  images?: {
    url: string;
    alt: string | null;
  }[];
  category?: Category;
  brand?: Brand;
  reviews: (Review & { user?: User })[];
  skateboardProduct?: SkateboardProduct;
  clothingProduct?: ClothingProduct;
  accessoryProduct?: AccessoryProduct;
}

export type FilterOptions = {
  categories: Category["name"][];
  brands: Brand["name"][];
  minPrice: number;
  maxPrice: number;
  types: SkateboardType[] | ClothingType[] | AccessoryType[];
  search: string;
  sort: "price-asc" | "price-desc" | "newest" | "best-selling" | "featured";
  page: number;
  limit: number;
};
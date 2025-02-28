"use server"

import prisma from "@/lib/prisma"
import { Prisma, SkateboardType, ClothingType, AccessoryType, Product as PrismaProduct } from "@prisma/client"

export interface Product extends PrismaProduct {
  images: {
    url: string
    alt: string | null
  }[]
  category: {
    name: string
  }
  brand: {
    name: string
  }
}

export type FilterOptions = {
  categories?: string[]
  brands?: string[]
  priceRange?: [number, number]
  types?: string[]
  search?: string
  sort?: string
  page?: number
  limit?: number
}

export async function getFilteredProducts(options: FilterOptions): Promise<{ products: Product[], total: number }> {
  const {
    categories = [],
    brands = [],
    priceRange = [0, 1000],
    types = [],
    search = "",
    sort = "featured",
    page = 1,
    limit = 12
  } = options;

  const where: Prisma.ProductWhereInput = {
    AND: [
      categories.length > 0
        ? {
          category: {
            name: {
              in: categories,
            },
          },
        }
        : {},
      brands.length > 0
        ? {
          brand: {
            name: {
              in: brands,
            },
          },
        }
        : {},
      types.length > 0
        ? {
          OR: [
            {
              skateboardProduct: {
                type: {
                  in: types as SkateboardType[],
                },
              },
            },
            {
              clothingProduct: {
                type: {
                  in: types as ClothingType[],
                },
              },
            },
            {
              accessoryProduct: {
                type: {
                  in: types as AccessoryType[],
                },
              },
            },
          ],
        }
        : {},
      {
        price: {
          gte: priceRange[0],
          lte: priceRange[1],
        },
      },
      search
        ? {
          OR: [
            {
              name: {
                contains: search
              },
            },
            {
              description: {
                contains: search
              },
            },
          ],
        }
        : {},
    ],
  }

  const orderBy: Prisma.ProductOrderByWithRelationInput = {
    ...(sort === "price-asc" && { price: "asc" }),
    ...(sort === "price-desc" && { price: "desc" }),
    ...(sort === "newest" && { createdAt: "desc" }),
    ...(sort === "best-selling" && { orderItems: { _count: "desc" } }),
    ...(sort === "featured" && { createdAt: "desc" }),
  };

  const skip = (page - 1) * limit;

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy,
      include: {
        category: true,
        brand: true,
        images: true,
        skateboardProduct: true,
        clothingProduct: true,
        accessoryProduct: true,
      },
      skip,
      take: limit,
    }),
    prisma.product.count({ where })
  ]);

  return { products, total }
}

export async function getFilterOptions() {
  const [categories, brands, priceRange] = await Promise.all([
    prisma.category.findMany({
      where: {
        parent: null, // Get only top-level categories
      },
      include: {
        children: true, // Include subcategories
      },
    }),
    prisma.brand.findMany(),
    prisma.product.aggregate({
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
    }),
  ])

  return {
    categories,
    brands,
    priceRange: {
      min: Number(priceRange._min.price) || 0,
      max: Number(priceRange._max.price) || 1000,
    },
  }
}


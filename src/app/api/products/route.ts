import { NextRequest, NextResponse } from "next/server";
import { Prisma, SkateboardType, ClothingType, AccessoryType } from "@prisma/client";
import { FilterOptions } from "@/lib/types";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // Parse query parameters
  const categories: FilterOptions["categories"] = searchParams.get("categories")?.split(",") || [];
  const brands: FilterOptions["brands"] = searchParams.get("brands")?.split(",") || [];
  const minPrice: FilterOptions["minPrice"] = Number(searchParams.get("minPrice")) || 0;
  const maxPrice: FilterOptions["maxPrice"] = Number(searchParams.get("maxPrice")) || 1000;
  const types = (searchParams.get("types")?.split(",") || []) as FilterOptions["types"];
  const search: FilterOptions["search"] = searchParams.get("search") || "";
  const sort = (searchParams.get("sort") || "featured") as FilterOptions["sort"];
  const page: FilterOptions["page"] = Number(searchParams.get("page")) || 1;
  const limit: FilterOptions["limit"] = Number(searchParams.get("limit")) || 12;

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
          gte: minPrice,
          lte: maxPrice,
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
  };

  const orderBy: Prisma.ProductOrderByWithRelationInput = {
    ...(sort === "price-asc" && { price: "asc" }),
    ...(sort === "price-desc" && { price: "desc" }),
    ...(sort === "newest" && { createdAt: "desc" }),
    ...(sort === "best-selling" && { orderItems: { _count: "desc" } }),
    ...(sort === "featured" && { createdAt: "desc" }),
  };

  try {
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
      prisma.product.count({ where }),
    ]);

    return NextResponse.json({ products, total });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  try {
    const [categories, brands, priceRange] = await Promise.all([
      prisma.category.findMany({
        where: {
          parent: null,
        },
        include: {
          children: true,
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
    ]);

    return NextResponse.json({
      categories,
      brands,
      priceRange: {
        min: Number(priceRange._min.price) || 0,
        max: Number(priceRange._max.price) || 1000,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch filter options" },
      { status: 500 }
    );
  }
}
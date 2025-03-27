import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: paramsId } = await params;
    const product = await prisma.product.findUnique({
      where: { id: paramsId },
      include: {
        images: true,
        category: true,
        brand: true,
        skateboardProduct: true,
        clothingProduct: true,
        accessoryProduct: true,
      },
    });

    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    return Response.json(product);
  } catch {
    return Response.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
import { Product } from "@prisma/client"
import { faker } from "@faker-js/faker"
import puppeteer from "puppeteer"
import prisma from "@/lib/prisma"

export default async function createProductImages(products: Product[]) {
    const browser = await puppeteer.launch(
        {
            headless: true,
            // args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--window-size=1280,1024'],
        }
    )
    const page = await browser.newPage()

    for (let i = 0; i < products.length; i++) {
        const product = products[i]
        console.log(`🚀 ~ product: ${i + 1}/${products.length} ~ ${product.name}`);
        await page.goto(`https://www.bing.com/images/search?q=${product.name}`)
        await new Promise(resolve => setTimeout(resolve, 500));
        // Determine number of images based on product type
        const numImages = faker.number.int({ min: 3, max: 5 });
        const imageUrls = await page.evaluate(
            () => Array.from(document.querySelectorAll<HTMLImageElement>('img.mimg')).map(img => img.src)
        );
        for (let j = 0; j < numImages; j++) {
            const imageUrl = imageUrls[j];
            if (!imageUrl) {
                console.error(`No image found for product ${product.name} at index ${j}`);
                // await new Promise(resolve => setTimeout(resolve, 60000));
                continue;
            }
            await prisma.productImage.create({
                data: {
                    url: imageUrl,
                    alt: `${product.name} - View ${j + 1}`,
                    productId: product.id
                }
            })
        }
    }

    await browser.close()
    console.info("Products images created")
    return products
}

const products = await prisma.product.findMany()
createProductImages(products)
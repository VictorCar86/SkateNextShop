import { Product } from "@prisma/client";
import { faker } from "@faker-js/faker";
import puppeteer from "puppeteer";
import prisma from "@/lib/prisma";

export default async function createProductImages(products: Product[]) {
    const browser = await puppeteer.launch(
        {
            headless: true,
            // headless: false,
            // args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--window-size=1280,1024'],
        }
    );
    const page = await browser.newPage();
    let totalImages = 0;
    let imagesFound = 0;
    let imagesNotFound = 0;

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const progress = ((i + 1) / products.length * 100).toFixed(2);
        console.info(`🛹 ~ product: ${i + 1}/${products.length} ~ ${progress}% ~ ${product.name}`);

        await page.goto(`https://www.bing.com/images/search?q=${product.name}`);
        try {
            await page.waitForSelector("a.iusc", { timeout: 10000 });
        } catch (error) {
            console.error(`No image section url found for product ${product.name}`);
            console.error(error);
            continue;
        }
        // Determine number of images based on product type
        const numImages = faker.number.int({ min: 3, max: 5 });
        const imageSectionUrls = await page.evaluate(
            () => Array.from(document.querySelectorAll<HTMLAnchorElement>("a.iusc")).map(a => a.href)
        );
        for (let j = 0; j < numImages; j++) {
            totalImages++;
            const imageSectionUrl = imageSectionUrls[j];
            if (!imageSectionUrl) {
                console.error(`No image section url found for product ${product.name} ~ image ${j + 1} of ${numImages}`);
                imagesNotFound++;
                // await new Promise(resolve => setTimeout(resolve, 10000));
                continue;
            }
            await page.goto(imageSectionUrl);
            try {
                await page.waitForSelector("img.nofocus", { timeout: 10000 });
            } catch (error) {
                console.error(`No image found for product ${product.name} ~ image ${j + 1} of ${numImages}`);
                console.error(error);
                imagesNotFound++;
                continue;
            }
            const imageUrl = await page.evaluate(
                () => document.querySelector<HTMLImageElement>("img.nofocus")?.src
            );
            // console.info("🖼️ ~ imageUrl:", imageUrl);
            if (!imageUrl) {
                console.error(`No image url found for product ${product.name} ~ image ${j + 1} of ${numImages}`);
                imagesNotFound++;
                // await new Promise(resolve => setTimeout(resolve, 10000));
                continue;
            }
            imagesFound++;
            await prisma.productImage.create({
                data: {
                    url: imageUrl,
                    alt: `${product.name} - View ${j + 1}`,
                    productId: product.id
                }
            });
        }
    }

    await browser.close();
    console.info(`✅ ~ Products images created ~ Found: ${imagesFound}/${totalImages} ~ Not found: ${imagesNotFound}`);
    return products;
}

await prisma.productImage.deleteMany();
const products = await prisma.product.findMany();
createProductImages(products);
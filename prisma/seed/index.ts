/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Brand, Category } from '@prisma/client'
import { faker } from '@faker-js/faker'
import prisma from "@/lib/prisma"

async function main() {
    console.info('Starting to seed database...')

    // Clear existing data
    await clearDatabase()

    // Create brands
    const brands = await createBrands()
    console.info(`Created ${brands.length} brands`)

    // Create categories and subcategories
    const categories = await createCategories()
    console.info(`Created ${categories.length} categories`)

    // Create products
    const products = await createProducts(brands, categories)
    console.info(`Created ${products.length} products`)

    // // Create users
    // const users = await createUsers()
    // console.info(`Created ${users.length} users`)

    // // Create reviews
    // await createReviews(users, products)

    // // Create orders
    // await createOrders(users, products)

    console.info('Seeding completed successfully')
}

async function clearDatabase() {
    // Delete in correct order to respect foreign key constraints
    // await prisma.cartItem.deleteMany({})
    // await prisma.cart.deleteMany({})
    // await prisma.orderItem.deleteMany({})
    // await prisma.order.deleteMany({})
    // await prisma.review.deleteMany({})
    await prisma.accessoryProduct.deleteMany({})
    await prisma.clothingProduct.deleteMany({})
    await prisma.skateboardProduct.deleteMany({})
    // await prisma.productImage.deleteMany({})
    await prisma.product.deleteMany({})
    await prisma.category.deleteMany({})
    await prisma.brand.deleteMany({})
    // await prisma.user.deleteMany({})
}

async function createBrands() {
    const brandData = [
        {
            name: 'Element',
            description: 'Eco-friendly skateboard company known for quality decks and apparel',
            logo: 'https://example.com/logos/element.png',
            website: 'https://elementbrand.com'
        },
        {
            name: 'Baker',
            description: 'Skater-owned brand known for its team of professionals and distinctive logo',
            logo: 'https://example.com/logos/baker.png',
            website: 'https://bakerskateboards.com'
        },
        {
            name: 'Independent',
            description: 'Iconic skateboard truck manufacturer established in 1978',
            logo: 'https://example.com/logos/independent.png',
            website: 'https://independenttrucks.com'
        },
        {
            name: 'Spitfire',
            description: 'Premium skateboard wheel manufacturer',
            logo: 'https://example.com/logos/spitfire.png',
            website: 'https://spitfirewheels.com'
        },
        {
            name: 'Bones Bearings',
            description: 'High-performance skateboard bearings and wheels',
            logo: 'https://example.com/logos/bones.png',
            website: 'https://bonesbearings.com'
        },
        {
            name: 'Thrasher',
            description: 'Iconic skateboarding magazine and apparel brand',
            logo: 'https://example.com/logos/thrasher.png',
            website: 'https://thrashermagazine.com'
        },
        {
            name: 'Santa Cruz',
            description: 'One of the oldest skateboard brands, known for distinctive graphics',
            logo: 'https://example.com/logos/santacruz.png',
            website: 'https://santacruzskateboards.com'
        },
        {
            name: 'Vans',
            description: 'Iconic footwear and apparel company with deep skateboarding roots',
            logo: 'https://example.com/logos/vans.png',
            website: 'https://vans.com'
        },
        {
            name: 'Girl',
            description: 'Skater-owned company known for its artistic approach to skateboarding',
            logo: 'https://example.com/logos/girl.png',
            website: 'https://girlskateboards.com'
        },
        {
            name: 'Volcom',
            description: 'Action sports and lifestyle brand with skateboarding apparel',
            logo: 'https://example.com/logos/volcom.png',
            website: 'https://volcom.com'
        },
        {
            name: 'Mob',
            description: 'Skateboard brand known for its unique graphics and designs',
            logo: 'https://example.com/logos/mob.png',
            website: 'https://mobskateboards.com'
        },
        {
            name: 'Grizzly',
            description: 'Skateboard brand known for its unique graphics and designs',
            logo: 'https://example.com/logos/grizzly.png',
            website: 'https://grizzlyskateboards.com'
        },
        {
            name: 'Jessup',
            description: 'Skateboard brand known for its unique graphics and designs',
            logo: 'https://example.com/logos/jessup.png',
            website: 'https://jessupskateboards.com'
        },
        {
            name: 'Black Magic',
            description: 'Skateboard brand known for its unique graphics and designs',
            logo: 'https://example.com/logos/blackmagic.png',
            website: 'https://blackmagic.com'
        }
    ]

    const brands = []
    for (const brand of brandData) {
        const createdBrand = await prisma.brand.create({
            data: brand
        })
        brands.push(createdBrand)
    }
    return brands
}

async function createCategories() {
    // Main categories
    const mainCategories = [
        {
            name: 'Skateboards',
            description: 'Everything you need to build or ride a skateboard'
        },
        {
            name: 'Clothing',
            description: 'Skateboard apparel and footwear'
        },
        {
            name: 'Accessories',
            description: 'Additional skateboarding gear and accessories'
        }
    ]

    const categories = []

    // Create main categories
    for (const category of mainCategories) {
        const createdCategory = await prisma.category.create({
            data: category
        })
        categories.push(createdCategory)
    }

    // Create subcategories
    const skateboardsCategory = categories[0]
    const clothingCategory = categories[1]
    const accessoriesCategory = categories[2]

    // Skateboard subcategories
    const skateboardSubcategories = [
        {
            name: 'Decks',
            description: 'Skateboard decks of various shapes and sizes',
            parentId: skateboardsCategory.id
        },
        {
            name: 'Trucks',
            description: 'Skateboard trucks for all types of riding',
            parentId: skateboardsCategory.id
        },
        {
            name: 'Wheels',
            description: 'Skateboard wheels of various sizes and hardness',
            parentId: skateboardsCategory.id
        },
        {
            name: 'Bearings',
            description: 'Skateboard bearings for smooth rolling',
            parentId: skateboardsCategory.id
        },
        {
            name: 'Griptape',
            description: 'Skateboard grip tape for traction',
            parentId: skateboardsCategory.id
        },
        {
            name: 'Hardware',
            description: 'Nuts and bolts for assembling skateboards',
            parentId: skateboardsCategory.id
        },
        {
            name: 'Complete Skateboards',
            description: 'Pre-assembled complete skateboards',
            parentId: skateboardsCategory.id
        }
    ]

    // Clothing subcategories
    const clothingSubcategories = [
        {
            name: 'T-Shirts',
            description: 'Skateboarding t-shirts and tops',
            parentId: clothingCategory.id
        },
        {
            name: 'Hoodies',
            description: 'Skateboarding hoodies and sweatshirts',
            parentId: clothingCategory.id
        },
        {
            name: 'Pants',
            description: 'Skateboarding pants and jeans',
            parentId: clothingCategory.id
        },
        {
            name: 'Shorts',
            description: 'Skateboarding shorts',
            parentId: clothingCategory.id
        },
        {
            name: 'Shoes',
            description: 'Skateboarding footwear',
            parentId: clothingCategory.id
        },
        {
            name: 'Hats',
            description: 'Skateboarding hats and beanies',
            parentId: clothingCategory.id
        },
        {
            name: 'Socks',
            description: 'Skateboarding socks',
            parentId: clothingCategory.id
        }
    ]

    // Accessories subcategories
    const accessoriesSubcategories = [
        {
            name: 'Backpacks',
            description: 'Skateboarding backpacks and bags',
            parentId: accessoriesCategory.id
        },
        {
            name: 'Tools',
            description: 'Skateboard tools and maintenance equipment',
            parentId: accessoriesCategory.id
        },
        {
            name: 'Protection',
            description: 'Helmets, pads, and protective gear',
            parentId: accessoriesCategory.id
        },
        {
            name: 'Stickers',
            description: 'Skateboard brand stickers and decals',
            parentId: accessoriesCategory.id
        }
    ]

    // Create all subcategories
    const allSubcategories = [
        ...skateboardSubcategories,
        ...clothingSubcategories,
        ...accessoriesSubcategories
    ]

    for (const subcategory of allSubcategories) {
        const createdSubcategory = await prisma.category.create({
            data: subcategory
        })
        categories.push(createdSubcategory)
    }

    return categories
}

async function createProducts(brands: Brand[], categories: Category[]) {
    const products = []

    // Find category IDs
    const findCategoryByName = (name: string) => categories.find(c => c.name === name)

    const decksCategory = findCategoryByName('Decks')
    const trucksCategory = findCategoryByName('Trucks')
    const wheelsCategory = findCategoryByName('Wheels')
    const bearingsCategory = findCategoryByName('Bearings')
    const griptapeCategory = findCategoryByName('Griptape')
    const hardwareCategory = findCategoryByName('Hardware')
    const completeCategory = findCategoryByName('Complete Skateboards')

    const tshirtsCategory = findCategoryByName('T-Shirts')
    const hoodiesCategory = findCategoryByName('Hoodies')
    const pantsCategory = findCategoryByName('Pants')
    const shortsCategory = findCategoryByName('Shorts')
    const shoesCategory = findCategoryByName('Shoes')
    const hatsCategory = findCategoryByName('Hats')
    const socksCategory = findCategoryByName('Socks')

    const backpacksCategory = findCategoryByName('Backpacks')
    const toolsCategory = findCategoryByName('Tools')
    const protectionCategory = findCategoryByName('Protection')
    const stickersCategory = findCategoryByName('Stickers')

    // Create Deck Products
    const deckBrands = brands.filter(b => ['Element', 'Baker', 'Santa Cruz', 'Girl'].includes(b.name))
    for (let i = 0; i < 15; i++) {
        const brand = faker.helpers.arrayElement(deckBrands)
        const proName = faker.person.firstName() + ' ' + faker.person.lastName()
        const width = faker.helpers.arrayElement(['7.75', '8.0', '8.25', '8.5', '8.75'])
        const graphicTheme = faker.helpers.arrayElement(['Pro Model', 'Animal', 'Logo', 'Abstract', 'Artistic'])

        const name = `${brand.name} ${proName} ${width}" Pro Deck - ${graphicTheme} Series`
        const product = await prisma.product.create({
            data: {
                name,
                description: `Professional model deck from ${brand.name} featuring custom ${graphicTheme.toLowerCase()} graphics. Width: ${width}", premium 7-ply maple construction with medium concave.`,
                price: faker.number.float({ min: 49.99, max: 69.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 5, max: 30 }),
                brandId: brand.id,
                categoryId: decksCategory?.id!,
            }
        });

        await prisma.skateboardProduct.create({
            data: {
                productId: product.id,
                type: 'DECK',
                width: width,
                length: faker.helpers.arrayElement(['31.5', '32', '32.5', '33']),
                wheelbase: faker.helpers.arrayElement(['14', '14.25', '14.5', '14.75']),
                material: '7-ply Maple',
                concave: faker.helpers.arrayElement(['Medium', 'Steep', 'Mellow']),
                mountingHoles: 'Standard 8-hole pattern'
            }
        })

        products.push(product)
    }

    // Create Truck Products
    const truckBrands = brands.filter(b => ['Independent', 'Element', 'Santa Cruz'].includes(b.name))
    for (let i = 0; i < 10; i++) {
        const brand = faker.helpers.arrayElement(truckBrands)
        const size = faker.helpers.arrayElement(['129mm', '139mm', '149mm', '159mm'])
        const type = faker.helpers.arrayElement(['Standard', 'Hollow', 'Titanium', 'Low'])

        const name = `${brand.name} ${type} Trucks - ${size}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${type} skateboard trucks. Size: ${size}, perfect for technical street skating or transition. Durable construction with responsive turning.`,
                price: faker.number.float({ min: 39.99, max: 69.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 10, max: 40 }),
                brandId: brand.id,
                categoryId: trucksCategory?.id!,
            }
        });

        await prisma.skateboardProduct.create({
            data: {
                productId: product.id,
                type: 'TRUCKS',
                truckWidth: size.replace('mm', ''),
            }
        })

        products.push(product)
    }

    // Create Wheel Products
    const wheelBrands = brands.filter(b => ['Spitfire', 'Bones Bearings', 'Element', 'Santa Cruz'].includes(b.name))
    for (let i = 0; i < 10; i++) {
        const brand = faker.helpers.arrayElement(wheelBrands)
        const size = faker.helpers.arrayElement(['52mm', '53mm', '54mm', '55mm', '56mm', '58mm'])
        const hardness = faker.helpers.arrayElement([97, 99, 101, 103])
        const type = faker.helpers.arrayElement(['Formula Four', 'STF', 'Classics', 'Street Tech'])

        const name = `${brand.name} ${type} Wheels ${size}mm ${hardness}a`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${type} skateboard wheels. Size: ${size}mm, Durometer: ${hardness}a. Perfect for street skating with excellent grip and slide properties.`,
                price: faker.number.float({ min: 29.99, max: 49.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 15, max: 50 }),
                brandId: brand.id,
                categoryId: wheelsCategory?.id!,
            }
        });

        await prisma.skateboardProduct.create({
            data: {
                productId: product.id,
                type: 'WHEELS',
                wheelDiameter: size.replace('mm', ''),
                wheelHardness: hardness
            }
        })

        products.push(product)
    }

    // Create Bearing Products
    const bearingBrands = brands.filter(b => ['Bones Bearings', 'Spitfire', 'Independent'].includes(b.name))
    for (let i = 0; i < 5; i++) {
        const brand = faker.helpers.arrayElement(bearingBrands)
        const model = faker.helpers.arrayElement(['Reds', 'Swiss', 'Ceramic', 'Gold', 'Super Reds'])

        const name = `${brand.name} ${model} Bearings`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${model} skateboard bearings. Set of 8 precision bearings with built-in spacers and speed rings. Pre-lubricated and ready to ride.`,
                price: faker.number.float({ min: 19.99, max: 99.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 20, max: 60 }),
                brandId: brand.id,
                categoryId: bearingsCategory?.id!,
            }
        });

        await prisma.skateboardProduct.create({
            data: {
                productId: product.id,
                type: 'BEARINGS',
                bearingType: `ABEC-${faker.helpers.arrayElement([3, 5, 7, 9])}`
            }
        })

        products.push(product)
    }
    // Create Griptape Products
    const griptapeBrands = brands.filter(b => ['Mob', 'Grizzly', 'Jessup', 'Black Magic'].includes(b.name))
    for (let i = 0; i < 5; i++) {
        const brand = faker.helpers.arrayElement(griptapeBrands)
        const type = faker.helpers.arrayElement(['Standard', 'Perforated', 'Clear', 'Graphic'])

        const name = `${brand.name} ${type} Griptape`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${type} skateboard griptape. 9" x 33" sheet with superior grip and durability. Easy application with bubble-free results.`,
                price: faker.number.float({ min: 9.99, max: 19.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 30, max: 100 }),
                brandId: brand.id,
                categoryId: griptapeCategory?.id!,
            }
        });

        await prisma.skateboardProduct.create({
            data: {
                productId: product.id,
                type: 'GRIPTAPE'
            }
        })

        products.push(product)
    }

    // Create Hardware Products
    const hardwareBrands = brands.filter(b => ['Independent', 'Bones Bearings', 'Element'].includes(b.name))
    for (let i = 0; i < 5; i++) {
        const brand = faker.helpers.arrayElement(hardwareBrands)
        const size = faker.helpers.arrayElement(['7/8"', '1"', '1 1/8"', '1 1/4"'])
        const color = faker.helpers.arrayElement(['Black', 'Silver', 'Gold', 'Blue', 'Red'])

        const name = `${brand.name} ${color} Hardware - ${size}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} skateboard mounting hardware. ${size} length bolts with matching nuts. Set of 8 in ${color.toLowerCase()} finish.`,
                price: faker.number.float({ min: 4.99, max: 9.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 50, max: 150 }),
                brandId: brand.id,
                categoryId: hardwareCategory?.id!,
            }
        });

        await prisma.skateboardProduct.create({
            data: {
                productId: product.id,
                type: 'HARDWARE'
            }
        })

        products.push(product)
    }

    // Create Complete Skateboard Products
    const completeBrands = brands.filter(b => ['Element', 'Santa Cruz', 'Baker'].includes(b.name))
    for (let i = 0; i < 8; i++) {
        const brand = faker.helpers.arrayElement(completeBrands)
        const theme = faker.helpers.arrayElement(['Pro', 'Beginner', 'Street', 'Park', 'Cruiser'])
        const size = faker.helpers.arrayElement(['7.75"', '8.0"', '8.25"'])

        const name = `${brand.name} ${theme} Complete Skateboard - ${size}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${theme} complete skateboard. Features a ${size} deck, aluminum trucks, 53mm wheels, ABEC-7 bearings, and pre-applied griptape. Ready to ride out of the box.`,
                price: faker.number.float({ min: 89.99, max: 159.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 5, max: 25 }),
                brandId: brand.id,
                categoryId: completeCategory?.id!,
            }
        });

        await prisma.skateboardProduct.create({
            data: {
                productId: product.id,
                type: 'COMPLETE',
                width: size.replace('"', ''),
                length: faker.helpers.arrayElement(['31.5', '32', '32.5']),
                material: '7-ply Maple',
                wheelDiameter: faker.helpers.arrayElement(['52', '53', '54']),
                wheelHardness: faker.helpers.arrayElement([99, 101]),
                bearingType: 'ABEC-7'
            }
        })

        products.push(product)
    }

    // Create T-Shirt Products
    const clothingBrands = brands.filter(b => ['Thrasher', 'Element', 'Santa Cruz', 'Volcom', 'Vans'].includes(b.name))
    for (let i = 0; i < 15; i++) {
        const brand = faker.helpers.arrayElement(clothingBrands)
        const style = faker.helpers.arrayElement(['Logo', 'Graphic', 'Artist Series', 'Classic', 'Limited Edition'])
        const color = faker.color.human()

        const name = `${brand.name} ${style} T-Shirt - ${color}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${style} t-shirt in ${color.toLowerCase()}. 100% cotton with screen-printed graphics. Classic fit, pre-shrunk fabric.`,
                price: faker.number.float({ min: 19.99, max: 34.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 20, max: 100 }),
                brandId: brand.id,
                categoryId: tshirtsCategory?.id!,
            }
        });

        await prisma.clothingProduct.create({
            data: {
                productId: product.id,
                type: 'TSHIRT',
                gender: faker.helpers.arrayElement(['MALE', 'FEMALE', 'UNISEX']),
                size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL', 'XXL']),
                color: color,
                material: '100% Cotton',
                careInstructions: 'Machine wash cold, tumble dry low'
            }
        })

        products.push(product)
    }

    // Create Hoodie Products
    for (let i = 0; i < 10; i++) {
        const brand = faker.helpers.arrayElement(clothingBrands)
        const style = faker.helpers.arrayElement(['Pullover', 'Zip-Up', 'Logo', 'Graphic'])
        const color = faker.color.human()

        const name = `${brand.name} ${style} Hoodie - ${color}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${style} hoodie in ${color.toLowerCase()}. Heavy-weight fleece with kangaroo pocket and adjustable drawstring hood. Soft brushed interior for warmth and comfort.`,
                price: faker.number.float({ min: 49.99, max: 79.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 10, max: 50 }),
                brandId: brand.id,
                categoryId: hoodiesCategory?.id!,
            }
        });

        await prisma.clothingProduct.create({
            data: {
                productId: product.id,
                type: 'HOODIE',
                gender: faker.helpers.arrayElement(['MALE', 'FEMALE', 'UNISEX']),
                size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL', 'XXL']),
                color: color,
                material: '80% Cotton, 20% Polyester',
                careInstructions: 'Machine wash cold, tumble dry low'
            }
        })

        products.push(product)
    }

    // Create Pants Products
    for (let i = 0; i < 8; i++) {
        const brand = faker.helpers.arrayElement(clothingBrands)
        const style = faker.helpers.arrayElement(['Chino', 'Denim', 'Cargo', 'Workpant'])
        const color = faker.color.human()

        const name = `${brand.name} ${style} Pants - ${color}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${style} pants in ${color.toLowerCase()}. Skate-specific fit with reinforced stitching and stretch fabric for mobility. Extra durability in high-wear areas.`,
                price: faker.number.float({ min: 39.99, max: 69.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 10, max: 40 }),
                brandId: brand.id,
                categoryId: pantsCategory?.id!,
            }
        });

        await prisma.clothingProduct.create({
            data: {
                productId: product.id,
                type: 'PANTS',
                gender: faker.helpers.arrayElement(['MALE', 'FEMALE']),
                size: faker.helpers.arrayElement(['28', '30', '32', '34', '36']),
                color: color,
                material: faker.helpers.arrayElement(['98% Cotton, 2% Elastane', '100% Cotton', 'Cotton/Polyester Blend']),
                careInstructions: 'Machine wash cold, hang dry'
            }
        })

        products.push(product)
    }

    // Create Shorts Products
    for (let i = 0; i < 8; i++) {
        const brand = faker.helpers.arrayElement(clothingBrands)
        const style = faker.helpers.arrayElement(['Chino', 'Cargo', 'Mesh', 'Board'])
        const color = faker.color.human()

        const name = `${brand.name} ${style} Shorts - ${color}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${style} shorts in ${color.toLowerCase()}. Skate-specific design with stretch fabric and reinforced stitching. Above-knee length with practical pockets.`,
                price: faker.number.float({ min: 29.99, max: 54.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 15, max: 45 }),
                brandId: brand.id,
                categoryId: shortsCategory?.id!,
            }
        });

        await prisma.clothingProduct.create({
            data: {
                productId: product.id,
                type: 'SHORTS',
                gender: faker.helpers.arrayElement(['MALE', 'FEMALE', 'UNISEX']),
                size: faker.helpers.arrayElement(['28', '30', '32', '34', '36']),
                color: color,
                material: faker.helpers.arrayElement(['98% Cotton, 2% Elastane', '100% Cotton', 'Cotton/Polyester Blend']),
                careInstructions: 'Machine wash cold, hang dry'
            }
        })

        products.push(product)
    }

    // Create Shoes Products
    const shoeBrands = brands.filter(b => ['Vans', 'Volcom', 'Element', 'Santa Cruz'].includes(b.name))
    for (let i = 0; i < 10; i++) {
        const brand = faker.helpers.arrayElement(shoeBrands)
        const style = faker.helpers.arrayElement(['Pro', 'Classic', 'High-Top', 'Low-Top', 'Slip-On'])
        const color = faker.color.human()

        const name = `${brand.name} ${style} Skate Shoes - ${color}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${style} skate shoes in ${color.toLowerCase()}. Featuring vulcanized construction, padded collar, reinforced ollie area, and grippy waffle outsole. Designed for board feel and durability.`,
                price: faker.number.float({ min: 59.99, max: 99.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 10, max: 40 }),
                brandId: brand.id,
                categoryId: shoesCategory?.id!,
            }
        });

        await prisma.clothingProduct.create({
            data: {
                productId: product.id,
                type: 'SHOES',
                gender: faker.helpers.arrayElement(['MALE', 'FEMALE', 'UNISEX']),
                size: faker.helpers.arrayElement(['7', '8', '9', '10', '11', '12']),
                color: color,
                material: 'Suede/Canvas Upper, Rubber Outsole',
                careInstructions: 'Spot clean with mild soap and water'
            }
        })

        products.push(product)
    }

    // Create Hats Products
    for (let i = 0; i < 8; i++) {
        const brand = faker.helpers.arrayElement(clothingBrands)
        const style = faker.helpers.arrayElement(['Snapback', 'Beanie', 'Trucker', '5-Panel', 'Bucket'])
        const color = faker.color.human()

        const name = `${brand.name} ${style} Hat - ${color}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${style} hat in ${color.toLowerCase()}. Features embroidered logo and adjustable fit. One size fits most.`,
                price: faker.number.float({ min: 24.99, max: 34.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 20, max: 60 }),
                brandId: brand.id,
                categoryId: hatsCategory?.id!,
            }
        });

        await prisma.clothingProduct.create({
            data: {
                productId: product.id,
                type: 'HAT',
                gender: 'UNISEX',
                size: 'One Size',
                color: color,
                material: faker.helpers.arrayElement(['100% Cotton', 'Acrylic', 'Cotton/Polyester Blend']),
                careInstructions: 'Spot clean only'
            }
        })

        products.push(product)
    }

    // Create Socks Products
    for (let i = 0; i < 5; i++) {
        const brand = faker.helpers.arrayElement(clothingBrands)
        const style = faker.helpers.arrayElement(['Crew', 'Ankle', 'No-Show', 'Quarter'])
        const color = faker.color.human()

        const name = `${brand.name} ${style} Socks - ${color}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${style} socks in ${color.toLowerCase()}. Moisture-wicking fabric with arch support and cushioned sole. Perfect for skating.`,
                price: faker.number.float({ min: 9.99, max: 16.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 20, max: 80 }),
                brandId: brand.id,
                categoryId: socksCategory?.id!,
            }
        });

        await prisma.clothingProduct.create({
            data: {
                productId: product.id,
                type: 'SOCKS',
                gender: 'UNISEX',
                size: faker.helpers.arrayElement(['S', 'M', 'L']),
                color: color,
                material: 'Cotton/Polyester/Spandex Blend',
                careInstructions: 'Machine wash cold, tumble dry low'
            }
        })

        products.push(product)
    }

    // Create Backpack Products
    for (let i = 0; i < 6; i++) {
        const brand = faker.helpers.arrayElement(clothingBrands)
        const style = faker.helpers.arrayElement(['Skate', 'School', 'Travel', 'Day Pack'])
        const color = faker.color.human()

        const name = `${brand.name} ${style} Backpack - ${color}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${style} backpack in ${color.toLowerCase()}. Features skateboard straps, laptop sleeve, and multiple compartments. Water-resistant material.`,
                price: faker.number.float({ min: 39.99, max: 69.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 10, max: 30 }),
                brandId: brand.id,
                categoryId: backpacksCategory?.id!,
            }
        });

        await prisma.accessoryProduct.create({
            data: {
                productId: product.id,
                type: 'BACKPACK',
                color: color,
                material: 'Polyester',
                dimensions: '18" x 12" x 6"'
            }
        })

        products.push(product)
    }

    // Create Tool Products
    for (let i = 0; i < 5; i++) {
        const brand = faker.helpers.arrayElement(hardwareBrands)
        const style = faker.helpers.arrayElement(['Multi-Tool', 'T-Tool', 'Socket Tool', 'Wrench'])

        const name = `${brand.name} ${style} Skate Tool`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${style} skateboard tool. All-in-one design for maintaining and adjusting your skateboard. Made from durable steel.`,
                price: faker.number.float({ min: 14.99, max: 29.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 15, max: 50 }),
                brandId: brand.id,
                categoryId: toolsCategory?.id!,
            }
        });

        await prisma.accessoryProduct.create({
            data: {
                productId: product.id,
                type: 'TOOLS',
                material: 'Steel',
            }
        })

        products.push(product)
    }

    // Create Protection Products
    for (let i = 0; i < 8; i++) {
        const brand = faker.helpers.arrayElement(brands)
        const type = faker.helpers.arrayElement(['Helmet', 'Knee Pads', 'Elbow Pads', 'Wrist Guards'])
        const color = faker.color.human()

        const name = `${brand.name} ${type} - ${color}`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${type} in ${color.toLowerCase()}. High-impact protection with comfortable fit. Meets safety standards.`,
                price: faker.number.float({ min: 24.99, max: 49.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 10, max: 40 }),
                brandId: brand.id,
                categoryId: protectionCategory?.id!,
            }
        });

        await prisma.accessoryProduct.create({
            data: {
                productId: product.id,
                type: 'PROTECTION',
                color: color,
                material: 'High-impact plastic with EVA foam padding'
            }
        })

        products.push(product)
    }

    // Create Sticker Products
    for (let i = 0; i < 10; i++) {
        const brand = faker.helpers.arrayElement(brands)
        const style = faker.helpers.arrayElement(['Logo', 'Die-Cut', 'Sheet', 'Holographic'])

        const name = `${brand.name} ${style} Sticker`
        const product = await prisma.product.create({
            data: {
                name,
                description: `${brand.name} ${style} sticker. Weather-resistant vinyl with strong adhesive. Perfect for decorating your board or gear.`,
                price: faker.number.float({ min: 2.99, max: 6.99, multipleOf: 0.25 }),
                stock: faker.number.int({ min: 50, max: 200 }),
                brandId: brand.id,
                categoryId: stickersCategory?.id!,
            }
        });

        await prisma.accessoryProduct.create({
            data: {
                productId: product.id,
                type: 'STICKER',
                material: 'Vinyl'
            }
        })

        products.push(product)
    }

    return products
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
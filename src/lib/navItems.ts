import { LifeBuoy, Shirt, Glasses } from "lucide-react";

export const navItems = [
    {
        Icon: LifeBuoy,
        title: "Skateboarding",
        categories: [
            {
                title: "Categories",
                items: [
                    { title: "Decks", href: "/shop?categories=Decks" },
                    { title: "Trucks", href: "/shop?categories=Trucks" },
                    { title: "Wheels", href: "/shop?categories=Wheels" },
                    { title: "Bearings", href: "/shop?categories=Bearings" },
                ],
            },
            {
                title: "Featured",
                items: [
                    { title: "New Arrivals", href: "/shop?categories=Skateboards&sort=newest" },
                    { title: "Best Sellers", href: "/shop?categories=Skateboards&sort=best-selling" },
                    { title: "Featured", href: "/shop?categories=Skateboards&sort=on-featured" },
                ],
            },
        ],
    },
    {
        Icon: Shirt,
        title: "Clothes",
        categories: [
            {
                title: "Categories",
                items: [
                    { title: "T-Shirts", href: "/shop?categories=T-Shirts" },
                    { title: "Hoodies", href: "/shop?categories=Hoodies" },
                    { title: "Shorts", href: "/shop?categories=Shorts" },
                    { title: "Pants", href: "/shop?categories=Pants" },
                ],
            },
            {
                title: "Featured",
                items: [
                    { title: "New Arrivals", href: "/shop?categories=Clothes&sort=newest" },
                    { title: "Best Sellers", href: "/shop?categories=Clothes&sort=best-selling" },
                    { title: "Featured", href: "/shop?categories=Clothes&sort=on-featured" },
                ],
            },
        ],
    },
    {
        Icon: Glasses,
        title: "Accessories",
        categories: [
            {
                title: "Categories",
                items: [
                    { title: "Gloves", href: "/shop?categories=Gloves" },
                    { title: "Hats", href: "/shop?categories=Hats" },
                    { title: "Backpacks", href: "/shop?categories=Backpacks" },
                    { title: "Bags", href: "/shop?categories=Bags" },
                ],
            },
            {
                title: "Featured",
                items: [
                    { title: "New Arrivals", href: "/shop?categories=Accessories&sort=newest" },
                    { title: "Best Sellers", href: "/shop?categories=Accessories&sort=best-selling" },
                    { title: "Featured", href: "/shop?categories=Accessories&sort=on-featured" },
                ],
            },
        ],
    },
]

/* Shop Categories */
// /shop?categories=Skateboards
// /shop?categories=Decks
// /shop?categories=Trucks
// /shop?categories=Wheels
// /shop?categories=Bearings
// /shop?categories=Clothes
// /shop?categories=T-Shirts
// /shop?categories=Hoodies
// /shop?categories=Shorts
// /shop?categories=Pants
// /shop?categories=Accessories
// /shop?categories=Gloves
// /shop?categories=Hats
// /shop?categories=Backpacks
// /shop?categories=Bags

// &sort=newest
// &sort=best-selling
// &sort=on-featured
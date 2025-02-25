import { LifeBuoy, Shirt, Glasses } from "lucide-react";

export const navItems = [
    {
        Icon: LifeBuoy,
        title: "Skateboarding",
        categories: [
            {
                title: "Categories",
                items: [
                    { title: "Decks", href: "/shop/decks" },
                    { title: "Trucks", href: "/shop/trucks" },
                    { title: "Wheels", href: "/shop/wheels" },
                    { title: "Bearings", href: "/shop/bearings" },
                ],
            },
            {
                title: "Featured",
                items: [
                    { title: "New Arrivals", href: "/shop/new-arrivals" },
                    { title: "Best Sellers", href: "/shop/best-sellers" },
                    { title: "Sales", href: "/shop/sales" },
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
                    { title: "T-Shirts", href: "/shop/t-shirts" },
                    { title: "Hoodies", href: "/shop/hoodies" },
                    { title: "Shorts", href: "/shop/accessories" },
                    { title: "Pants", href: "/shop/pants" },
                ],
            },
            {
                title: "Featured",
                items: [
                    { title: "New Arrivals", href: "/shop/new-arrivals" },
                    { title: "Best Sellers", href: "/shop/best-sellers" },
                    { title: "Sales", href: "/shop/sales" },
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
                    { title: "Gloves", href: "/shop/gloves" },
                    { title: "Hats", href: "/shop/hats" },
                    { title: "Backpacks", href: "/shop/backpacks" },
                    { title: "Bags", href: "/shop/bags" },
                ],
            },
            {
                title: "Featured",
                items: [
                    { title: "New Arrivals", href: "/shop/new-arrivals" },
                    { title: "Best Sellers", href: "/shop/best-sellers" },
                    { title: "Sales", href: "/shop/sales" },
                ],
            },
        ],
    },
]
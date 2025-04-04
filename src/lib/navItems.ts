import { LifeBuoy, Shirt, Glasses } from "lucide-react";

type NavItemType = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    categories: {
        title: string;
        items: {
            title: string;
            image?: string;
            href: string;
        }[];
    }[];
}

export const navItems: NavItemType[] = [
    {
        Icon: LifeBuoy,
        title: "Skateboarding",
        categories: [
            {
                title: "Categories",
                items: [
                    { title: "Decks", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743810453/Decks_r6vvjc.webp", href: "/shop?categories=Decks" },
                    { title: "Trucks", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743810191/Trucks_cf6o8m.webp", href: "/shop?categories=Trucks" },
                    { title: "Wheels", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743809040/Wheels_wbcfqz.webp", href: "/shop?categories=Wheels" },
                    { title: "Bearings", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743809039/Bearings_jo3chv.webp", href: "/shop?categories=Bearings" },
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
                    { title: "T-Shirts", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743809040/T-Shirts_ptjg8m.webp", href: "/shop?categories=T-Shirts" },
                    { title: "Hoodies", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743809039/Hoodies_mx9znd.webp", href: "/shop?categories=Hoodies" },
                    { title: "Shorts", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743809040/Shorts_qb80b1.webp", href: "/shop?categories=Shorts" },
                    { title: "Pants", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743809039/Pants_tumn5w.webp", href: "/shop?categories=Pants" },
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
                    { title: "Gloves", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743809039/Gloves_j1keml.webp", href: "/shop?categories=Gloves" },
                    { title: "Hats", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743809040/Hats_l3rs0d.webp", href: "/shop?categories=Hats" },
                    { title: "Backpacks", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743809039/Backpacks_zofenb.webp", href: "/shop?categories=Backpacks" },
                    { title: "Bags", image: "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1743809039/Bags_y8sspf.webp", href: "/shop?categories=Bags" },
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
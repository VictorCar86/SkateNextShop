import Link from "next/link"
import { SkullIcon as Skateboarding } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8 px-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-2">
              <Skateboarding className="h-6 w-6" />
              <span className="font-bold">SkateShop</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Your one-stop destination for all things skateboarding. Quality gear, custom builds, and a thriving
              community.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/shop/decks" className="text-muted-foreground hover:text-foreground">
                    Decks
                  </Link>
                </li>
                <li>
                  <Link href="/shop/trucks" className="text-muted-foreground hover:text-foreground">
                    Trucks
                  </Link>
                </li>
                <li>
                  <Link href="/shop/wheels" className="text-muted-foreground hover:text-foreground">
                    Wheels
                  </Link>
                </li>
                <li>
                  <Link href="/shop/bearings" className="text-muted-foreground hover:text-foreground">
                    Bearings
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Help</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-muted-foreground hover:text-foreground">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SkateShop. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


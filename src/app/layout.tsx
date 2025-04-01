import type React from "react";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { MainNav } from "@/components/main-page/main-nav";
import { MobileNav } from "@/components/main-page/mobile-nav";
import { CartSheet } from "@/components/main-page/cart-sheet";
import { Footer } from "@/components/main-page/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "SkateNextShop - Your Ultimate Skateboarding Marketplace",
  description:
    "Find the best skateboarding gear, customize your deck, and join the community",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={kanit.className}>
        <ThemeProvider defaultTheme="system">
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background">
              <div className="flex justify-between h-16 items-center">
                <MainNav />
                <div className="flex items-center justify-end space-x-4">
                  <CartSheet />
                  <ThemeToggle />
                  <MobileNav />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"

export function Navbar() {
  const { items } = useCart()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-6">
              <Link href="/" className="text-lg font-semibold nav-link">
                Beranda
              </Link>
              <Link href="/products" className="text-lg font-semibold nav-link">
                Produk
              </Link>
              <Link href="/about" className="text-lg font-semibold nav-link">
                Tentang Kami
              </Link>
              <Link href="/contact" className="text-lg font-semibold nav-link">
                Kontak
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} className="rounded-sm" />
            <span className="font-bold hidden md:inline-block text-success-500">SnackStore</span>
          </Link>
        </div>

        <nav className="mx-6 hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="nav-link">
            Beranda
          </Link>
          <Link href="/products" className="nav-link">
            Produk
          </Link>
          <Link href="/about" className="nav-link">
            Tentang Kami
          </Link>
          <Link href="/contact" className="nav-link">
            Kontak
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          {isSearchOpen ? (
            <div className="relative flex-1 max-w-sm mr-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari produk..."
                className="w-full pl-8 pr-4 border-success-500 focus:ring-success-500"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-success-500"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Link href="/account">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-success-500">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-success-500 relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-success-500 text-[10px] font-medium text-white">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}


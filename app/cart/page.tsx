"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CartItems } from "@/components/cart-items"
import { CartSummary } from "@/components/cart-summary"
import { useCart } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"

export default function CartPage() {
  const { items } = useCart()

  return (
    <div>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/products">
            <Button variant="ghost" size="sm" className="gap-1">
              <ChevronLeft className="h-4 w-4" />
              Lanjutkan Belanja
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Keranjang Belanja</h1>

        {items.length === 0 ? (
          <div className="text-center py-12 border rounded-lg">
            <h2 className="text-xl font-medium mb-4">Keranjang Anda Kosong</h2>
            <p className="text-muted-foreground mb-6">Anda belum menambahkan produk apapun ke keranjang belanja.</p>
            <Button asChild>
              <Link href="/products">Mulai Belanja</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartItems />
            </div>
            <div>
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


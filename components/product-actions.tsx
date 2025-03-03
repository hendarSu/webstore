"use client"

import { useState } from "react"
import { Heart, Minus, Plus, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export function ProductActions({ product }: { product: any }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [adding, setAdding] = useState(false)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    setAdding(true)
    addToCart({
      ...product,
      quantity,
    })
    setTimeout(() => setAdding(false), 1000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="text-success-500 hover:text-success-600 hover:bg-success-50"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={increaseQuantity}
            disabled={quantity >= product.stock}
            className="text-success-500 hover:text-success-600 hover:bg-success-50"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <span className="text-sm text-muted-foreground">{product.stock} tersedia</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <Button className="flex-1 gap-2 btn-tokopedia" size="lg" onClick={handleAddToCart} disabled={adding}>
          {adding ? (
            "Ditambahkan!"
          ) : (
            <>
              <ShoppingCart className="h-5 w-5" />
              Tambah ke Keranjang
            </>
          )}
        </Button>
        <Button variant="outline" size="lg" className="gap-2 btn-tokopedia-outline">
          <Heart className="h-5 w-5" />
          <span className="hidden sm:inline">Wishlist</span>
        </Button>
        <Button variant="outline" size="icon" className="h-12 w-12 btn-tokopedia-outline">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}


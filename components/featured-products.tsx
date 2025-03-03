"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"

// Mock featured products data
const featuredProducts = [
  {
    id: "1",
    name: "Keripik Pisang Premium",
    description: "Keripik pisang renyah dengan rasa manis alami",
    price: 25000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Keripik",
  },
  {
    id: "2",
    name: "Kacang Mete Panggang",
    description: "Kacang mete panggang dengan rasa gurih dan renyah",
    price: 45000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Kacang",
  },
  {
    id: "3",
    name: "Keripik Singkong Balado",
    description: "Keripik singkong dengan bumbu balado pedas",
    price: 20000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Keripik",
  },
  {
    id: "4",
    name: "Makaroni Pedas",
    description: "Makaroni kering dengan bumbu pedas khas",
    price: 18000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Makaroni",
  },
]

export function FeaturedProducts() {
  const { addToCart } = useCart()
  const [addingToCart, setAddingToCart] = useState<string | null>(null)

  const handleAddToCart = (product: any) => {
    setAddingToCart(product.id)
    addToCart(product)
    setTimeout(() => setAddingToCart(null), 1000)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="product-card">
          <div className="relative h-60 w-full">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover product-card-image rounded-t-lg"
            />
            <span className="product-card-badge badge-new">Baru</span>
          </div>
          <CardContent className="p-4">
            <div className="space-y-1">
              <Link href={`/products/${product.id}`} className="font-medium hover:text-success-500 transition-colors">
                {product.name}
              </Link>
              <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="price-text">Rp {product.price.toLocaleString("id-ID")}</span>
              <span className="text-xs px-2 py-1 bg-success-50 text-success-500 rounded-full">{product.category}</span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex gap-2">
            <Button variant="outline" size="sm" className="w-full btn-tokopedia-outline" asChild>
              <Link href={`/products/${product.id}`}>Detail</Link>
            </Button>
            <Button
              size="sm"
              className="w-full gap-1 btn-tokopedia"
              onClick={() => handleAddToCart(product)}
              disabled={addingToCart === product.id}
            >
              {addingToCart === product.id ? (
                "Ditambahkan!"
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  Beli
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}


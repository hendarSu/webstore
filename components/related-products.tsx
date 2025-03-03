"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"

// Mock products data
const allProducts = [
  {
    id: "1",
    name: "Keripik Pisang Premium",
    description: "Keripik pisang renyah dengan rasa manis alami",
    price: 25000,
    image: "/placeholder.svg?height=300&width=300",
    category: "keripik",
  },
  {
    id: "3",
    name: "Keripik Singkong Balado",
    description: "Keripik singkong dengan bumbu balado pedas",
    price: 20000,
    image: "/placeholder.svg?height=300&width=300",
    category: "keripik",
  },
  {
    id: "6",
    name: "Keripik Kentang Rumput Laut",
    description: "Keripik kentang dengan rasa rumput laut",
    price: 22000,
    image: "/placeholder.svg?height=300&width=300",
    category: "keripik",
  },
  {
    id: "2",
    name: "Kacang Mete Panggang",
    description: "Kacang mete panggang dengan rasa gurih dan renyah",
    price: 45000,
    image: "/placeholder.svg?height=300&width=300",
    category: "kacang",
  },
]

export function RelatedProducts({ category, currentProductId }: { category: string; currentProductId: string }) {
  const { addToCart } = useCart()

  // Filter related products by category and exclude current product
  const relatedProducts = allProducts
    .filter((product) => product.category === category && product.id !== currentProductId)
    .slice(0, 4)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Produk Terkait</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <div className="space-y-1">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              </div>
              <div className="mt-2">
                <span className="font-bold">Rp {product.price.toLocaleString("id-ID")}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex gap-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={`/products/${product.id}`}>Detail</Link>
              </Button>
              <Button size="sm" className="w-full gap-1" onClick={() => addToCart(product)}>
                <ShoppingCart className="h-4 w-4" />
                Beli
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


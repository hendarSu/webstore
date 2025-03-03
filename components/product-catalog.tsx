"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ProductFilters } from "@/components/product-filters"
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
    id: "2",
    name: "Kacang Mete Panggang",
    description: "Kacang mete panggang dengan rasa gurih dan renyah",
    price: 45000,
    image: "/placeholder.svg?height=300&width=300",
    category: "kacang",
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
    id: "4",
    name: "Makaroni Pedas",
    description: "Makaroni kering dengan bumbu pedas khas",
    price: 18000,
    image: "/placeholder.svg?height=300&width=300",
    category: "makaroni",
  },
  {
    id: "5",
    name: "Cokelat Almond",
    description: "Cokelat premium dengan taburan almond",
    price: 35000,
    image: "/placeholder.svg?height=300&width=300",
    category: "cokelat",
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
    id: "7",
    name: "Kacang Atom Pedas",
    description: "Kacang atom dengan balutan tepung pedas",
    price: 15000,
    image: "/placeholder.svg?height=300&width=300",
    category: "kacang",
  },
  {
    id: "8",
    name: "Biskuit Cokelat Chip",
    description: "Biskuit renyah dengan choco chip",
    price: 28000,
    image: "/placeholder.svg?height=300&width=300",
    category: "kue",
  },
  {
    id: "9",
    name: "Minuman Serbuk Jeruk",
    description: "Minuman serbuk rasa jeruk segar",
    price: 12000,
    image: "/placeholder.svg?height=300&width=300",
    category: "minuman",
  },
]

export function ProductCatalog({ category, search }: { category?: string; search?: string }) {
  const { addToCart } = useCart()
  const [sortBy, setSortBy] = useState("newest")
  const [addingToCart, setAddingToCart] = useState<string | null>(null)

  // Filter products based on category and search
  let filteredProducts = [...allProducts]

  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category === category)
  }

  if (search) {
    const searchLower = search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchLower) || product.description.toLowerCase().includes(searchLower),
    )
  }

  // Sort products
  switch (sortBy) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "name-asc":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "name-desc":
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
      break
    default:
      // Keep default order (newest)
      break
  }

  const handleAddToCart = (product: any) => {
    setAddingToCart(product.id)
    addToCart(product)
    setTimeout(() => setAddingToCart(null), 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-sm text-muted-foreground">Menampilkan {filteredProducts.length} produk</p>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2 md:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="py-4">
                <ProductFilters selectedCategory={category} />
              </div>
            </SheetContent>
          </Sheet>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Urutkan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Terbaru</SelectItem>
              <SelectItem value="price-low">Harga: Rendah ke Tinggi</SelectItem>
              <SelectItem value="price-high">Harga: Tinggi ke Rendah</SelectItem>
              <SelectItem value="name-asc">Nama: A-Z</SelectItem>
              <SelectItem value="name-desc">Nama: Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">Tidak ada produk ditemukan</h3>
          <p className="text-muted-foreground mt-2">Coba ubah filter atau kata kunci pencarian Anda</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative h-60 w-full">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">Rp {product.price.toLocaleString("id-ID")}</span>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{product.category}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`/products/${product.id}`}>Detail</Link>
                </Button>
                <Button
                  size="sm"
                  className="w-full gap-1"
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
      )}
    </div>
  )
}


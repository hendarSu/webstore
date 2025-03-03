import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

// Mock categories data
const categories = [
  {
    id: "keripik",
    name: "Keripik",
    image: "/placeholder.svg?height=200&width=200",
    count: 24,
  },
  {
    id: "kacang",
    name: "Kacang & Biji-bijian",
    image: "/placeholder.svg?height=200&width=200",
    count: 18,
  },
  {
    id: "makaroni",
    name: "Makaroni & Pasta",
    image: "/placeholder.svg?height=200&width=200",
    count: 12,
  },
  {
    id: "cokelat",
    name: "Cokelat & Permen",
    image: "/placeholder.svg?height=200&width=200",
    count: 15,
  },
  {
    id: "kue",
    name: "Kue & Biskuit",
    image: "/placeholder.svg?height=200&width=200",
    count: 20,
  },
  {
    id: "minuman",
    name: "Minuman Serbuk",
    image: "/placeholder.svg?height=200&width=200",
    count: 10,
  },
]

export function CategoryShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
      {categories.map((category) => (
        <Link key={category.id} href={`/products?category=${category.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-40 w-full">
              <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} produk</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}


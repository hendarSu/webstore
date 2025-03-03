import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductActions } from "@/components/product-actions"
import { ProductReviews } from "@/components/product-reviews"
import { RelatedProducts } from "@/components/related-products"
import { Navbar } from "@/components/navbar"

// Mock product data - in a real app, this would come from an API or database
const getProductById = (id: string) => {
  const products = [
    {
      id: "1",
      name: "Keripik Pisang Premium",
      description:
        "Keripik pisang renyah dengan rasa manis alami. Dibuat dari pisang pilihan yang dipanen langsung dari kebun kami. Proses pengolahan yang higienis dan modern menghasilkan keripik pisang yang renyah dan tidak berminyak. Cocok untuk camilan sehari-hari atau untuk acara kumpul keluarga.",
      price: 25000,
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "keripik",
      stock: 50,
      weight: 250,
      ratings: 4.5,
      reviewCount: 120,
      features: ["Tanpa pengawet", "Tanpa MSG", "Renyah dan gurih", "Kemasan kedap udara"],
    },
    {
      id: "2",
      name: "Kacang Mete Panggang",
      description:
        "Kacang mete panggang dengan rasa gurih dan renyah. Kacang mete berkualitas tinggi yang dipanggang dengan sempurna untuk menghasilkan rasa yang khas dan tekstur yang renyah. Kaya akan nutrisi dan baik untuk kesehatan jantung. Cocok untuk camilan sehat atau sebagai tambahan dalam masakan dan kue.",
      price: 45000,
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      category: "kacang",
      stock: 35,
      weight: 200,
      ratings: 4.8,
      reviewCount: 85,
      features: ["Dipanggang, bukan digoreng", "Kaya akan nutrisi", "Tanpa garam tambahan", "Kemasan premium"],
    },
  ]

  return products.find((product) => product.id === id)
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="container px-4 py-16 mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
          <p className="text-muted-foreground mb-6">Maaf, produk yang Anda cari tidak tersedia.</p>
          <Button asChild>
            <Link href="/products">Kembali ke Katalog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-6">
          <Link href="/products">
            <Button variant="ghost" size="sm" className="gap-1">
              <ChevronLeft className="h-4 w-4" />
              Kembali ke Katalog
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden border">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="relative h-24 rounded-md overflow-hidden border cursor-pointer">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - gambar ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < Math.floor(product.ratings) ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-yellow-500"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.ratings} ({product.reviewCount} ulasan)
                </span>
              </div>
            </div>

            <div className="text-3xl font-bold">Rp {product.price.toLocaleString("id-ID")}</div>

            <div>
              <h3 className="font-medium mb-2">Deskripsi</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Kategori</h3>
                <p className="text-muted-foreground capitalize">{product.category}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Berat</h3>
                <p className="text-muted-foreground">{product.weight} gram</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Stok</h3>
                <p className="text-muted-foreground">{product.stock} tersedia</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Fitur Produk</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <ProductActions product={product} />
          </div>
        </div>

        <div className="space-y-12">
          <ProductReviews productId={product.id} />
          <RelatedProducts category={product.category} currentProductId={product.id} />
        </div>
      </div>
    </div>
  )
}


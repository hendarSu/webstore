import { Suspense } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCatalog } from "@/components/product-catalog"
import { ProductFilters } from "@/components/product-filters"
import { ProductSkeleton } from "@/components/product-skeleton"
import { Navbar } from "@/components/navbar"

export default function ProductsPage({ searchParams }: { searchParams: { category?: string; search?: string } }) {
  const { category, search } = searchParams

  return (
    <div>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ChevronLeft className="h-4 w-4" />
                  Kembali
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold">Katalog Produk</h1>
            {category && (
              <p className="text-muted-foreground">
                Menampilkan produk dalam kategori: <span className="font-medium text-foreground">{category}</span>
              </p>
            )}
            {search && (
              <p className="text-muted-foreground">
                Hasil pencarian untuk: <span className="font-medium text-foreground">{search}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <ProductFilters selectedCategory={category} />
          </div>
          <div className="md:col-span-3">
            <Suspense fallback={<ProductSkeleton />}>
              <ProductCatalog category={category} search={search} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}


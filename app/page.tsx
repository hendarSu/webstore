import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/featured-products"
import { CategoryShowcase } from "@/components/category-showcase"
import { TestimonialSection } from "@/components/testimonial-section"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Nikmati Cemilan Berkualitas Untuk Semua Momen
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Temukan berbagai pilihan makanan ringan lezat dengan bahan berkualitas tinggi. Dari yang manis hingga
                  yang gurih, kami punya semuanya.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg" className="gap-1">
                    Belanja Sekarang
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Tentang Kami
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Koleksi makanan ringan berkualitas"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Produk Unggulan</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Cemilan terlaris dan terfavorit dari pelanggan kami
              </p>
            </div>
          </div>
          <FeaturedProducts />
          <div className="flex justify-center mt-8">
            <Link href="/products">
              <Button variant="outline" className="gap-1">
                Lihat Semua Produk
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Kategori Produk</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Temukan berbagai jenis cemilan sesuai selera Anda
              </p>
            </div>
          </div>
          <CategoryShowcase />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] lg:h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Kualitas produk kami"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Mengapa Memilih Kami?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Kami berkomitmen untuk menyediakan makanan ringan berkualitas tinggi dengan bahan-bahan terbaik
                </p>
              </div>
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Bahan Berkualitas</h3>
                    <p className="text-muted-foreground">
                      Kami hanya menggunakan bahan-bahan terbaik dan berkualitas tinggi untuk semua produk kami
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Rasa Autentik</h3>
                    <p className="text-muted-foreground">
                      Resep kami dirancang untuk memberikan pengalaman rasa yang autentik dan lezat
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Dibuat dengan Cinta</h3>
                    <p className="text-muted-foreground">
                      Setiap produk kami dibuat dengan penuh perhatian dan cinta untuk memastikan kualitas terbaik
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />
    </div>
  )
}


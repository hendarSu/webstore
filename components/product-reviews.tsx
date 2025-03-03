"use client"

import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// Mock reviews data
const reviews = [
  {
    id: "1",
    user: "Budi Santoso",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "12 Mei 2023",
    content:
      "Keripik pisangnya sangat renyah dan manis. Saya suka sekali dengan rasanya yang alami. Pengiriman juga cepat dan kemasan aman. Akan beli lagi!",
    images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
  },
  {
    id: "2",
    user: "Siti Rahayu",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "5 Juni 2023",
    content: "Rasanya enak, tapi menurut saya bisa lebih renyah lagi. Secara keseluruhan puas dengan produknya.",
    images: [],
  },
  {
    id: "3",
    user: "Ahmad Hidayat",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "20 Juli 2023",
    content:
      "Saya sudah mencoba berbagai keripik pisang, tapi ini yang terbaik! Tidak terlalu manis dan tidak terlalu asin. Pas di lidah. Kemasan juga bagus dan menarik.",
    images: ["/placeholder.svg?height=100&width=100"],
  },
]

export function ProductReviews({ productId }: { productId: string }) {
  const [activeTab, setActiveTab] = useState("reviews")

  return (
    <div>
      <Tabs defaultValue="reviews" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="reviews">Ulasan ({reviews.length})</TabsTrigger>
          <TabsTrigger value="questions">Tanya Jawab</TabsTrigger>
        </TabsList>

        <TabsContent value="reviews" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Ulasan Pelanggan</h2>
            <Button>Tulis Ulasan</Button>
          </div>

          <div className="grid gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image src={review.avatar || "/placeholder.svg"} alt={review.user} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <h4 className="font-medium">{review.user}</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={i < review.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-yellow-500"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="mt-2 text-muted-foreground">{review.content}</p>
                    {review.images.length > 0 && (
                      <div className="flex gap-2 mt-3">
                        {review.images.map((image, index) => (
                          <div key={index} className="relative h-20 w-20 rounded-md overflow-hidden border">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Review image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="questions" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Tanya Jawab</h2>
            <Button>Ajukan Pertanyaan</Button>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="font-medium mb-4">Ajukan Pertanyaan Tentang Produk Ini</h3>
            <Textarea placeholder="Tulis pertanyaan Anda di sini..." className="mb-4" />
            <Button>Kirim Pertanyaan</Button>
          </div>

          <div className="text-center py-8">
            <p className="text-muted-foreground">Belum ada pertanyaan tentang produk ini</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


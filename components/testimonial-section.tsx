import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

// Mock testimonials data
const testimonials = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "Pelanggan Setia",
    content: "Saya sangat puas dengan kualitas makanan ringan dari toko ini. Rasanya enak dan pengirimannya cepat!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Siti Rahayu",
    role: "Food Blogger",
    content:
      "Keripik pisangnya adalah yang terbaik yang pernah saya coba. Renyah dan manisnya pas. Sangat direkomendasikan!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Ahmad Hidayat",
    role: "Pemilik Kafe",
    content: "Saya rutin memesan cemilan untuk kafe saya. Pelanggan selalu menyukai produk-produk dari toko ini.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Apa Kata Pelanggan Kami</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Dengarkan pengalaman mereka dengan produk-produk kami
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


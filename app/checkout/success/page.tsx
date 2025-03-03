import Link from "next/link"
import { CheckCircle2, Home, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function CheckoutSuccessPage() {
  // In a real app, you would get the order details from the server or URL params
  const orderNumber = "ORD-" + Math.floor(100000 + Math.random() * 900000)

  return (
    <div>
      <Navbar />
      <div className="container px-4 py-16 mx-auto max-w-md">
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Pesanan Berhasil!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Terima kasih atas pesanan Anda. Kami telah mengirimkan detail pesanan dan instruksi pembayaran ke WhatsApp
              Anda.
            </p>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Nomor Pesanan</p>
              <p className="font-bold">{orderNumber}</p>
            </div>

            <div className="space-y-2 text-left">
              <h3 className="font-medium">Langkah Selanjutnya:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="text-sm">Lakukan pembayaran sesuai instruksi yang dikirimkan ke WhatsApp Anda</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="text-sm">Kami akan memproses pesanan Anda setelah pembayaran dikonfirmasi</div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="text-sm">Anda akan menerima update status pesanan melalui WhatsApp</div>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full gap-1" asChild>
              <Link href="/account/orders">
                <Package className="h-4 w-4" />
                Lihat Pesanan Saya
              </Link>
            </Button>
            <Button variant="outline" className="w-full gap-1" asChild>
              <Link href="/">
                <Home className="h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}


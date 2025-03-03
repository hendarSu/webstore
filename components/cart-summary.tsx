"use client"

import { useState } from "react"
import Link from "next/link"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"

export function CartSummary() {
  const { items, getTotalPrice } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)

  const subtotal = getTotalPrice()
  const shipping = subtotal > 0 ? 15000 : 0
  const discount = 0 // This would be calculated based on promo code
  const total = subtotal + shipping - discount

  const handleApplyPromo = () => {
    if (!promoCode) return

    setIsApplyingPromo(true)
    // Simulate API call to validate promo code
    setTimeout(() => {
      setIsApplyingPromo(false)
      // Here you would apply the discount if the code is valid
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ringkasan Pesanan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>Rp {subtotal.toLocaleString("id-ID")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Pengiriman</span>
            <span>Rp {shipping.toLocaleString("id-ID")}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Diskon</span>
              <span>-Rp {discount.toLocaleString("id-ID")}</span>
            </div>
          )}
        </div>

        <Separator />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>Rp {total.toLocaleString("id-ID")}</span>
        </div>

        <div className="pt-4">
          <div className="flex gap-2 mb-2">
            <Input placeholder="Kode Promo" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
            <Button variant="outline" onClick={handleApplyPromo} disabled={!promoCode || isApplyingPromo}>
              {isApplyingPromo ? <Loader2 className="h-4 w-4 animate-spin" /> : "Terapkan"}
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg" disabled={items.length === 0} asChild>
          <Link href="/checkout">Lanjut ke Pembayaran</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


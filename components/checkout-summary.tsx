"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"

export function CheckoutSummary() {
  const { items, getTotalPrice } = useCart()

  const subtotal = getTotalPrice()
  const shipping = 15000 // This would be dynamic based on shipping method
  const discount = 0 // This would be calculated based on promo code
  const total = subtotal + shipping - discount

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ringkasan Pesanan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                <p className="text-sm font-medium">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</p>
              </div>
            </div>
          ))}
        </div>

        <Separator />

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
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href="/cart">Edit Keranjang</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


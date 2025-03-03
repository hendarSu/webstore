"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"

export function CartItems() {
  const { items, updateQuantity, removeFromCart } = useCart()
  const [updating, setUpdating] = useState<string | null>(null)

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setUpdating(id)
    updateQuantity(id, quantity)
    setTimeout(() => setUpdating(null), 500)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 space-y-1">
                  <Link href={`/products/${item.id}`} className="font-medium hover:underline">
                    {item.name}
                  </Link>
                  <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1 || updating === item.id}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        disabled={updating === item.id}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="font-bold">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</span>
                  <span className="text-sm text-muted-foreground">Rp {item.price.toLocaleString("id-ID")} / item</span>
                </div>
              </div>
              <Separator className="mt-4" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


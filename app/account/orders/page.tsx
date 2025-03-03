import Link from "next/link"
import { ChevronRight, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock orders data
const orders = [
  {
    id: "ORD-123456",
    date: "23 Mei 2023",
    status: "completed",
    statusLabel: "Selesai",
    total: 150000,
    items: 3,
  },
  {
    id: "ORD-789012",
    date: "15 Juni 2023",
    status: "processing",
    statusLabel: "Diproses",
    total: 85000,
    items: 2,
  },
  {
    id: "ORD-345678",
    date: "2 Juli 2023",
    status: "shipped",
    statusLabel: "Dikirim",
    total: 210000,
    items: 4,
  },
]

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Pesanan Saya</h2>
      </div>

      {orders.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <Package className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">Belum Ada Pesanan</h3>
            <p className="text-muted-foreground mb-4">Anda belum melakukan pemesanan apapun.</p>
            <Button asChild>
              <Link href="/products">Mulai Belanja</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <CardHeader className="p-4 pb-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-base">{order.id}</CardTitle>
                    <CardDescription>{order.date}</CardDescription>
                  </div>
                  <Badge
                    variant={
                      order.status === "completed" ? "default" : order.status === "processing" ? "outline" : "secondary"
                    }
                  >
                    {order.statusLabel}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">{order.items} produk</div>
                    <div className="font-medium">Total: Rp {order.total.toLocaleString("id-ID")}</div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <Link href={`/account/orders/${order.id}`}>
                      Detail Pesanan
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}


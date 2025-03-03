"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, CreditCard, Truck, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { CheckoutSummary } from "@/components/checkout-summary"
import { useCart } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"

export default function CheckoutPage() {
  const { items } = useCart()
  const [activeStep, setActiveStep] = useState("shipping")

  if (items.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="container px-4 py-16 mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Keranjang Anda Kosong</h1>
          <p className="text-muted-foreground mb-6">Anda perlu menambahkan produk ke keranjang sebelum checkout.</p>
          <Button asChild>
            <Link href="/products">Mulai Belanja</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/cart">
            <Button variant="ghost" size="sm" className="gap-1">
              <ChevronLeft className="h-4 w-4" />
              Kembali ke Keranjang
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs value={activeStep} onValueChange={setActiveStep} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="shipping" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Informasi</span>
                </TabsTrigger>
                <TabsTrigger value="delivery" className="gap-2">
                  <Truck className="h-4 w-4" />
                  <span className="hidden sm:inline">Pengiriman</span>
                </TabsTrigger>
                <TabsTrigger value="payment" className="gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden sm:inline">Pembayaran</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="shipping">
                <Card>
                  <CardHeader>
                    <CardTitle>Informasi Pelanggan</CardTitle>
                    <CardDescription>Masukkan informasi pengiriman Anda</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Nama Depan</Label>
                        <Input id="first-name" placeholder="Nama depan Anda" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Nama Belakang</Label>
                        <Input id="last-name" placeholder="Nama belakang Anda" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input id="phone" placeholder="08xxxxxxxxxx" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Alamat</Label>
                      <Textarea id="address" placeholder="Alamat lengkap Anda" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Kota</Label>
                        <Input id="city" placeholder="Kota" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postal-code">Kode Pos</Label>
                        <Input id="postal-code" placeholder="Kode pos" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="province">Provinsi</Label>
                      <Select>
                        <SelectTrigger id="province">
                          <SelectValue placeholder="Pilih provinsi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jakarta">DKI Jakarta</SelectItem>
                          <SelectItem value="west-java">Jawa Barat</SelectItem>
                          <SelectItem value="central-java">Jawa Tengah</SelectItem>
                          <SelectItem value="east-java">Jawa Timur</SelectItem>
                          <SelectItem value="yogyakarta">DI Yogyakarta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full" onClick={() => setActiveStep("delivery")}>
                      Lanjut ke Pengiriman
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="delivery">
                <Card>
                  <CardHeader>
                    <CardTitle>Metode Pengiriman</CardTitle>
                    <CardDescription>Pilih metode pengiriman yang Anda inginkan</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <RadioGroup defaultValue="regular">
                      <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="regular" id="regular" />
                          <Label htmlFor="regular" className="font-normal cursor-pointer">
                            <div className="font-medium">Reguler (2-3 hari)</div>
                            <div className="text-sm text-muted-foreground">Pengiriman standar ke alamat Anda</div>
                          </Label>
                        </div>
                        <div className="font-medium">Rp 15.000</div>
                      </div>

                      <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express" className="font-normal cursor-pointer">
                            <div className="font-medium">Express (1 hari)</div>
                            <div className="text-sm text-muted-foreground">Pengiriman cepat ke alamat Anda</div>
                          </Label>
                        </div>
                        <div className="font-medium">Rp 30.000</div>
                      </div>

                      <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="same-day" id="same-day" />
                          <Label htmlFor="same-day" className="font-normal cursor-pointer">
                            <div className="font-medium">Same Day (Hari ini)</div>
                            <div className="text-sm text-muted-foreground">
                              Pengiriman di hari yang sama (hanya untuk area tertentu)
                            </div>
                          </Label>
                        </div>
                        <div className="font-medium">Rp 50.000</div>
                      </div>
                    </RadioGroup>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Catatan Pengiriman (Opsional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Tambahkan catatan untuk kurir (misalnya: letakkan di depan pintu, hubungi sebelum pengiriman, dll.)"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" onClick={() => setActiveStep("shipping")}>
                        Kembali
                      </Button>
                      <Button className="w-full" onClick={() => setActiveStep("payment")}>
                        Lanjut ke Pembayaran
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payment">
                <Card>
                  <CardHeader>
                    <CardTitle>Metode Pembayaran</CardTitle>
                    <CardDescription>Pilih metode pembayaran yang Anda inginkan</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <RadioGroup defaultValue="bank-transfer">
                      <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                          <Label htmlFor="bank-transfer" className="font-normal cursor-pointer">
                            <div className="font-medium">Transfer Bank</div>
                            <div className="text-sm text-muted-foreground">Transfer ke rekening bank kami</div>
                          </Label>
                        </div>
                      </div>

                      <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="e-wallet" id="e-wallet" />
                          <Label htmlFor="e-wallet" className="font-normal cursor-pointer">
                            <div className="font-medium">E-Wallet</div>
                            <div className="text-sm text-muted-foreground">
                              Bayar dengan OVO, GoPay, DANA, atau LinkAja
                            </div>
                          </Label>
                        </div>
                      </div>

                      <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="credit-card" id="credit-card" />
                          <Label htmlFor="credit-card" className="font-normal cursor-pointer">
                            <div className="font-medium">Kartu Kredit</div>
                            <div className="text-sm text-muted-foreground">Bayar dengan Visa, Mastercard, atau JCB</div>
                          </Label>
                        </div>
                      </div>

                      <div className="flex items-center justify-between space-x-2 border p-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod" className="font-normal cursor-pointer">
                            <div className="font-medium">Cash on Delivery (COD)</div>
                            <div className="text-sm text-muted-foreground">Bayar saat barang diterima</div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">Nomor WhatsApp untuk Konfirmasi</Label>
                      <Input id="whatsapp" placeholder="08xxxxxxxxxx" />
                      <p className="text-sm text-muted-foreground">
                        Kami akan mengirimkan detail pesanan dan instruksi pembayaran ke nomor WhatsApp Anda
                      </p>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="terms" className="rounded" />
                        <Label htmlFor="terms" className="font-normal text-sm">
                          Saya setuju dengan{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            Syarat dan Ketentuan
                          </Link>{" "}
                          serta{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Kebijakan Privasi
                          </Link>
                        </Label>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" onClick={() => setActiveStep("delivery")}>
                        Kembali
                      </Button>
                      <Button className="w-full" asChild>
                        <Link href="/checkout/success">Selesaikan Pesanan</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  )
}


import { Bell, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <CardTitle>Notifikasi</CardTitle>
          </div>
          <CardDescription>Atur preferensi notifikasi Anda</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Notifikasi Email</Label>
              <p className="text-sm text-muted-foreground">
                Terima notifikasi tentang pesanan dan promosi melalui email
              </p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="whatsapp-notifications">Notifikasi WhatsApp</Label>
              <p className="text-sm text-muted-foreground">
                Terima notifikasi tentang pesanan dan promosi melalui WhatsApp
              </p>
            </div>
            <Switch id="whatsapp-notifications" defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="marketing-notifications">Pesan Pemasaran</Label>
              <p className="text-sm text-muted-foreground">Terima informasi tentang produk baru dan penawaran khusus</p>
            </div>
            <Switch id="marketing-notifications" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <CardTitle>Preferensi</CardTitle>
          </div>
          <CardDescription>Atur preferensi tampilan dan bahasa</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="language">Bahasa</Label>
            <Select defaultValue="id">
              <SelectTrigger id="language">
                <SelectValue placeholder="Pilih bahasa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="id">Bahasa Indonesia</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="dark-mode">Mode Gelap</Label>
              <p className="text-sm text-muted-foreground">
                Aktifkan mode gelap untuk tampilan yang lebih nyaman di malam hari
              </p>
            </div>
            <Switch id="dark-mode" />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>Simpan Pengaturan</Button>
      </div>
    </div>
  )
}


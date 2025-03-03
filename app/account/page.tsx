import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-muted">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                />
              </div>
              <Button size="sm">Ubah Foto</Button>
            </div>

            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nama Depan</Label>
                  <Input id="first-name" defaultValue="Budi" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Nama Belakang</Label>
                  <Input id="last-name" defaultValue="Santoso" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="budi@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" defaultValue="081234567890" />
              </div>

              <Button>Simpan Perubahan</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Ubah Password</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Password Saat Ini</Label>
              <Input id="current-password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password">Password Baru</Label>
              <Input id="new-password" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Konfirmasi Password Baru</Label>
              <Input id="confirm-password" type="password" />
            </div>

            <Button>Ubah Password</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


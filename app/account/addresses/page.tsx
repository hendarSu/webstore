import { Edit, MapPin, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock addresses data
const addresses = [
  {
    id: "1",
    name: "Rumah",
    recipient: "Budi Santoso",
    phone: "081234567890",
    address: "Jl. Merdeka No. 123, RT 01/RW 02",
    city: "Jakarta Selatan",
    province: "DKI Jakarta",
    postalCode: "12345",
    isDefault: true,
  },
  {
    id: "2",
    name: "Kantor",
    recipient: "Budi Santoso",
    phone: "081234567890",
    address: "Gedung Menara Tinggi Lt. 12, Jl. Sudirman No. 45",
    city: "Jakarta Pusat",
    province: "DKI Jakarta",
    postalCode: "10220",
    isDefault: false,
  },
]

export default function AddressesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Alamat Saya</h2>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Tambah Alamat
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <Card key={address.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {address.name}
                </CardTitle>
                {address.isDefault && (
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Utama</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="space-y-1 text-sm">
                <p className="font-medium">{address.recipient}</p>
                <p>{address.phone}</p>
                <p>{address.address}</p>
                <p>
                  {address.city}, {address.province}, {address.postalCode}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm" className="gap-1">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
              {!address.isDefault && (
                <Button variant="outline" size="sm">
                  Jadikan Utama
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


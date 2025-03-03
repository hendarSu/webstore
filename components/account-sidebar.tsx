"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CreditCard, LogOut, Package, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const menuItems = [
  {
    title: "Profil",
    href: "/account",
    icon: <User className="h-4 w-4 mr-2" />,
  },
  {
    title: "Pesanan Saya",
    href: "/account/orders",
    icon: <Package className="h-4 w-4 mr-2" />,
  },
  {
    title: "Alamat",
    href: "/account/addresses",
    icon: <CreditCard className="h-4 w-4 mr-2" />,
  },
  {
    title: "Pengaturan",
    href: "/account/settings",
    icon: <Settings className="h-4 w-4 mr-2" />,
  },
]

export function AccountSidebar() {
  const pathname = usePathname()

  return (
    <Card className="p-4">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.href}
            variant={pathname === item.href ? "default" : "ghost"}
            className="w-full justify-start"
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              {item.title}
            </Link>
          </Button>
        ))}

        <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
          <LogOut className="h-4 w-4 mr-2" />
          Keluar
        </Button>
      </div>
    </Card>
  )
}


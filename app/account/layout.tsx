import type React from "react"
import { Navbar } from "@/components/navbar"
import { AccountSidebar } from "@/components/account-sidebar"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-8">Akun Saya</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <AccountSidebar />
          </div>
          <div className="md:col-span-3">{children}</div>
        </div>
      </div>
    </div>
  )
}


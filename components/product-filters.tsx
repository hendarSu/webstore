"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

// Mock categories data
const categories = [
  { id: "keripik", name: "Keripik" },
  { id: "kacang", name: "Kacang & Biji-bijian" },
  { id: "makaroni", name: "Makaroni & Pasta" },
  { id: "cokelat", name: "Cokelat & Permen" },
  { id: "kue", name: "Kue & Biskuit" },
  { id: "minuman", name: "Minuman Serbuk" },
]

export function ProductFilters({ selectedCategory }: { selectedCategory?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set(name, value)
    } else {
      params.delete(name)
    }

    return params.toString()
  }

  const handleCategoryChange = (categoryId: string) => {
    router.push(`${pathname}?${createQueryString("category", categoryId === selectedCategory ? "" : categoryId)}`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filter Produk</h3>
        <Accordion type="multiple" defaultValue={["categories", "price"]}>
          <AccordionItem value="categories">
            <AccordionTrigger>Kategori</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={category.id === selectedCategory}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                    />
                    <Label htmlFor={`category-${category.id}`} className="text-sm font-normal cursor-pointer">
                      {category.name}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger>Harga</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="flex justify-between">
                  <span className="text-sm">Rp 0</span>
                  <span className="text-sm">Rp 100.000</span>
                </div>
                <Slider defaultValue={[0, 100000]} max={100000} step={5000} />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Min: Rp 0</span>
                  <span>Max: Rp 100.000</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}


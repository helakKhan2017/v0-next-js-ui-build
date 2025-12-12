"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/mock-data"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-secondary/30">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{product.category}</p>
            <h3 className="font-semibold text-foreground line-clamp-1">{product.name}</h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-foreground">${product.price.toFixed(2)}</span>
            <Button size="sm" onClick={() => onAddToCart(product)} className="gap-1">
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

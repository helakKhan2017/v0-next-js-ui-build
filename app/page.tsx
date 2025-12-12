"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/store/navbar"
import { HeroSection } from "@/components/store/hero-section"
import { CategoryTabs } from "@/components/store/category-tabs"
import { ProductGrid } from "@/components/store/product-grid"
import { mockProducts, type Product } from "@/lib/mock-data"

export default function StorefrontPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [cart, setCart] = useState<Product[]>([])

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return mockProducts
    return mockProducts.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cart.length} />

      <main>
        <HeroSection />

        <section className="container px-4 md:px-8 py-16">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Products</h2>
              <p className="text-muted-foreground">Handpicked organic essentials for your healthy lifestyle</p>
            </div>

            <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

            <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container px-4 md:px-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 NaturePure. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

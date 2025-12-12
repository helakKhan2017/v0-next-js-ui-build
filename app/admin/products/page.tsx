"use client"

import { useState } from "react"
import { mockProducts, type Product } from "@/lib/mock-data"
import { ProductsTable } from "@/components/admin/products-table"
import { AddProductDialog } from "@/components/admin/add-product-dialog"

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts)

  const handleAddProduct = (newProduct: Omit<Product, "id">) => {
    const product: Product = {
      ...newProduct,
      id: String(products.length + 1),
    }
    setProducts((prev) => [...prev, product])
  }

  const handleEditProduct = (product: Product) => {
    // Mock edit - just show alert for now
    alert(`Edit product: ${product.name}`)
  }

  const handleDeleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground mt-1">Manage your product inventory</p>
        </div>
        <AddProductDialog onAddProduct={handleAddProduct} />
      </div>

      <ProductsTable products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
    </div>
  )
}

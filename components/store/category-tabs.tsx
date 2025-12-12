"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { categories } from "@/lib/mock-data"

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex justify-center">
      <Tabs value={activeCategory} onValueChange={onCategoryChange}>
        <TabsList className="bg-secondary/50">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

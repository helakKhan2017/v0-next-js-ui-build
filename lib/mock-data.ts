// Mock data for e-commerce prototype
export interface Product {
  id: string
  name: string
  price: number
  category: "honey" | "dates" | "oils"
  image: string
  stock: number
  description: string
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Raw Wildflower Honey",
    price: 24.99,
    category: "honey",
    image: "/golden-wildflower-honey-jar.jpg",
    stock: 45,
    description: "Pure unprocessed wildflower honey",
  },
  {
    id: "2",
    name: "Manuka Honey Premium",
    price: 89.99,
    category: "honey",
    image: "/premium-manuka-honey-jar.jpg",
    stock: 12,
    description: "Authentic New Zealand Manuka honey",
  },
  {
    id: "3",
    name: "Acacia Honey",
    price: 32.99,
    category: "honey",
    image: "/light-acacia-honey-jar.jpg",
    stock: 28,
    description: "Light and delicate acacia honey",
  },
  {
    id: "4",
    name: "Medjool Dates Premium",
    price: 18.99,
    category: "dates",
    image: "/medjool-dates-in-bowl.jpg",
    stock: 60,
    description: "Large soft medjool dates",
  },
  {
    id: "5",
    name: "Deglet Noor Dates",
    price: 14.99,
    category: "dates",
    image: "/deglet-noor-dates-package.jpg",
    stock: 85,
    description: "Semi-dry dates with nutty flavor",
  },
  {
    id: "6",
    name: "Extra Virgin Olive Oil",
    price: 28.99,
    category: "oils",
    image: "/olive-oil-bottle-premium.jpg",
    stock: 35,
    description: "Cold-pressed extra virgin olive oil",
  },
  {
    id: "7",
    name: "Black Seed Oil",
    price: 34.99,
    category: "oils",
    image: "/black-seed-oil-bottle.jpg",
    stock: 22,
    description: "Pure cold-pressed black seed oil",
  },
  {
    id: "8",
    name: "Coconut Oil Organic",
    price: 19.99,
    category: "oils",
    image: "/organic-coconut-oil-jar.jpg",
    stock: 50,
    description: "Virgin organic coconut oil",
  },
]

export const categories = [
  { id: "all", name: "All Products" },
  { id: "honey", name: "Honey" },
  { id: "dates", name: "Dates" },
  { id: "oils", name: "Oils" },
] as const

import { View } from "react-native"
import { ProductCard } from "./ProductCard"

interface ProductGridProps {
  onBuyNow: (productName: string, price: string) => void
  onProductPress: (productName: string) => void
}

export function ProductGrid({ onBuyNow, onProductPress }: ProductGridProps) {
  const products = [
    {
      id: "chocolate-cookies",
      name: "Freshly baked chocolate chip cookies",
      description: "made with organic ingredients",
      price: "₹299",
      rating: 4.8,
      reviews: 24,
      image: "🍪",
      backgroundColor: "#fef3c7",
    },
    {
      id: "wool-scarf",
      name: "Hand-knitted Wool Scarf",
      description: "Cozy winter scarf made from premium wool, perfect for cold days",
      price: "₹899",
      rating: 4.9,
      reviews: 18,
      image: "🧣",
      backgroundColor: "#fed7aa",
    },
    {
      id: "face-cream",
      name: "Natural Face Cream",
      description: "Moisturizing face cream made with natural herbs and essential oils",
      price: "₹549",
      rating: 4.7,
      reviews: 31,
      image: "🧴",
      backgroundColor: "#dcfce7",
    },
    {
      id: "hair-oil",
      name: "Herbal Hair Oil",
      description: "Nourishing hair oil blend with coconut, amla, and fenugreek",
      price: "₹329",
      rating: 4.6,
      reviews: 22,
      image: "🫗",
      backgroundColor: "#fef3c7",
    },
    {
      id: "soap-set",
      name: "Handmade Soap Set",
      description: "Set of 3 natural soaps with lavender, neem and tea tree",
      price: "₹449",
      rating: 4.8,
      reviews: 15,
      image: "🧼",
      backgroundColor: "#e0e7ff",
    },
    {
      id: "pickles",
      name: "Homemade Pickles",
      description: "Traditional Indian pickle made with fresh vegetables and spices",
      price: "₹249",
      rating: 4.9,
      reviews: 28,
      image: "🥒",
      backgroundColor: "#fed7aa",
    },
    {
      id: "basket",
      name: "Handwoven Basket",
      description: "Multi-purpose storage basket made from natural bamboo",
      price: "₹649",
      rating: 4.7,
      reviews: 12,
      image: "🧺",
      backgroundColor: "#fef3c7",
    },
    {
      id: "coffee-mug",
      name: "Ceramic Coffee Mug",
      description: "Hand painted ceramic mug with unique designs, microwave safe",
      price: "₹399",
      rating: 4.8,
      reviews: 19,
      image: "☕",
      backgroundColor: "#e0e7ff",
    },
  ]

  return (
    <View className="px-4 mt-4">
      <View className="flex-row flex-wrap justify-between">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onBuyNow={() => onBuyNow(product.name, product.price)}
            onProductPress={() => onProductPress(product.name)}
          />
        ))}
      </View>
    </View>
  )
}

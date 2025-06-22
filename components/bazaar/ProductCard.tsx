import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface Product {
  id: string
  name: string
  description: string
  price: string
  rating: number
  reviews: number
  image: string
  backgroundColor: string
}

interface ProductCardProps {
  product: Product
  onBuyNow: () => void
  onProductPress: () => void
}

export function ProductCard({ product, onBuyNow, onProductPress }: ProductCardProps) {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Ionicons key={i} name="star" size={12} color="#fbbf24" />)
    }

    if (hasHalfStar) {
      stars.push(<Ionicons key="half" name="star-half" size={12} color="#fbbf24" />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Ionicons key={`empty-${i}`} name="star-outline" size={12} color="#d1d5db" />)
    }

    return stars
  }

  return (
    <TouchableOpacity
      className="mb-4"
      style={{
        width: "48%",
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        overflow: "hidden",
      }}
      onPress={onProductPress}
      activeOpacity={0.8}
    >
      {/* Product Image */}
      <View
        className="items-center justify-center"
        style={{
          height: 120,
          backgroundColor: product.backgroundColor,
        }}
      >
        <Text style={{ fontSize: 40 }}>{product.image}</Text>
      </View>

      {/* Product Details */}
      <View className="p-3">
        <Text className="text-gray-800 font-semibold text-sm mb-1" numberOfLines={2}>
          {product.name}
        </Text>
        <Text className="text-gray-600 text-xs mb-2" numberOfLines={2}>
          {product.description}
        </Text>

        {/* Price */}
        <Text className="text-green-600 font-bold text-lg mb-2">{product.price}</Text>

        {/* Rating */}
        <View className="flex-row items-center mb-3">
          <View className="flex-row mr-2">{renderStars(product.rating)}</View>
          <Text className="text-gray-500 text-xs">({product.reviews} reviews)</Text>
        </View>

        {/* Buy Now Button */}
        <TouchableOpacity
          className="flex-row items-center justify-center py-2"
          style={{
            backgroundColor: "#ddd6fe",
            borderRadius: 8,
          }}
          onPress={onBuyNow}
          activeOpacity={0.8}
        >
          <Text className="text-purple-700 font-medium text-sm mr-2">BUY NOW</Text>
          <Ionicons name="arrow-forward" size={14} color="#8b5cf6" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

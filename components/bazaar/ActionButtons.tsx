import { Text, TouchableOpacity, View } from "react-native"

interface ActionButtonsProps {
  onStartSelling: () => void
  onExploreProducts: () => void
}

export function ActionButtons({ onStartSelling, onExploreProducts }: ActionButtonsProps) {
  return (
    <View className="flex-row px-4 mt-4">
      <TouchableOpacity
        className="flex-1 mr-2 py-3 px-6"
        style={{
          backgroundColor: "#8b5cf6",
          borderRadius: 25,
        }}
        onPress={onStartSelling}
        activeOpacity={0.8}
      >
        <Text className="text-white font-semibold text-center">Start Selling</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 ml-2 py-3 px-6"
        style={{
          backgroundColor: "#ddd6fe",
          borderRadius: 25,
        }}
        onPress={onExploreProducts}
        activeOpacity={0.8}
      >
        <Text className="text-purple-700 font-semibold text-center">Explore Products</Text>
      </TouchableOpacity>
    </View>
  )
}

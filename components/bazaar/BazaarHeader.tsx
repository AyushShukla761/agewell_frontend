import { Text, View } from "react-native"

export function BazaarHeader() {
  return (
    <View
      className="mx-4 mt-4 p-6"
      style={{
        backgroundColor: "#e5e7eb",
        borderRadius: 12,
      }}
    >
      <View className="flex-row">
        <View className="flex-1">
          <Text className="text-gray-800 font-bold text-xl mb-2">
            Discover{"\n"}Heartmade{"\n"}Creations
          </Text>
          <Text className="text-gray-600 text-sm">
            Buy & Sell handmade,{"\n"}homegrown, and beautiful{"\n"}products.
          </Text>
        </View>
        <View className="ml-4">
          {/* Illustration placeholder - you can replace with actual image */}
          <View
            className="items-center justify-center"
            style={{
              width: 120,
              height: 80,
              backgroundColor: "#ddd6fe",
              borderRadius: 12,
            }}
          >
            <Text className="text-purple-600 text-xs text-center">Crafting{"\n"}Illustration</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

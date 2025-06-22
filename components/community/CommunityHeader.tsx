import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"

export function CommunityHeader() {
  return (
    <View
      className="p-6 mx-4 mt-4"
      style={{
        backgroundColor: "#8b5cf6",
        borderRadius: 12,
      }}
    >
      <View className="flex-row items-center mb-2">
        <Ionicons name="star" size={20} color="#fbbf24" />
        <Text className="text-white font-bold text-lg ml-2">Golden Years Community</Text>
      </View>
      <Text className="text-purple-100 text-sm">
        Connect, share, and celebrate life's new chapter with fellow seniors who understand your journey.
      </Text>
    </View>
  )
}

import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"

export function TripsHeader() {
  return (
    <View
      className="p-6 mx-4 mt-4"
      style={{
        backgroundColor: "#8b5cf6",
        borderRadius: 12,
      }}
    >
      <View className="flex-row items-center mb-2">
        <Ionicons name="bus" size={24} color="white" />
        <Text className="text-white font-bold text-xl ml-2">Trips</Text>
      </View>
      <Text className="text-purple-100 text-sm">Discover. Connect. Explore Together</Text>
    </View>
  )
}

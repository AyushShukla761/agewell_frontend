import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"

export function VolunteerHeader() {
  return (
    <View
      className="p-6 mx-4 mt-4"
      style={{
        backgroundColor: "#8b5cf6",
        borderRadius: 12,
      }}
    >
      <View className="flex-row items-center mb-2">
        <Ionicons name="heart" size={20} color="#fbbf24" />
        <Text className="text-white font-bold text-lg ml-2">Volunteering Hub</Text>
      </View>
      <Text className="text-purple-100 text-sm">Finding meaningful opportunities to make a difference</Text>
    </View>
  )
}

import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"

export function LearnSpaceHeader() {
  return (
    <View className="mx-4 mt-4" style={{ borderRadius: 12, overflow: "hidden" }}>
      <LinearGradient
        colors={["#8b5cf6", "#f97316"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ padding: 24, borderRadius: 12 }}
      >
        <View className="flex-row items-center mb-2">
          <Ionicons name="school" size={24} color="white" />
          <Text className="text-white font-bold text-xl ml-2">Senior LearnSpace</Text>
        </View>
        <Text className="text-white text-sm opacity-90">Discover new skills and share your wisdom</Text>
      </LinearGradient>
    </View>
  )
}

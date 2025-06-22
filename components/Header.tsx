import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface HeaderProps {
  onEmergency: () => void
}

export function Header({ onEmergency }: HeaderProps) {
  const handleMenuPress = () => {
    console.log("Menu pressed")
  }

  return (
    <View
      className="flex-row justify-between items-center px-4 py-4"
      style={{
        backgroundColor: "#f3f4f6",
        borderBottomWidth: 1,
        borderBottomColor: "#d1d5db",
      }}
    >
      <TouchableOpacity onPress={handleMenuPress} className="p-1">
        <Ionicons name="menu" size={24} color="#374151" />
      </TouchableOpacity>

      <TouchableOpacity
        className="px-4 py-2"
        style={{
          backgroundColor: "#ef4444",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#dc2626",
        }}
        onPress={onEmergency}
        activeOpacity={0.8}
      >
        <Text className="text-white font-semibold text-sm">Emergency</Text>
      </TouchableOpacity>
    </View>
  )
}

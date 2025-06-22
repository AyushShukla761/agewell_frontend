import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface NavigationFooterProps {
  onActionPress: (action: string) => void
}

export function NavigationFooter({ onActionPress }: NavigationFooterProps) {
  return (
    <View
      className="px-6 py-4 flex-row justify-between items-center"
      style={{
        backgroundColor: "#f3f4f6",
        borderTopWidth: 1,
        borderTopColor: "#d1d5db",
      }}
    >
      <TouchableOpacity className="p-2" onPress={() => onActionPress("audio")} activeOpacity={0.7}>
        <Ionicons name="headset" size={28} color="#6B7280" />
      </TouchableOpacity>

      <TouchableOpacity className="p-2" onPress={() => onActionPress("settings")} activeOpacity={0.7}>
        <Ionicons name="settings" size={28} color="#6B7280" />
      </TouchableOpacity>

      <TouchableOpacity
        className="px-6 py-3"
        style={{
          backgroundColor: "#4b5563",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#374151",
        }}
        onPress={() => onActionPress("help")}
        activeOpacity={0.8}
      >
        <Text className="text-white font-semibold text-sm">HELP</Text>
      </TouchableOpacity>
    </View>
  )
}

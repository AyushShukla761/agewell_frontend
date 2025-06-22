import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface ActionButtonsProps {
  onJoinTrip: () => void
  onOrganizeTrip: () => void
}

export function ActionButtons({ onJoinTrip, onOrganizeTrip }: ActionButtonsProps) {
  return (
    <View className="flex-row px-4 mt-4">
      <TouchableOpacity
        className="flex-1 mr-2 p-4 items-center"
        style={{
          backgroundColor: "#ddd6fe",
          borderRadius: 12,
        }}
        onPress={onJoinTrip}
        activeOpacity={0.8}
      >
        <Ionicons name="airplane" size={24} color="#8b5cf6" />
        <Text className="text-purple-700 font-medium text-base mt-2">Join Trip</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 ml-2 p-4 items-center"
        style={{
          backgroundColor: "#ddd6fe",
          borderRadius: 12,
        }}
        onPress={onOrganizeTrip}
        activeOpacity={0.8}
      >
        <Ionicons name="map" size={24} color="#8b5cf6" />
        <Text className="text-purple-700 font-medium text-base mt-2">Organize Trip</Text>
      </TouchableOpacity>
    </View>
  )
}

import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity } from "react-native"

interface CreateOpportunityCardProps {
  onPress: () => void
}

export function CreateOpportunityCard({ onPress }: CreateOpportunityCardProps) {
  return (
    <TouchableOpacity
      className="flex-1 mr-2 p-4 items-center justify-center"
      style={{
        backgroundColor: "#f87171",
        borderRadius: 12,
        minHeight: 160,
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name="add-circle" size={40} color="white" />
      <Text className="text-white font-bold text-base mt-3 text-center">Create New Opportunity</Text>
      <Text className="text-red-100 text-sm mt-2 text-center">Start your own volunteer initiative</Text>
    </TouchableOpacity>
  )
}

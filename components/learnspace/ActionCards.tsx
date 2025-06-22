import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface ActionCardsProps {
  onRequestSkill: () => void
  onOfferTeach: () => void
}

export function ActionCards({ onRequestSkill, onOfferTeach }: ActionCardsProps) {
  return (
    <View className="flex-row px-4 mt-4">
      {/* Request a Skill Card */}
      <TouchableOpacity
        className="flex-1 mr-2 p-4"
        style={{
          backgroundColor: "white",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#e5e7eb",
        }}
        onPress={onRequestSkill}
        activeOpacity={0.8}
      >
        <View className="items-center mb-3">
          <Ionicons name="bulb" size={32} color="#f59e0b" />
        </View>
        <Text className="text-orange-600 font-bold text-base text-center mb-2">Request a Skill</Text>
        <Text className="text-gray-600 text-sm text-center mb-4">
          Looking to learn something new? Tell us what skill you'd like to master and we'll help connect you with
          experienced instructors.
        </Text>
        <TouchableOpacity
          className="py-2 px-4"
          style={{
            backgroundColor: "#f59e0b",
            borderRadius: 20,
          }}
          onPress={onRequestSkill}
          activeOpacity={0.8}
        >
          <Text className="text-white font-medium text-sm text-center">Request Learning</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Offer to Teach Card */}
      <TouchableOpacity
        className="flex-1 ml-2 p-4"
        style={{
          backgroundColor: "white",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#e5e7eb",
        }}
        onPress={onOfferTeach}
        activeOpacity={0.8}
      >
        <View className="items-center mb-3">
          <Ionicons name="book" size={32} color="#ef4444" />
        </View>
        <Text className="text-red-600 font-bold text-base text-center mb-2">Offer to Teach</Text>
        <Text className="text-gray-600 text-sm text-center mb-4">
          Share your expertise with eager learners! Offer to teach a skill you've mastered and help others grow.
        </Text>
        <TouchableOpacity
          className="py-2 px-4"
          style={{
            backgroundColor: "#ef4444",
            borderRadius: 20,
          }}
          onPress={onOfferTeach}
          activeOpacity={0.8}
        >
          <Text className="text-white font-medium text-sm text-center">Offer Teaching</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  )
}

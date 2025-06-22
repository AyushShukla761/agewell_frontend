import { Text, TouchableOpacity, View } from "react-native"

interface Opportunity {
  id: string
  title: string
  organization: string
  description: string
  requirements: string[]
  color: string
  type: string
}

interface OpportunityCardProps {
  opportunity: Opportunity
  onPress: () => void
}

export function OpportunityCard({ opportunity, onPress }: OpportunityCardProps) {
  return (
    <TouchableOpacity
      className="flex-1 ml-2 p-4"
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        minHeight: 160,
      }}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Header with colored dot */}
      <View className="flex-row items-center mb-2">
        <View className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: opportunity.color }} />
        <Text className="text-gray-800 font-bold text-sm flex-1" numberOfLines={1}>
          {opportunity.title}
        </Text>
      </View>

      {/* Organization */}
      <Text className="text-gray-600 text-xs mb-2">{opportunity.organization}</Text>

      {/* Description */}
      <Text className="text-gray-700 text-xs mb-3 flex-1" numberOfLines={3}>
        {opportunity.description}
      </Text>

      {/* Requirements Tags */}
      <View className="flex-row flex-wrap mb-3">
        {opportunity.requirements.slice(0, 2).map((req, index) => (
          <View
            key={index}
            className="px-2 py-1 mr-1 mb-1"
            style={{
              backgroundColor: "#f3f4f6",
              borderRadius: 10,
            }}
          >
            <Text className="text-gray-600 text-xs">{req}</Text>
          </View>
        ))}
      </View>

      {/* Action Button */}
      <TouchableOpacity
        className="py-2 px-3 self-end"
        style={{
          backgroundColor: opportunity.color,
          borderRadius: 15,
        }}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text className="text-white text-xs font-medium">Apply</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

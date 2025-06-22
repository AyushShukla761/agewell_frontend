import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface Trip {
  id: string
  title: string
  destination: string
  dates: string
  spots: string
  rating: number
  price: string
  description: string
  travelers: string[]
  joinedCount: string
  backgroundColor: string
  tag: string
  tagColor: string
}

interface TripCardProps {
  trip: Trip
  onTripPress: (tripTitle: string) => void
  onJoinAdventure: (tripTitle: string) => void
}

export function TripCard({ trip, onTripPress, onJoinAdventure }: TripCardProps) {
  return (
    <TouchableOpacity
      className="mb-4"
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        overflow: "hidden",
      }}
      onPress={() => onTripPress(trip.title)}
      activeOpacity={0.8}
    >
      {/* Header */}
      <View className="p-6 relative" style={{ backgroundColor: trip.backgroundColor }}>
        <View className="absolute top-4 left-4">
          <View
            className="px-3 py-1"
            style={{
              backgroundColor: trip.tagColor,
              borderRadius: 12,
            }}
          >
            <Text className="text-white text-xs font-medium">{trip.tag}</Text>
          </View>
        </View>
        <View className="absolute top-4 right-4">
          <Text className="text-white font-bold text-lg">{trip.price}</Text>
        </View>
        <View className="mt-8">
          <Text className="text-white font-bold text-xl">{trip.destination}</Text>
        </View>
      </View>

      {/* Content */}
      <View className="p-4">
        {/* Title */}
        <Text className="text-gray-800 font-bold text-lg mb-2">{trip.title}</Text>

        {/* Trip Details */}
        <View className="flex-row items-center mb-3">
          <Ionicons name="calendar" size={16} color="#6b7280" />
          <Text className="text-gray-600 text-sm ml-2">{trip.dates}</Text>
          <Ionicons name="people" size={16} color="#6b7280" style={{ marginLeft: 16 }} />
          <Text className="text-gray-600 text-sm ml-2">{trip.spots}</Text>
          <Ionicons name="star" size={16} color="#f59e0b" style={{ marginLeft: 16 }} />
          <Text className="text-gray-600 text-sm ml-2">{trip.rating}</Text>
        </View>

        {/* Description */}
        <Text className="text-gray-600 text-sm mb-4">{trip.description}</Text>

        {/* Travelers */}
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            {trip.travelers.map((traveler, index) => (
              <View
                key={index}
                className="w-8 h-8 rounded-full items-center justify-center mr-2"
                style={{
                  backgroundColor: index < trip.travelers.length - 1 ? "#8b5cf6" : "#e5e7eb",
                }}
              >
                <Text
                  className={`text-xs font-bold ${index < trip.travelers.length - 1 ? "text-white" : "text-gray-600"}`}
                >
                  {traveler}
                </Text>
              </View>
            ))}
            <Text className="text-gray-600 text-sm ml-2">{trip.joinedCount}</Text>
          </View>
        </View>

        {/* Join Button */}
        <TouchableOpacity
          className="py-3"
          style={{
            backgroundColor: "#ddd6fe",
            borderRadius: 8,
          }}
          onPress={() => onJoinAdventure(trip.title)}
          activeOpacity={0.8}
        >
          <Text className="text-purple-700 font-medium text-center">Join This Adventure</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

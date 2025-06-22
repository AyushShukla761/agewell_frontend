import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { TripCard } from "./TripCard"

interface FeaturedTripsProps {
  onTripPress: (tripTitle: string) => void
  onJoinAdventure: (tripTitle: string) => void
}

export function FeaturedTrips({ onTripPress, onJoinAdventure }: FeaturedTripsProps) {
  const featuredTrip = {
    id: "tuscany-wine-culture",
    title: "Tuscany Wine & Culture Tour",
    destination: "Tuscany, Italy",
    dates: "May 15-22",
    spots: "8/12 spots",
    rating: 4.9,
    price: "₹45,500",
    description:
      "Experience authentic Tuscan culture with wine tastings, cooking classes, and visits to historic villages. Perfect for food lovers and culture enthusiasts.",
    travelers: ["M", "S", "J", "+5"],
    joinedCount: "8 travelers joined",
    backgroundColor: "#f59e0b",
    tag: "Premium",
    tagColor: "#fbbf24",
  }

  return (
    <View className="px-4 mt-4">
      <View className="flex-row items-center mb-3">
        <Ionicons name="star" size={20} color="#f59e0b" />
        <Text className="text-gray-800 font-bold text-lg ml-2">Featured Trips</Text>
      </View>

      <TripCard trip={featuredTrip} onTripPress={onTripPress} onJoinAdventure={onJoinAdventure} />
    </View>
  )
}

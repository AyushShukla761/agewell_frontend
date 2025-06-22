import { Text, View } from "react-native"
import { TripCard } from "./TripCard"

interface AvailableTripsProps {
  onTripPress: (tripTitle: string) => void
  onJoinAdventure: (tripTitle: string) => void
}

export function AvailableTrips({ onTripPress, onJoinAdventure }: AvailableTripsProps) {
  const availableTrips = [
    {
      id: "swiss-alps-scenic",
      title: "Swiss Alps Scenic Journey",
      destination: "Swiss Alps",
      dates: "Jul 12-19",
      spots: "6/8 spots",
      rating: 4.8,
      price: "₹38,750",
      description:
        "Breathtaking mountain railways, charming villages, and pristine alpine lakes await in this comfortable Swiss adventure.",
      travelers: ["D", "E", "F", "+3"],
      joinedCount: "6 travelers joined",
      backgroundColor: "#8b5cf6",
      tag: "Popular",
      tagColor: "#a855f7",
    },
    {
      id: "kyoto-cultural-immersion",
      title: "Kyoto Cultural Immersion",
      destination: "Kyoto, Japan",
      dates: "Aug 5-14",
      spots: "2/12 spots",
      rating: 4.9,
      price: "₹32,500",
      description:
        "Discover ancient temples, traditional tea ceremonies, and beautiful gardens in Japan's cultural capital.",
      travelers: ["G", "H"],
      joinedCount: "2 travelers joined",
      backgroundColor: "#ec4899",
      tag: "Cultural",
      tagColor: "#f472b6",
    },
  ]

  return (
    <View className="px-4 mt-4">
      <Text className="text-gray-800 font-bold text-lg mb-3">Available Trips</Text>

      {availableTrips.map((trip) => (
        <TripCard key={trip.id} trip={trip} onTripPress={onTripPress} onJoinAdventure={onJoinAdventure} />
      ))}
    </View>
  )
}

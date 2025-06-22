import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"
import type { Event } from "../app/senior"

interface UpcomingEventsProps {
  events: Event[]
  onEventPress: (event: Event) => void
  loading?: boolean
}

export function UpcomingEvents({ events, onEventPress, loading }: UpcomingEventsProps) {
  return (
    <View
      className="p-4 mt-4 mb-4"
      style={{
        backgroundColor: "#d5dbda",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "white",
      }}
    >
      <Text className="text-lg font-semibold mb-3 text-gray-800">Upcoming Events</Text>

      {events.map((event) => (
        <TouchableOpacity
          key={event.id}
          className="flex-row items-center justify-between py-2"
          onPress={() => onEventPress(event)}
          activeOpacity={0.7}
        >
          <View className="flex-row items-center flex-1">
            <Ionicons name="chevron-forward" size={16} color="#666" />
            <Text className="ml-2 text-gray-700 text-base">{event.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

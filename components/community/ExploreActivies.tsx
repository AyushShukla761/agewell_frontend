import { Text, TouchableOpacity, View } from "react-native"

interface ExploreActivitiesProps {
  onActionPress: (action: string) => void
}

export function ExploreActivities({ onActionPress }: ExploreActivitiesProps) {
  const activities = [
    { name: "Morning Walk", status: "Join", color: "#10b981" },
    { name: "Chess Club", status: "Full", color: "#6b7280" },
    { name: "Art Class", status: "Join", color: "#10b981" },
    { name: "Music Hour", status: "Join", color: "#10b981" },
    { name: "Yoga Session", status: "Wait", color: "#f59e0b" },
    { name: "Book Discussion", status: "Join", color: "#10b981" },
  ]

  return (
    <View
      className="flex-1 ml-2 p-4"
      style={{
        backgroundColor: "#f0fdf4",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#bbf7d0",
      }}
    >
      <Text className="text-green-800 font-bold text-base mb-3">Explore Activities</Text>

      {activities.map((activity, index) => (
        <View key={index} className="flex-row items-center justify-between py-1 mb-1">
          <Text className="text-green-700 text-sm flex-1">{activity.name}</Text>
          <TouchableOpacity
            className="px-3 py-1"
            style={{
              backgroundColor: activity.color,
              borderRadius: 12,
            }}
            onPress={() => onActionPress(`activity-${activity.name.toLowerCase().replace(" ", "-")}`)}
            activeOpacity={0.8}
            disabled={activity.status === "Full"}
          >
            <Text className="text-white text-xs font-medium">{activity.status}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

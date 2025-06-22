import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface JoinGroupsProps {
  onActionPress: (action: string) => void
}

export function JoinGroups({ onActionPress }: JoinGroupsProps) {
  const groups = [
    { name: "Book Reading", members: 45, icon: "book" as const },
    { name: "Gardening Tips", members: 32, icon: "leaf" as const },
    { name: "Cooking Club", members: 28, icon: "restaurant" as const },
    { name: "Travel Stories", members: 51, icon: "airplane" as const },
  ]

  return (
    <View
      className="flex-1 mr-2 p-4"
      style={{
        backgroundColor: "#ecfdf5",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#d1fae5",
      }}
    >
      <Text className="text-green-800 font-bold text-base mb-3">Join Groups</Text>

      {groups.map((group, index) => (
        <TouchableOpacity
          key={index}
          className="flex-row items-center justify-between py-2 mb-1"
          onPress={() => onActionPress(`group-${group.name.toLowerCase().replace(" ", "-")}`)}
          activeOpacity={0.7}
        >
          <View className="flex-row items-center flex-1">
            <Ionicons name={group.icon} size={16} color="#059669" />
            <Text className="text-green-700 text-sm ml-2">{group.name}</Text>
          </View>
          <Text className="text-green-600 text-xs">{group.members}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

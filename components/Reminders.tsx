import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"
import type { Reminder } from "../app/senior/page"

interface RemindersProps {
  reminders: Reminder[]
  onToggle: (id: string) => void
  loading?: boolean
}

export function Reminders({ reminders, onToggle, loading }: RemindersProps) {
  return (
    <View
      className="p-4 mb-4"
      style={{
        backgroundColor: "#d5dbda",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "white",
      }}
    >
      <Text className="text-lg font-semibold mb-3 text-gray-800">Reminders</Text>

      {reminders.map((reminder) => (
        <TouchableOpacity
          key={reminder.id}
          className="flex-row items-center py-2"
          onPress={() => onToggle(reminder.id)}
          activeOpacity={0.7}
        >
          <View
            className="mr-3 items-center justify-center"
            style={{
              width: 20,
              height: 20,
              borderWidth: 2,
              borderColor: "#6b7280",
              borderRadius: 10,
              backgroundColor: reminder.completed ? "#10B981" : "transparent",
            }}
          >
            {reminder.completed && <Ionicons name="checkmark" size={12} color="white" />}
          </View>
          <Text
            className={`flex-1 text-base ${reminder.completed ? "text-gray-500" : "text-gray-700"}`}
            style={reminder.completed ? { textDecorationLine: "line-through" } : {}}
          >
            {reminder.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

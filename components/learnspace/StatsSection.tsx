import { Text, View } from "react-native"

export function StatsSection() {
  const stats = [
    { value: "6", label: "Expert Courses" },
    { value: "500+", label: "Students Enrolled" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" },
  ]

  return (
    <View
      className="mx-4 mt-4 p-4"
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e5e7eb",
      }}
    >
      <View className="flex-row justify-around">
        {stats.map((stat, index) => (
          <View key={index} className="items-center">
            <Text className="text-2xl font-bold text-blue-600">{stat.value}</Text>
            <Text className="text-gray-600 text-sm mt-1 text-center">{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

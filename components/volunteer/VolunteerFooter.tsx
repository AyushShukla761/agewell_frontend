import { Text, View } from "react-native"

export function VolunteerFooter() {
  return (
    <View className="px-4 mb-6">
      {/* Inspirational Quote */}
      <View
        className="p-4 mb-4"
        style={{
          backgroundColor: "#e5e7eb",
          borderRadius: 12,
        }}
      >
        <Text className="text-gray-700 text-center text-sm italic">
          "Stand up, when motivated by millions of people can transform the world"
        </Text>
      </View>

      {/* Hindi Text */}
      <View className="items-center">
        <Text className="text-base text-gray-700 text-center">"रिटायरमेंट जीवन की नई शुरुआत"</Text>
      </View>
    </View>
  )
}

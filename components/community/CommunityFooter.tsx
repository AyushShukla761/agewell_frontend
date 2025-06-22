import { Text, View } from "react-native"

export function CommunityFooter() {
  return (
    <View className="px-4 mb-6">
      {/* Dark Footer Section */}
      <View
        className="p-4 mb-4"
        style={{
          backgroundColor: "#374151",
          borderRadius: 12,
        }}
      >
        <Text className="text-white text-center text-sm">Building connections that matter in your golden years</Text>
      </View>

      {/* Hindi Text */}
      <View className="items-center">
        <Text className="text-base text-gray-700 text-center">"रिटायरमेंट जीवन की नई शुरुआत"</Text>
      </View>
    </View>
  )
}

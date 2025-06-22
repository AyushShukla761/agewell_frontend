import { Text, TouchableOpacity, View } from "react-native"

interface AgeVerificationProps {
  onJoinCommunity: () => void
}

export function AgeVerification({ onJoinCommunity }: AgeVerificationProps) {
  return (
    <View className="px-4 py-6">
      <Text className="text-center text-gray-700 text-base mb-4 px-4">
        Age is all about of mind over matter. If you don't mind, it doesn't matter!
      </Text>

      <TouchableOpacity
        className="mx-8 py-3 px-6"
        style={{
          backgroundColor: "#10b981",
          borderRadius: 25,
        }}
        onPress={onJoinCommunity}
        activeOpacity={0.8}
      >
        <Text className="text-white font-semibold text-center text-base">Join Community</Text>
      </TouchableOpacity>
    </View>
  )
}

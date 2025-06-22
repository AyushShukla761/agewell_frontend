import { Text, TouchableOpacity, View } from "react-native"

interface ShareYourStoryProps {
  onActionPress: (action: string) => void
}

export function ShareYourStory({ onActionPress }: ShareYourStoryProps) {
  return (
    <View
      className="flex-1 mr-2 p-4"
      style={{
        backgroundColor: "#dbeafe",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#bfdbfe",
      }}
    >
      <Text className="text-blue-800 font-bold text-base mb-3">Share Your Story</Text>

      <Text className="text-blue-700 text-sm mb-3">
        Tell us about your life experiences, wisdom, and memorable moments that have shaped who you are today.
      </Text>

      <TouchableOpacity
        className="py-2 px-4 mt-auto"
        style={{
          backgroundColor: "#3b82f6",
          borderRadius: 20,
        }}
        onPress={() => onActionPress("share-story")}
        activeOpacity={0.8}
      >
        <Text className="text-white font-medium text-sm text-center">Start with Community</Text>
      </TouchableOpacity>
    </View>
  )
}

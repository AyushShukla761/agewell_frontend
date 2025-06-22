import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface CommunityStoriesProps {
  onActionPress: (action: string) => void
}

export function CommunityStories({ onActionPress }: CommunityStoriesProps) {
  const stories = [
    { id: 1, author: "Margaret", preview: "My garden has been my sanctuary for 40 years...", likes: 12 },
    { id: 2, author: "Robert", preview: "Teaching my grandson to fish reminded me...", likes: 8 },
    { id: 3, author: "Helen", preview: "Starting yoga at 65 changed my life...", likes: 15 },
  ]

  return (
    <View
      className="flex-1 ml-2 p-4"
      style={{
        backgroundColor: "#f3e8ff",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e9d5ff",
      }}
    >
      <Text className="text-purple-800 font-bold text-base mb-3">Community Stories</Text>

      {stories.map((story) => (
        <TouchableOpacity
          key={story.id}
          className="mb-3 p-2"
          style={{
            backgroundColor: "white",
            borderRadius: 8,
          }}
          onPress={() => onActionPress(`story-${story.id}`)}
          activeOpacity={0.7}
        >
          <Text className="text-purple-800 font-medium text-xs mb-1">{story.author}</Text>
          <Text className="text-purple-700 text-xs mb-2" numberOfLines={2}>
            {story.preview}
          </Text>
          <View className="flex-row items-center">
            <Ionicons name="heart" size={12} color="#ec4899" />
            <Text className="text-purple-600 text-xs ml-1">{story.likes}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

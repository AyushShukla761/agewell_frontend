import { View } from "react-native"
import { CommunityStories } from "./CommunityStories"
import { ExploreActivities } from "./ExploreActivies"
import { JoinGroups } from "./JoinGroups"
import { ShareYourStory } from "./ShareYourStory"

interface CommunityGridProps {
  onActionPress: (action: string) => void
}

export function CommunityGrid({ onActionPress }: CommunityGridProps) {
  return (
    <View className="px-4">
      {/* Top Row */}
      <View className="flex-row mb-4">
        <ShareYourStory onActionPress={onActionPress} />
        <CommunityStories onActionPress={onActionPress} />
      </View>

      {/* Bottom Row */}
      <View className="flex-row mb-4">
        <JoinGroups onActionPress={onActionPress} />
        <ExploreActivities onActionPress={onActionPress} />
      </View>
    </View>
  )
}

import { View } from "react-native"
import { CreateOpportunityCard } from "./CreateOpportunityCard"
import { OpportunityCard } from "./OpportunityCard"


interface OpportunityGridProps {
  onOpportunityPress: (opportunity: string) => void
}

export function OpportunityGrid({ onOpportunityPress }: OpportunityGridProps) {
  const opportunities = [
    {
      id: "community-garden",
      title: "Community Garden Project",
      organization: "Green Spaces Initiative",
      description: "Help maintain and develop community gardens. Tasks include planting, watering, and harvesting.",
      requirements: ["Physical activity", "Outdoor work", "Weekend availability"],
      color: "#10b981",
      type: "Environment",
    },
    {
      id: "book-cleanup",
      title: "Book Cleanup Initiative",
      organization: "City Library",
      description:
        "Assist in organizing and cleaning books in local libraries. Help create a better reading environment.",
      requirements: ["Attention to detail", "Indoor work", "Flexible hours"],
      color: "#3b82f6",
      type: "Community",
    },
    {
      id: "food-distribution",
      title: "Food Distribution Helper",
      organization: "Food Bank Network",
      description: "Support food distribution to families in need. Help sort, pack, and distribute food items.",
      requirements: ["Physical activity", "Team work", "Morning shifts"],
      color: "#10b981",
      type: "Community",
    },
    {
      id: "hospital-companion",
      title: "Hospital Companion",
      organization: "City General Hospital",
      description: "Provide companionship and support to patients. Engage in conversations and light activities.",
      requirements: ["Good communication", "Empathy", "Health clearance"],
      color: "#3b82f6",
      type: "Healthcare",
    },
    {
      id: "senior-care",
      title: "Senior Care Assistant",
      organization: "Golden Age Center",
      description:
        "Assist elderly residents with daily activities and provide companionship during recreational activities.",
      requirements: ["Patience", "Care experience", "Background check"],
      color: "#10b981",
      type: "Healthcare",
    },
    {
      id: "animal-shelter",
      title: "Animal Shelter Helper",
      organization: "Paws & Hearts Shelter",
      description: "Care for rescued animals by feeding, cleaning, and providing basic care and attention.",
      requirements: ["Animal love", "Physical work", "Weekend shifts"],
      color: "#10b981",
      type: "Community",
    },
    {
      id: "digital-literacy",
      title: "Digital Literacy Trainer",
      organization: "Tech for Seniors",
      description: "Teach basic computer and smartphone skills to older adults. Help bridge the digital divide.",
      requirements: ["Tech knowledge", "Teaching skills", "Patience"],
      color: "#10b981",
      type: "Education",
    },
  ]

  return (
    <View className="px-4 mt-4">
      {/* First Row - Create New + Community Garden */}
      <View className="flex-row mb-4">
        <CreateOpportunityCard onPress={() => onOpportunityPress("create-new")} />
        <OpportunityCard opportunity={opportunities[0]} onPress={() => onOpportunityPress(opportunities[0].id)} />
      </View>

      {/* Remaining opportunities in pairs */}
      {opportunities
        .slice(1)
        .reduce((pairs: any[], opportunity, index) => {
          if (index % 2 === 0) {
            pairs.push([opportunity])
          } else {
            pairs[pairs.length - 1].push(opportunity)
          }
          return pairs
        }, [])
        .map((pair, pairIndex) => (
          <View key={pairIndex} className="flex-row mb-4">
            <OpportunityCard opportunity={pair[0]} onPress={() => onOpportunityPress(pair[0].id)} />
            {pair[1] && <OpportunityCard opportunity={pair[1]} onPress={() => onOpportunityPress(pair[1].id)} />}
          </View>
        ))}
    </View>
  )
}

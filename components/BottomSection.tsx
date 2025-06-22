import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface BottomSectionProps {
  onActionPress: (action: string) => void
}

export function BottomSection({ onActionPress }: BottomSectionProps) {
  const router= useRouter();
  return (
    <View className="mb-4">
      {/* Events and Volunteer Row */}
      <View className="flex-row justify-between mb-4">
        <TouchableOpacity
          className="p-4 flex-1 mr-2"
          style={{
            backgroundColor: "#e5e7eb",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#d1d5db",
          }}
          onPress={() => onActionPress("volunteer")}
          activeOpacity={0.8}
        >
          <View className="flex-row items-center mb-2">
            <Ionicons name="location" size={16} color="#8B5CF6" />
            <Text className="ml-2 text-sm text-gray-600">Diwali competition</Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Ionicons name="location" size={16} color="#8B5CF6" />
            <Text className="ml-2 text-sm text-gray-600">Musical Chair</Text>
          </View>
          <Text className="text-gray-800 font-bold text-base">EVENTS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="p-4 flex-1 ml-2"
          style={{
            backgroundColor: "#e5e7eb",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#d1d5db",
          }}
          onPress={() => router.push("/senior/volunteer")}
          activeOpacity={0.8}
        >
          <View className="flex-row items-center mb-2">
            <Ionicons name="checkmark" size={16} color="#8B5CF6" />
            <Text className="ml-2 text-sm text-gray-600">NGO on Saturday</Text>
          </View>
          <View className="flex-row items-center mb-2">
            <Ionicons name="checkmark" size={16} color="#8B5CF6" />
            <Text className="ml-2 text-sm text-gray-600">Old Care Service Club</Text>
          </View>
          <Text className="text-gray-800 font-bold text-base">Volunteer</Text>
        </TouchableOpacity>
      </View>

      {/* Learspace and Trips Row */}
      <View className="flex-row justify-between mb-6">
        <TouchableOpacity
          className="p-4 flex-1 mr-2"
          style={{
            backgroundColor: "#d5dbda",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#d5dbda",
          }}
          onPress={() => router.push("/senior/learnspace")}
          activeOpacity={0.8}
        >
          <View className="flex-row items-center justify-between">
            <Text className="text-black font-bold text-base">Learspace</Text>
            <Ionicons name="school" size={20} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="p-4 flex-1 ml-2"
          style={{
            backgroundColor: "#d5dbda",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#d5dbda",
          }}
          onPress={() => router.push("/senior/trips")}
          activeOpacity={0.8}
        >
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-800 font-bold text-base">Trips</Text>
            <Ionicons name="chevron-forward" size={16} color="#374151" />
          </View>
        </TouchableOpacity>
      </View>

      {/* NGO Buttons */}
      <View style={{ gap: 12 }} className="mb-6">
        <TouchableOpacity
          className="p-4 flex-row items-center justify-between"
          style={{
            backgroundColor: "#d5dbda",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#d5dbda",
          }}
          onPress={() => onActionPress("join-ngo")}
          activeOpacity={0.8}
        >
          <Text className="text-purple-900 font-bold text-base">JOIN A NGO</Text>
          <Ionicons name="chevron-forward" size={16} color="#581c87" />
        </TouchableOpacity>

        <TouchableOpacity
          className="p-4 flex-row items-center justify-between"
          style={{
            backgroundColor: "#d5dbda",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#d5dbda",
          }}
          onPress={() => onActionPress("start-ngo")}
          activeOpacity={0.8}
        >
          <Text className="text-purple-900 font-bold text-base">START A NGO</Text>
          <Ionicons name="chevron-forward" size={16} color="#581c87" />
        </TouchableOpacity>
      </View>

      {/* Hindi Text */}
      <View className="items-center mb-4">
        <Text className="text-base text-gray-700 text-center">"रिटायरमेंट जीवन की नई शुरुआत"</Text>
      </View>
    </View>
  )
}

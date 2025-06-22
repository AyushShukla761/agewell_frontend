import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface MainActionsProps {
  onActionPress: (action: string) => void
}

export function MainActions({ onActionPress }: MainActionsProps) {
  const router= useRouter();
  return (
    <View className="flex-row justify-between mb-4">
      <TouchableOpacity
        className="p-6 flex-1 mr-2 items-center"
        style={{
          backgroundColor: "#d5dbda",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#d5dbda",
        }}
        onPress={() => router.push("/senior/community")}
        activeOpacity={0.8}
      >
        <View className="items-center">
          <Ionicons name="people" size={32} color="#8B5CF6" />
          <Text className="text-gray-800 font-medium text-base mt-2">Community</Text>
          <Ionicons name="chevron-forward" size={16} color="#666" style={{ marginTop: 4 }} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        className="p-6 flex-1 ml-2 items-center"
        style={{
          backgroundColor: "#d5dbda",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#d5dbda",
        }}
        onPress={() => router.push("/senior/bazaar")}
        activeOpacity={0.8}
      >
        <View className="items-center">
          <Ionicons name="storefront" size={32} color="#8B5CF6" />
          <Text className="text-gray-800 font-medium text-base mt-2">Bazaar</Text>
          <Ionicons name="chevron-forward" size={16} color="#666" style={{ marginTop: 4 }} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

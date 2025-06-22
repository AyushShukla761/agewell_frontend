import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  const router= useRouter()
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-blue-600">
        Hello Tailwind CSS!
      </Text>
      <Text className="text-gray-600 mt-4">
        NativeWind is working with Expo Router
      </Text>
      <TouchableOpacity
                className="p-4 flex-1 mr-2"
                style={{
                  backgroundColor: "#d5dbda",
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: "#d5dbda",
                }}
                onPress={() => router.push("/senior")}
                activeOpacity={0.8}
              >
                <View className="flex-row items-center justify-between">
                  <Text className="text-black font-bold text-base">Learspace</Text>
                  <Ionicons name="school" size={20} color="white" />
                </View>
              </TouchableOpacity>
      
    </View>
  );
}

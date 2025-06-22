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
                className="p-4 mr-2"
                style={{
                  backgroundColor: "#d5dbda",
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: "#d5dbda",
                }}
                onPress={() => router.push("/senior")}
                activeOpacity={0.8}
              >
                <View className="items-center justify-between">
                  <Text className="text-black font-bold text-base">Senior Page</Text>
                </View>
              </TouchableOpacity>
      
    </View>
  );
}

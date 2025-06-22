import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-blue-600">
        Hello Tailwind CSS!
      </Text>
      <Text className="text-gray-600 mt-4">
        NativeWind is working with Expo Router
      </Text>
      <Link href="/senior">Seniors</Link>
      
    </View>
  );
}

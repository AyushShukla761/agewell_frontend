import { Stack } from "expo-router"
import { Alert, SafeAreaView, StatusBar } from "react-native"
import { Header } from "../../components/Header"
import { SeniorApiService } from "../../services/api"
export default function SeniorLayout() {

  const handleEmergency = async () => {
    Alert.alert("Emergency", "Sending emergency alert...")
    const success = await SeniorApiService.triggerEmergency("user-123")
    if (success) {
      Alert.alert("Emergency", "Emergency alert sent successfully!")
    } else {
      Alert.alert("Emergency", "Failed to send emergency alert.")
    }
  }
  return (
    <>
      <SafeAreaView className="flex-1" style={{ backgroundColor: "#f9fafb" }}>
        <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

        <Header onEmergency={handleEmergency} />
        <Stack screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="page" />
      <Stack.Screen name="community" /> */}
        </Stack>
      </SafeAreaView>
    </>
  )
}

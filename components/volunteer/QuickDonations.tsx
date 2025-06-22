import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface QuickDonationsProps {
  onDonationPress?: (amount: string) => void
}

export function QuickDonations({ onDonationPress }: QuickDonationsProps) {
  const donationAmounts = [
    { amount: "$25", value: "25" },
    { amount: "$50", value: "50" },
    { amount: "$100", value: "100" },
    { amount: "Custom", value: "custom", isCustom: true },
  ]

  const handleDonationPress = (value: string) => {
    if (onDonationPress) {
      onDonationPress(value)
    }
  }

  return (
    <View
      className="mx-4 mt-4 p-4"
      style={{
        backgroundColor: "#e5e7eb",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#d1d5db",
      }}
    >
      <Text className="text-gray-800 font-semibold text-base mb-2">Quick Volunteer Donations</Text>
      <Text className="text-gray-600 text-sm mb-4">
        Can't volunteer your time? Support these causes with a quick donation instead.
      </Text>

      {/* Donation Grid */}
      <View className="flex-row flex-wrap justify-between mb-4">
        {donationAmounts.map((donation, index) => (
          <TouchableOpacity
            key={index}
            className="items-center justify-center mb-2"
            style={{
              width: "48%",
              height: 60,
              backgroundColor: "white",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#d1d5db",
            }}
            onPress={() => handleDonationPress(donation.value)}
            activeOpacity={0.8}
          >
            {donation.isCustom ? (
              <View className="items-center">
                <Ionicons name="heart" size={20} color="#ef4444" />
                <Text className="text-gray-800 font-medium text-sm mt-1">{donation.amount}</Text>
              </View>
            ) : (
              <View className="items-center">
                <Text className="text-gray-800 font-bold text-lg">{donation.amount}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Info Note */}
      <View className="flex-row items-start">
        <Ionicons name="warning" size={16} color="#f59e0b" style={{ marginTop: 2 }} />
        <Text className="text-gray-600 text-xs ml-2 flex-1">
          Your donation goes directly to supporting volunteer programs and community initiatives
        </Text>
      </View>
    </View>
  )
}

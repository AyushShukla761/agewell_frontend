"use client"

import { Alert, SafeAreaView, ScrollView } from "react-native"
import { OpportunityGrid } from "../../components/volunteer/OpportunityGrid"
import { QuickDonations } from "../../components/volunteer/QuickDonations"
import { SearchSection } from "../../components/volunteer/SearchSection"
import { VolunteerFooter } from "../../components/volunteer/VolunteerFooter"
import { VolunteerHeader } from "../../components/volunteer/VolunteerHeader"

export default function VolunteerPage() {
  const handleEmergency = async () => {
    Alert.alert("Emergency", "Sending emergency alert...")
  }

  const handleSearch = (query: string) => {
    Alert.alert("Search", `Searching for: ${query}`)
  }

  const handleFilterPress = (filter: string) => {
    Alert.alert("Filter", `Filtering by: ${filter}`)
  }

  const handleOpportunityPress = (opportunity: string) => {
    Alert.alert("Opportunity", `Opening: ${opportunity}`)
  }

  const handleDonationPress = (amount: string) => {
    if (amount === "custom") {
      Alert.alert("Custom Donation", "Enter your custom donation amount")
    } else {
      Alert.alert("Donation", `Processing $${amount} donation...`)
    }
  }

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f3f4f6" }}>

      <ScrollView className="flex-1" style={{ backgroundColor: "#f3f4f6" }} showsVerticalScrollIndicator={false}>
        <VolunteerHeader />

        <QuickDonations onDonationPress={handleDonationPress} />

        <SearchSection onSearch={handleSearch} onFilterPress={handleFilterPress} />

        <OpportunityGrid onOpportunityPress={handleOpportunityPress} />

        <VolunteerFooter />
      </ScrollView>
    </SafeAreaView>
  )
}

"use client"

import { Alert, SafeAreaView, ScrollView } from "react-native"
import { ActionButtons } from "../../components/trips/ActionButtons"
import { AvailableTrips } from "../../components/trips/AvailableTrips"
import { FeaturedTrips } from "../../components/trips/FeaturedTrips"
import { SearchSection } from "../../components/trips/SearchSection"
import { StatsSection } from "../../components/trips/StatsSection"
import { TripsFooter } from "../../components/trips/TripsFooter"
import { TripsHeader } from "../../components/trips/TripsHeader"

export default function TripsPage() {
  const handleEmergency = async () => {
    Alert.alert("Emergency", "Sending emergency alert...")
  }

  const handleSearch = (query: string) => {
    Alert.alert("Search", `Searching destinations: ${query}`)
  }

  const handleVoiceSearch = () => {
    Alert.alert("Voice Search", "Voice search activated")
  }

  const handleJoinTrip = () => {
    Alert.alert("Join Trip", "Browse available trips to join")
  }

  const handleOrganizeTrip = () => {
    Alert.alert("Organize Trip", "Create your own trip")
  }

  const handleTripPress = (tripTitle: string) => {
    Alert.alert("Trip Details", `Opening details for: ${tripTitle}`)
  }

  const handleJoinAdventure = (tripTitle: string) => {
    Alert.alert("Join Adventure", `Joining: ${tripTitle}`)
  }

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f3f4f6" }}>

      <ScrollView className="flex-1" style={{ backgroundColor: "#f3f4f6" }} showsVerticalScrollIndicator={false}>
        <TripsHeader />

        <SearchSection onSearch={handleSearch} onVoiceSearch={handleVoiceSearch} />

        <ActionButtons onJoinTrip={handleJoinTrip} onOrganizeTrip={handleOrganizeTrip} />

        <StatsSection />

        <FeaturedTrips onTripPress={handleTripPress} onJoinAdventure={handleJoinAdventure} />

        <AvailableTrips onTripPress={handleTripPress} onJoinAdventure={handleJoinAdventure} />

        <TripsFooter />
      </ScrollView>
    </SafeAreaView>
  )
}

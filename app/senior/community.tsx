"use client"

import { Alert, SafeAreaView, ScrollView } from "react-native"
import { AgeVerification } from "../../components/community/AgeVerification"
import { CommunityFooter } from "../../components/community/CommunityFooter"
import { CommunityGrid } from "../../components/community/CommunityGrid"
import { CommunityHeader } from "../../components/community/CommunityHeader"
export default function CommunityPage() {
  

  const handleJoinCommunity = () => {
    Alert.alert("Join Community", "Welcome to Golden Years Community!")
  }

  const handleActionPress = (action: string) => {
    Alert.alert("Action", `Opening ${action}...`)
  }

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f9fafb" }}>

      <ScrollView className="flex-1" style={{ backgroundColor: "#f9fafb" }} showsVerticalScrollIndicator={false}>
        <CommunityHeader />

        <AgeVerification onJoinCommunity={handleJoinCommunity} />

        <CommunityGrid onActionPress={handleActionPress} />

        <CommunityFooter />
      </ScrollView>
    </SafeAreaView>
  )
}

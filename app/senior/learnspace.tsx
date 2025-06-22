"use client"

import { Alert, SafeAreaView, ScrollView } from "react-native"
import { ActionCards } from "../../components/learnspace/ActionCards"
import { CourseList } from "../../components/learnspace/CourseList"
import { LearnSpaceFooter } from "../../components/learnspace/LearnSpaceFooter"
import { LearnSpaceHeader } from "../../components/learnspace/LearnSpaceHeader"
import { SearchSection } from "../../components/learnspace/SearchSection"
import { StatsSection } from "../../components/learnspace/StatsSection"

export default function LearnSpacePage() {
  const handleEmergency = async () => {
    Alert.alert("Emergency", "Sending emergency alert...")
  }

  const handleRequestSkill = () => {
    Alert.alert("Request a Skill", "What would you like to learn?")
  }

  const handleOfferTeach = () => {
    Alert.alert("Offer to Teach", "Share your knowledge with others!")
  }

  const handleSearch = (query: string) => {
    Alert.alert("Search", `Searching for: ${query}`)
  }

  const handleFilterPress = (filter: string) => {
    Alert.alert("Filter", `Filtering by: ${filter}`)
  }

  const handleEnrollPress = (courseTitle: string) => {
    Alert.alert("Enroll", `Enrolling in: ${courseTitle}`)
  }

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f3f4f6" }}>

      <ScrollView className="flex-1" style={{ backgroundColor: "#f3f4f6" }} showsVerticalScrollIndicator={false}>
        <LearnSpaceHeader />

        <ActionCards onRequestSkill={handleRequestSkill} onOfferTeach={handleOfferTeach} />

        <SearchSection onSearch={handleSearch} onFilterPress={handleFilterPress} />

        <StatsSection />

        <CourseList onEnrollPress={handleEnrollPress} />

        <LearnSpaceFooter />
      </ScrollView>
    </SafeAreaView>
  )
}

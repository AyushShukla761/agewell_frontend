"use client"

import { useEffect, useState } from "react"
import { Alert, ScrollView } from "react-native"
import { BottomSection } from "../../components/BottomSection"
import { MainActions } from "../../components/MainActions"
import { NavigationFooter } from "../../components/NavigationFooter"
import { Reminders } from "../../components/Reminders"
import { UpcomingEvents } from "../../components/UpcomingEvents"
import { SeniorApiService } from "../../services/api"

export interface Event {
  id: string
  title: string
  date?: string
  time?: string
  location?: string
}

export interface Reminder {
  id: string
  text: string
  completed: boolean
  time?: string
  priority?: "low" | "medium" | "high"
}

export default function SeniorPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [loadingEvents, setLoadingEvents] = useState(true)
  const [loadingReminders, setLoadingReminders] = useState(true)

  useEffect(() => {
    async function loadData() {
      setLoadingEvents(true)
      setLoadingReminders(true)
      try {
        const eventsData = await SeniorApiService.getEvents()
        setEvents(eventsData)
      } finally {
        setLoadingEvents(false)
      }

      try {
        const remindersData = await SeniorApiService.getReminders("user-123")
        setReminders(remindersData)
      } finally {
        setLoadingReminders(false)
      }
    }

    loadData()
  }, [])

  const handleActionPress = (action: string) => {
    Alert.alert("Action", `Opening ${action} screen...`)
  }

  const handleEventPress = (event: Event) => {
    Alert.alert("Event Details", `Opening details for ${event.title}...`)
  }

  const handleToggleReminder = async (id: string) => {
    const updatedReminders = reminders.map((reminder) =>
      reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder,
    )
    setReminders(updatedReminders)

    try {
      const reminderToUpdate = reminders.find((r) => r.id === id)
      if (reminderToUpdate) {
        await SeniorApiService.updateReminder(id, !reminderToUpdate.completed)
      }
    } catch (error) {
      console.error("Failed to update reminder:", error)
    }
  }

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
    {/* <SafeAreaView className="flex-1" style={{ backgroundColor: "#f9fafb" }}> */}
      

      <ScrollView className="flex-1 px-4" style={{ backgroundColor: "#f9fafb" }} showsVerticalScrollIndicator={false}>
        <UpcomingEvents events={events} onEventPress={handleEventPress} loading={loadingEvents} />

        <Reminders reminders={reminders} onToggle={handleToggleReminder} loading={loadingReminders} />

        <MainActions onActionPress={handleActionPress} />

        <BottomSection onActionPress={handleActionPress} />
      </ScrollView>

      <NavigationFooter onActionPress={handleActionPress} />
    {/* </SafeAreaView> */}
    </>
  )
}

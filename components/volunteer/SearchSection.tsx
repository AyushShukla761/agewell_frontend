"use client"

import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"

interface SearchSectionProps {
  onSearch: (query: string) => void
  onFilterPress: (filter: string) => void
}

export function SearchSection({ onSearch, onFilterPress }: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const filters = ["Location", "Environment", "Healthcare", "Community", "Events"]

  return (
    <View className="mx-4 mt-4">
      {/* Search Bar */}
      <View
        className="flex-row items-center px-4 py-3 mb-3"
        style={{
          backgroundColor: "white",
          borderRadius: 25,
          borderWidth: 1,
          borderColor: "#d1d5db",
        }}
      >
        <Ionicons name="search" size={20} color="#6b7280" />
        <TextInput
          className="flex-1 ml-3 text-gray-700"
          placeholder="Search for volunteer opportunities"
          placeholderTextColor="#9ca3af"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={() => onSearch(searchQuery)}
        />
        <TouchableOpacity
          className="px-4 py-2"
          style={{
            backgroundColor: "#8b5cf6",
            borderRadius: 15,
          }}
          onPress={() => onSearch(searchQuery)}
          activeOpacity={0.8}
        >
          <Text className="text-white text-sm font-medium">Search</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Tags */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            className="px-4 py-2 mr-2"
            style={{
              backgroundColor: "#f3f4f6",
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "#d1d5db",
            }}
            onPress={() => onFilterPress(filter)}
            activeOpacity={0.7}
          >
            <Text className="text-gray-700 text-sm">{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

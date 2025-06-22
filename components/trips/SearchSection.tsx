"use client"

import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { TextInput, TouchableOpacity, View } from "react-native"

interface SearchSectionProps {
  onSearch: (query: string) => void
  onVoiceSearch: () => void
}

export function SearchSection({ onSearch, onVoiceSearch }: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <View
      className="flex-row items-center px-4 py-3 mx-4 mt-4"
      style={{
        backgroundColor: "white",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#e5e7eb",
      }}
    >
      <Ionicons name="search" size={20} color="#9ca3af" />
      <TextInput
        className="flex-1 ml-3 text-gray-700"
        placeholder="Search destinations..."
        placeholderTextColor="#9ca3af"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={() => onSearch(searchQuery)}
      />
      <TouchableOpacity onPress={onVoiceSearch} activeOpacity={0.7}>
        <Ionicons name="mic" size={20} color="#9ca3af" />
      </TouchableOpacity>
    </View>
  )
}

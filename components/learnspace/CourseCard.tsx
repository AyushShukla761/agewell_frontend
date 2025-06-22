import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface Course {
  id: string
  title: string
  instructor: string
  description: string
  tags: string[]
  schedule: string
  headerColor: string
  icon: string
}

interface CourseCardProps {
  course: Course
  onEnrollPress: () => void
}

export function CourseCard({ course, onEnrollPress }: CourseCardProps) {
  return (
    <View
      className="mb-4"
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <View className="p-6" style={{ backgroundColor: course.headerColor }}>
        <Ionicons name={course.icon as any} size={32} color="white" />
      </View>

      {/* Content */}
      <View className="p-4">
        {/* Instructor */}
        <View className="flex-row items-center mb-2">
          <View
            className="w-8 h-8 rounded-full items-center justify-center mr-2"
            style={{ backgroundColor: "#374151" }}
          >
            <Text className="text-white text-xs font-bold">
              {course.instructor
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </Text>
          </View>
          <Text className="text-gray-600 text-sm">{course.instructor}</Text>
        </View>

        {/* Title */}
        <Text className="text-gray-800 font-bold text-lg mb-2">{course.title}</Text>

        {/* Description */}
        <Text className="text-gray-600 text-sm mb-4">{course.description}</Text>

        {/* Tags */}
        <View className="flex-row flex-wrap mb-4">
          {course.tags.map((tag, index) => (
            <View
              key={index}
              className="px-3 py-1 mr-2 mb-2"
              style={{
                backgroundColor: "#f3f4f6",
                borderRadius: 12,
              }}
            >
              <Text className="text-gray-600 text-xs">{tag}</Text>
            </View>
          ))}
        </View>

        {/* Schedule and Enroll */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons name="calendar" size={16} color="#6b7280" />
            <Text className="text-gray-600 text-sm ml-2">{course.schedule}</Text>
          </View>
          <TouchableOpacity
            className="px-6 py-2"
            style={{
              backgroundColor: "#3b82f6",
              borderRadius: 20,
            }}
            onPress={onEnrollPress}
            activeOpacity={0.8}
          >
            <Text className="text-white font-medium text-sm">ENROLL NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

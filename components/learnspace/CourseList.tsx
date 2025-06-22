import { View } from "react-native"
import { CourseCard } from "./CourseCard"

interface CourseListProps {
  onEnrollPress: (courseTitle: string) => void
}

export function CourseList({ onEnrollPress }: CourseListProps) {
  const courses = [
    {
      id: "public-speaking",
      title: "Public Speaking Mastery",
      instructor: "Margaret Williams",
      description:
        "Build confidence in public speaking through interactive sessions. Learn techniques for clear communication, overcoming stage fright, and engaging your audience effectively.",
      tags: ["Communication", "Confidence", "Interactive"],
      schedule: "Tuesdays 3:00 PM",
      headerColor: "#fbbf24",
      icon: "mic",
    },
    {
      id: "smartphone-basics",
      title: "Smartphone Basics",
      instructor: "David Chen",
      description:
        "Master your smartphone with step-by-step guidance. Learn texting, calling, using apps, taking photos, and staying connected with family and friends.",
      tags: ["Technology", "Beginner", "Hands-on"],
      schedule: "Thursdays 10:00 AM",
      headerColor: "#3b82f6",
      icon: "phone-portrait",
    },
    {
      id: "healthy-cooking",
      title: "Healthy Cooking",
      instructor: "Chef Maria Lopez",
      description:
        "Learn to prepare nutritious and delicious meals. Focus on heart-healthy recipes, proper nutrition, and cooking techniques for better health.",
      tags: ["Practical Skills", "Health", "Nutrition"],
      schedule: "Mondays 11:00 AM",
      headerColor: "#10b981",
      icon: "restaurant",
    },
  ]

  return (
    <View className="px-4 mt-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} onEnrollPress={() => onEnrollPress(course.title)} />
      ))}
    </View>
  )
}

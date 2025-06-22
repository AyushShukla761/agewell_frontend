// Mobile-optimized API service with offline support
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

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

const API_BASE_URL = "https://your-api-endpoint.com"

// Mock data for development
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Poetry Competition",
    date: "Tomorrow 10:00 AM",
    location: "Community Hall",
  },
  {
    id: "2",
    title: "Yoga Fitness Program",
    date: "Every Monday 6:00 AM",
    location: "Garden Area",
  },
  {
    id: "3",
    title: "Entertainment Program",
    date: "This Weekend",
    location: "Main Auditorium",
  },
]

const mockReminders: Reminder[] = [
  {
    id: "1",
    text: "Go for a Walk",
    completed: false,
    time: "7:00 AM",
    priority: "high",
  },
  {
    id: "2",
    text: "Consume medicines on time",
    completed: false,
    time: "8:00 AM, 2:00 PM, 8:00 PM",
    priority: "high",
  },
  {
    id: "3",
    text: "Meet with community members",
    completed: false,
    time: "4:00 PM",
    priority: "medium",
  },
]

export class SeniorApiService {
  static async getEvents(): Promise<Event[]> {
    try {
      // For development, return mock data
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay
      return mockEvents

      // Production code:
      // const response = await fetch(`${API_BASE_URL}/events`)
      // const data: ApiResponse<Event[]> = await response.json()
      // return data.data
    } catch (error) {
      console.error("Error fetching events:", error)
      return mockEvents // Fallback to mock data
    }
  }

  static async getReminders(userId: string): Promise<Reminder[]> {
    try {
      // For development, return mock data
      await new Promise((resolve) => setTimeout(resolve, 800)) // Simulate network delay
      return mockReminders

      // Production code:
      // const response = await fetch(`${API_BASE_URL}/reminders/${userId}`)
      // const data: ApiResponse<Reminder[]> = await response.json()
      // return data.data
    } catch (error) {
      console.error("Error fetching reminders:", error)
      return mockReminders // Fallback to mock data
    }
  }

  static async updateReminder(id: string, completed: boolean): Promise<boolean> {
    try {
      // For development, simulate success
      await new Promise((resolve) => setTimeout(resolve, 500))
      return true

      // Production code:
      // const response = await fetch(`${API_BASE_URL}/reminders/${id}`, {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ completed }),
      // })
      // const data: ApiResponse<any> = await response.json()
      // return data.success
    } catch (error) {
      console.error("Error updating reminder:", error)
      return false
    }
  }

  static async triggerEmergency(userId: string, location?: any): Promise<boolean> {
    try {
      // For development, simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return true

      // Production code:
      // const response = await fetch(`${API_BASE_URL}/emergency`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ userId, location }),
      // })
      // const data: ApiResponse<any> = await response.json()
      // return data.success
    } catch (error) {
      console.error("Error triggering emergency:", error)
      return false
    }
  }
}

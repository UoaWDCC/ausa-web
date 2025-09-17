export interface User {
  email: string
  displayName?: string
  createdAt: Date
  updatedAt: Date
  role: "user" | "lab_manager" | "admin"
}

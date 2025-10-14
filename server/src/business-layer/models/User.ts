export interface User {
  email: string
  password: string       
  displayName?: string
  createdAt: Date
  updatedAt: Date
  role: "user" | "admin"
}
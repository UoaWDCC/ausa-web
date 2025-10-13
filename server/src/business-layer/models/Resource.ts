export interface Resource {
  id: string
  category: "Financial" | "Academic" | "Wellbeing" | "External"
  title: string
  description: string
  link?: string
}

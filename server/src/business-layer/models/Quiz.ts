export interface Quiz {
  id: string
  title: string
  description: string
  startQuestionId: string
  questions: Record<string, any>
  createdAt: Date
  updatedAt: Date
}

export interface QuizSession {
  id: string
  quizId: string
  userId?: string // Optional - null for anonymous users
  quizTitle: string
  path: Array<{
    questionId: string
    selectedOptionId: string
    questionText: string
    selectedOptionText: string
  }>
  resources: Array<{
    id: string
    title: string
    description: string
    url?: string
    type: string
  }>
  completedAt: Date
}
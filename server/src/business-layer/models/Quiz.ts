export interface Quiz {
  id: string
  title: string
  description: string
  startQuestionId: string
  questions: Record<string, QuizQuestion>
  createdAt?: Date
  updatedAt?: Date
}

export interface QuizQuestion {
  id: string
  text: string
  description?: string
  options: QuizOption[]
}

export interface QuizOption {
  id: string
  text: string
  nextQuestionId?: string
  resources?: Resource[]
}

export interface Resource {
  id: string
  title: string
  description: string
  url?: string
  type: string
}
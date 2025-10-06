export interface QuizListItem {
  id: string
  title: string
  description: string
}

export interface Resource {
  id: string
  title: string
  description: string
  url?: string
  type: string
}

export interface QuizOption {
  id: string
  text: string
  nextQuestionId?: string
  resources?: Resource[]
}

export interface QuizQuestion {
  id: string
  text: string
  description?: string
  options: QuizOption[]
}

export interface Quiz {
  id: string
  title: string
  description: string
  startQuestionId: string
  questions: Record<string, QuizQuestion>
}
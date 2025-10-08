// app/services/quizService.ts

import client from "./fetch-client"
import {
  QuizListItem,
  Quiz,
  QuizQuestion,
  Resource,
} from "../models/Object/quizTypes"

export const getAllQuizzes = async () => {
  try {
    const { data, error } = await client.GET("/quiz",)

    if (error) {
      console.error("Error fetching quizzes:", error)
      return { success: false, quizzes: [] as QuizListItem[] }
    }

    return data as { success: boolean; quizzes: QuizListItem[] }
  } catch (error) {
    console.error("Error in getAllQuizzes:", error)
    return { success: false, quizzes: [] as QuizListItem[] }
  }
}

export const getQuizById = async (quizId: string) => {
  try {
    const { data, error } = await client.GET("/quiz/{id}", {
      params: { path: { id: quizId } },
    })

    if (error) {
      console.error("Error fetching quiz:", error)
      return { success: false, quiz: null }
    }

    return data as { success: boolean; quiz: Quiz }
  } catch (error) {
    console.error("Error in getQuizById:", error)
    return { success: false, quiz: null }
  }
}

export const navigateQuiz = async (
  quizId: string,
  questionId: string,
  optionId: string,
) => {
  try {
    const { data, error } = await client.POST("/quiz/{id}/navigate", {
      params: { path: { id: quizId } },
      body: { questionId, optionId },
    })

    if (error) {
      console.error("Error navigating quiz:", error)
      return { success: false }
    }

    return data as {
      success: boolean
      type?: "question" | "resources"
      question?: QuizQuestion
      questionId?: string
      resources?: Resource[]
    }
  } catch (error) {
    console.error("Error in navigateQuiz:", error)
    return { success: false }
  }
}

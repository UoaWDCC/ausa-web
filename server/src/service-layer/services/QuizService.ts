// server/src/service-layer/services/QuizService.ts

import { Quiz } from "../../business-layer/models/Quiz"
import FirestoreCollections from "../../data-layer/adapters/FirestoreCollections"

export class QuizService {
  /**
   * Create a new quiz in the database
   */
  public static async createQuiz(
    quizData: Omit<Quiz, "id" | "createdAt" | "updatedAt">,
  ): Promise<{ id: string; quiz: Quiz }> {
    try {
      const now = new Date()
      const quizWithTimestamps = {
        ...quizData,
        createdAt: now,
        updatedAt: now,
      }

      const docRef = await FirestoreCollections.quizzes.add(quizWithTimestamps)

      const createdQuiz: Quiz = {
        id: docRef.id,
        ...quizWithTimestamps,
      }

      return {
        id: docRef.id,
        quiz: createdQuiz,
      }
    } catch (error) {
      console.error("Error creating quiz:", error)
      throw new Error(`Failed to create quiz: ${error}`)
    }
  }

  /**
   * Get all quizzes
   */
  public static async getAllQuizzes(): Promise<Quiz[]> {
    try {
      const snapshot = await FirestoreCollections.quizzes.get()

      const quizzes = snapshot.docs.map((doc) => {
        const data = doc.data() as Quiz
        return {
          id: doc.id,
          ...data,
        }
      })

      return quizzes
    } catch (error) {
      console.error("Error fetching quizzes:", error)
      throw new Error(`Failed to fetch quizzes: ${error}`)
    }
  }

  /**
   * Get quiz by ID
   */
  public static async getQuizById(id: string): Promise<Quiz | null> {
    try {
      const doc = await FirestoreCollections.quizzes.doc(id).get()

      if (!doc.exists) {
        return null
      }

      const data = doc.data() as Quiz
      return {
        id: doc.id,
        ...data,
      }
    } catch (error) {
      console.error("Error fetching quiz:", error)
      throw new Error(`Failed to fetch quiz: ${error}`)
    }
  }
}

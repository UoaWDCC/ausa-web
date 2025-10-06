// server/src/presentation-layer/controllers/QuizController.ts

import { Controller, Get, Post, Route, Path, Body, Tags } from "tsoa"
import FirestoreCollections from "../../data-layer/adapters/FirestoreCollections"
import { Quiz, QuizOption } from "../../business-layer/models/Quiz"

interface NavigateRequest {
  questionId: string
  optionId: string
}

@Route("quiz")
@Tags("Quiz")
export class QuizController extends Controller {
  
  /**
   * Get all quizzes
   */
  @Get("/")
  public async getAllQuizzes() {
    try {
      const snapshot = await FirestoreCollections.quizzes.get()
      
      const quizzes = snapshot.docs.map(doc => {
        const data = doc.data() as Quiz
        return {
          id: doc.id,
          title: data.title,
          description: data.description
        }
      })

      return {
        success: true,
        quizzes
      }
    } catch (error) {
      console.error("Error fetching quizzes:", error)
      return {
        success: false,
        message: "Failed to fetch quizzes",
        quizzes: [] as Array<{id: string, title: string, description: string}>
      }
    }
  }

  /**
   * Get quiz by ID
   */
  @Get("/{id}")
  public async getQuizById(@Path() id: string) {
    try {
      const doc = await FirestoreCollections.quizzes.doc(id).get()
      
      if (!doc.exists) {
        this.setStatus(404)
        return {
          success: false,
          message: "Quiz not found"
        }
      }

      const data = doc.data() as Quiz
      
      return {
        success: true,
        quiz: {
          id: doc.id,
          ...data,
          createdAt: (data as any)?.createdAt?.toDate(),
          updatedAt: (data as any)?.updatedAt?.toDate()
        }
      }
    } catch (error) {
      console.error("Error fetching quiz:", error)
      return {
        success: false,
        message: "Failed to fetch quiz"
      }
    }
  }

  /**
   * Navigate quiz - answer question and get next step
   */
  @Post("/{id}/navigate")
  public async navigateQuiz(
    @Path() id: string,
    @Body() body: NavigateRequest
  ) {
    try {
      const quizDoc = await FirestoreCollections.quizzes.doc(id).get()
      
      if (!quizDoc.exists) {
        this.setStatus(404)
        return {
          success: false,
          message: "Quiz not found"
        }
      }

      const quizData = quizDoc.data() as Quiz
      const currentQuestion = quizData.questions[body.questionId]
      
      if (!currentQuestion) {
        return {
          success: false,
          message: "Question not found"
        }
      }

      const selectedOption = currentQuestion.options.find(
        (opt: QuizOption) => opt.id === body.optionId
      )
      
      if (!selectedOption) {
        return {
          success: false,
          message: "Option not found"
        }
      }

      // Check if this is a leaf node with resources
      if (selectedOption.resources && selectedOption.resources.length > 0) {
        return {
          success: true,
          type: 'resources',
          resources: selectedOption.resources
        }
      }

      // Navigate to next question
      if (selectedOption.nextQuestionId) {
        const nextQuestion = quizData.questions[selectedOption.nextQuestionId]
        
        if (!nextQuestion) {
          return {
            success: false,
            message: "Next question not found"
          }
        }

        return {
          success: true,
          type: 'question',
          question: nextQuestion,
          questionId: selectedOption.nextQuestionId
        }
      }

      return {
        success: false,
        message: "Invalid quiz structure"
      }
    } catch (error) {
      console.error("Error navigating quiz:", error)
      return {
        success: false,
        message: "Failed to navigate quiz"
      }
    }
  }
}
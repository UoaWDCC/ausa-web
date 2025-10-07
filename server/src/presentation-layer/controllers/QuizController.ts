// server/src/presentation-layer/controllers/QuizController.ts

import { Controller, Get, Post, Route, Path, Body, Tags } from "tsoa"
import FirestoreCollections from "../../data-layer/adapters/FirestoreCollections"
import { Quiz, QuizOption } from "../../business-layer/models/Quiz"
import { QuizService } from "../../service-layer/services/QuizService"

interface NavigateRequest {
  questionId: string
  optionId: string
}

@Route("quiz")
@Tags("Quiz")
export class QuizController extends Controller {
  /**
   * Create a new quiz
   */
  @Post("/")
  public async createQuiz(
    @Body() quizData: Omit<Quiz, "id" | "createdAt" | "updatedAt">,
  ) {
    try {
      const result = await QuizService.createQuiz(quizData)

      this.setStatus(201)
      return {
        success: true,
        message: "Quiz created successfully",
        quiz: result.quiz,
      }
    } catch (error) {
      console.error("Error creating quiz:", error)
      this.setStatus(500)
      return {
        success: false,
        message: "Failed to create quiz",
      }
    }
  }

  /**
   * Get all quizzes
   */
  @Get("/")
  public async getAllQuizzes() {
    try {
      const quizzes = await QuizService.getAllQuizzes()

      const quizSummaries = quizzes.map((quiz) => ({
        id: quiz.id,
        title: quiz.title,
        description: quiz.description,
      }))

      return {
        success: true,
        quizzes: quizSummaries,
      }
    } catch (error) {
      console.error("Error fetching quizzes:", error)
      this.setStatus(500)
      return {
        success: false,
        message: "Failed to fetch quizzes",
        quizzes: [] as Array<{
          id: string
          title: string
          description: string
        }>,
      }
    }
  }

  /**
   * Get quiz by ID
   */
  @Get("/{id}")
  public async getQuizById(@Path() id: string) {
    try {
      const quiz = await QuizService.getQuizById(id)

      if (!quiz) {
        this.setStatus(404)
        return {
          success: false,
          message: "Quiz not found",
        }
      }

      return {
        success: true,
        quiz,
      }
    } catch (error) {
      console.error("Error fetching quiz:", error)
      this.setStatus(500)
      return {
        success: false,
        message: "Failed to fetch quiz",
      }
    }
  }

  /**
   * Navigate quiz - answer question and get next step
   */
  @Post("/{id}/navigate")
  public async navigateQuiz(@Path() id: string, @Body() body: NavigateRequest) {
    try {
      const quizDoc = await FirestoreCollections.quizzes.doc(id).get()

      if (!quizDoc.exists) {
        this.setStatus(404)
        return {
          success: false,
          message: "Quiz not found",
        }
      }

      const quizData = quizDoc.data() as Quiz
      const currentQuestion = quizData.questions[body.questionId]

      if (!currentQuestion) {
        return {
          success: false,
          message: "Question not found",
        }
      }

      const selectedOption = currentQuestion.options.find(
        (opt: QuizOption) => opt.id === body.optionId,
      )

      if (!selectedOption) {
        return {
          success: false,
          message: "Option not found",
        }
      }

      // Check if this is a leaf node with resources
      if (selectedOption.resources && selectedOption.resources.length > 0) {
        return {
          success: true,
          type: "resources",
          resources: selectedOption.resources,
        }
      }

      // Navigate to next question
      if (selectedOption.nextQuestionId) {
        const nextQuestion = quizData.questions[selectedOption.nextQuestionId]

        if (!nextQuestion) {
          return {
            success: false,
            message: "Next question not found",
          }
        }

        return {
          success: true,
          type: "question",
          question: nextQuestion,
          questionId: selectedOption.nextQuestionId,
        }
      }

      return {
        success: false,
        message: "Invalid quiz structure",
      }
    } catch (error) {
      console.error("Error navigating quiz:", error)
      return {
        success: false,
        message: "Failed to navigate quiz",
      }
    }
  }
}

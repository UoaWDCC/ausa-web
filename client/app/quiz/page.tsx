"use client"

import { useEffect, useState } from "react"
import { getQuizById, navigateQuiz } from "../services/quizService"
import { QuizQuestion, Resource } from "../models/Object/quizTypes"
import QuizButton from "../components/composite/quiz/QuizButton"
import QuizProgressBar from "../components/composite/quiz/QuizProgressBar"

// TODO: Replace with your actual quiz ID after seeding
const QUIZ_ID = "qQdUlPiUg1zsBifrMRSe"

export default function QuizPage() {
  const [quizTitle, setQuizTitle] = useState("")
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(
    null,
  )
  const [resources, setResources] = useState<Resource[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [totalSteps, setTotalSteps] = useState(2) // Default to 2 steps, will be 3 for sad/overwhelmed/anxious

  useEffect(() => {
    async function loadQuiz() {
      const response = await getQuizById(QUIZ_ID)

      if (response.success && response.quiz) {
        setQuizTitle(response.quiz.title)
        const firstQuestion =
          response.quiz.questions[response.quiz.startQuestionId]
        setCurrentQuestion(firstQuestion)
        setCurrentStep(0) // Start at step 0 (first bar)
      }

      setLoading(false)
    }

    loadQuiz()
  }, [])

  const handleAnswer = async (questionId: string, optionId: string) => {
    setLoading(true)

    const response = await navigateQuiz(QUIZ_ID, questionId, optionId)

    if (response.success) {
      if (response.type === "resources" && response.resources) {
        setResources(response.resources)
        setCurrentQuestion(null)
        // If we came from first question directly to resources, go to step 1 (2nd bar)
        // If we came from second question to resources, go to step 2 (3rd bar)
        setCurrentStep(currentStep === 0 ? 1 : 2)
      } else if (response.type === "question" && response.question) {
        // This means we're going from q1 to q2 (sad/overwhelmed/anxious option)
        setCurrentQuestion(response.question)
        setCurrentStep(1) // Second bar
        setTotalSteps(3) // Change to 3 steps since we have the multi-step flow
      }
    }

    setLoading(false)
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setTotalSteps(2)
    setResources(null)
    setCurrentQuestion(null)
    window.location.reload()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  // Resources view (end of quiz)
  if (resources) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-3xl w-full space-y-8">
          <h1
            className="text-3xl font-bold text-center"
            style={{ color: "var(--primary-900)" }}
          >
            {quizTitle}
          </h1>

          <div className="flex justify-center">
            <QuizProgressBar
              totalSections={totalSteps}
              currentSection={currentStep}
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Resources for You
            </h2>

            <div className="space-y-4 mb-8">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="border-2 border-gray-200 rounded-lg p-5"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {resource.title}
                    </h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded uppercase">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{resource.description}</p>
                  {resource.url && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium inline-block"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleRestart}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Question view
  if (currentQuestion) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-3xl w-full space-y-8">
          <h1
            className="text-3xl font-bold text-center"
            style={{ color: "var(--primary-900)" }}
          >
            {quizTitle}
          </h1>

          <div className="flex justify-center">
            <QuizProgressBar
              totalSections={totalSteps}
              currentSection={currentStep}
            />
          </div>

          <div className="mt-8">
            <h2
              className="text-2xl font-semibold mb-6 text-center"
              style={{ color: "var(--primary-900)" }}
            >
              {currentQuestion.text}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <QuizButton
                  key={option.id}
                  text={option.text}
                  onClick={() => handleAnswer(currentQuestion.id, option.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-red-600">Failed to load quiz</div>
    </div>
  )
}

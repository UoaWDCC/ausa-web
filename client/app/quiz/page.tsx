"use client"

import React, { useState } from "react"
import QuizButton from "../components/composite/quiz/QuizButton"
import QuizProgressBar from "../components/composite/quiz/QuizProgressBar"

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const totalQuestions = 5

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      <div className="max-w-2xl w-full space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Quiz Components Demo</h1>

        
        <div className="flex justify-center">
          <QuizProgressBar
            totalSections={totalQuestions}
            currentSection={currentQuestion}
          />
        </div>

        <div className="text-center text-xl font-medium my-12">
          Question {currentQuestion + 1} of {totalQuestions}
        </div>

        
        <div className="space-y-4">
          <QuizButton text="Option A" onClick={() => alert("Selected A")} />
          <QuizButton text="Option B" onClick={() => alert("Selected B")} />
          <QuizButton text="Option C" onClick={() => alert("Selected C")} />
          <QuizButton text="Option D" onClick={() => alert("Selected D")} />
        </div>

      
        <div className="flex gap-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === totalQuestions - 1}
            className="px-6 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
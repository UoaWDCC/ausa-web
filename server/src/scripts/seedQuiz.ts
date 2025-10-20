// server/src/scripts/seedQuiz.ts

import dotenv from "dotenv"
import path from "path"

// Load .env file
dotenv.config({ path: path.join(__dirname, "../../.env") })

import { QuizService } from "../service-layer/services/QuizService"
import { sampleQuiz } from "../data/sampleQuizData"

async function seedQuiz() {
  try {
    console.log("Starting to seed quiz data...")

    const result = await QuizService.createQuiz(sampleQuiz)

    console.log(`Quiz created successfully with ID: ${result.id}`)
    console.log("Seeding complete!")

    process.exit(0)
  } catch (error) {
    console.error("Error seeding quiz:", error)
    process.exit(1)
  }
}

seedQuiz()

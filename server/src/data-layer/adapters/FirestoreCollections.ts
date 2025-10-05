import type { User } from "../../business-layer/models/User"
import { Quiz, QuizSession } from "../../business-layer/models/Quiz"
import { USERS_COLLECTION, QUIZ_COLLECTION, QUIZ_SESSION_COLLECTION } from "./CollectionNames"
import firestore from "./Firestore"

const FirestoreCollections = {
  users: firestore.collection<User>(USERS_COLLECTION),
   quizzes: firestore.collection<Quiz>(QUIZ_COLLECTION),
  quizSessions: firestore.collection<QuizSession>(QUIZ_SESSION_COLLECTION), 
} as const

export default FirestoreCollections

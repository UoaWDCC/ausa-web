import { BaseResource } from "business-layer/models/Resource"
import type { User } from "../../business-layer/models/User"
import {
  QUIZ_COLLECTION,
  RESOURCES_COLLECTION,
  USERS_COLLECTION,
} from "./CollectionNames"
import firestore from "./Firestore"

const FirestoreCollections = {
  users: firestore.collection<User>(USERS_COLLECTION),
  quizzes: firestore.collection(QUIZ_COLLECTION),
  resources: firestore.collection<BaseResource>(RESOURCES_COLLECTION),
} as const

export default FirestoreCollections

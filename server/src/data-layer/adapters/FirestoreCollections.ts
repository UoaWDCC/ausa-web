import { BaseResource } from "business-layer/models/Resource"
import type { User } from "../../business-layer/models/User"
import {
  ACADEMIC_RESOURCES_COLLECTION,
  EXTERNAL_RESOURCES_COLLECTION,
  FINANCIAL_RESOURCES_COLLECTION,
  QUIZ_COLLECTION,
  USERS_COLLECTION,
  WELLBEING_RESOURCES_COLLECTION,
} from "./CollectionNames"
import firestore from "./Firestore"

const FirestoreCollections = {
  users: firestore.collection<User>(USERS_COLLECTION),
  quizzes: firestore.collection(QUIZ_COLLECTION),
  financialResources: firestore.collection<BaseResource>(
    FINANCIAL_RESOURCES_COLLECTION,
  ),
  academicResources: firestore.collection<BaseResource>(
    ACADEMIC_RESOURCES_COLLECTION,
  ),
  externalResources: firestore.collection<BaseResource>(
    EXTERNAL_RESOURCES_COLLECTION,
  ),
  wellbeingResources: firestore.collection<BaseResource>(
    WELLBEING_RESOURCES_COLLECTION,
  ),
} as const

export default FirestoreCollections

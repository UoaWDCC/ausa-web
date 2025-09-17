import type { User } from "../../business-layer/models/User"
import { USERS_COLLECTION } from "./CollectionNames"
import firestore from "./Firestore"

const FirestoreCollections = {
  users: firestore.collection<User>(USERS_COLLECTION),
} as const

export default FirestoreCollections

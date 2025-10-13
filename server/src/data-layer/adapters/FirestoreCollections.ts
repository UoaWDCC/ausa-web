import type { User } from "../../business-layer/models/User"
import type { Resource } from "../../business-layer/models/Resource"
import { RESOURCES_COLLECTION, USERS_COLLECTION } from "./CollectionNames"
import firestore from "./Firestore"

const FirestoreCollections = {
  users: firestore.collection<User>(USERS_COLLECTION),
  resources: firestore.collection<Resource>(RESOURCES_COLLECTION),
} as const

export default FirestoreCollections

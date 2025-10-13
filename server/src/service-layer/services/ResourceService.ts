import type { DocumentSnapshot } from "firebase-admin/firestore";
import type { Resource } from "business-layer/models/Resource";
import FirestoreCollections from "../../data-layer/adapters/FirestoreCollections";

export default class ResourceService {
  /**
   * Retrieves all resources from Firestore
   * @param limit - Number of resources to return (default 20)
   * @param startAfter - Pagination cursor (optional)
   */
  public async getAllResources(limit = 20, startAfter?: DocumentSnapshot) {
    const res = await FirestoreCollections.resources
      .orderBy("category")
      .startAfter(startAfter || 0)
      .limit(limit)
      .get();

    const resources = res.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Resource, "id">),
    }));

    return {
      resources,
      nextCursor: res.docs[res.docs.length - 1]?.id || undefined,
    };
  }

  /**
   * Get a single resource by ID
   */
  public async getResourceById(resourceId: string) {
    const doc = await FirestoreCollections.resources.doc(resourceId).get();
    if (!doc.exists) return undefined;
    return { id: doc.id, ...(doc.data() as Omit<Resource, "id">) };
  }

  /**
   * Create a new resource
   */
  public async createResource(resource: Resource) {
    const newDoc = await FirestoreCollections.resources.add(resource);
    return { id: newDoc.id, ...resource };
  }

  /**
   * Delete a resource
   */
  public async deleteResource(resourceId: string) {
    await FirestoreCollections.resources.doc(resourceId).delete();
  }
}

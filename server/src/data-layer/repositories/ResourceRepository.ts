import { BaseResource } from "business-layer/models/Resource"
import FirestoreCollections from "data-layer/adapters/FirestoreCollections"

export default class ResourceRepository {
  /**
   * Method used to get all financial resources from the database.
   *
   * @returns An array of {@link BaseResource} objects representing the financial resources.
   */
  public async getFinancialResources(): Promise<BaseResource[]> {
    const res = await FirestoreCollections.financialResources.get()
    return res.docs.map((doc) => doc.data())
  }

  /**
   * Method used to get all academic resources from the database.
   *
   * @returns An array of {@link BaseResource} objects representing the academic resources.
   */
  public async getAcademicResources(): Promise<BaseResource[]> {
    const res = await FirestoreCollections.academicResources.get()
    return res.docs.map((doc) => doc.data())
  }

  /**
   * Method used to get all external resources from the database.
   *
   * @returns An array of {@link BaseResource} objects representing the external resources.
   */
  public async getExternalResources(): Promise<BaseResource[]> {
    const res = await FirestoreCollections.externalResources.get()
    return res.docs.map((doc) => doc.data())
  }

  /**
   * Method used to get all wellbeing resources from the database.
   *
   * @returns An array of {@link BaseResource} objects representing the wellbeing resources.
   */
  public async getWellbeingResources(): Promise<BaseResource[]> {
    const res = await FirestoreCollections.wellbeingResources.get()
    return res.docs.map((doc) => doc.data())
  }
}

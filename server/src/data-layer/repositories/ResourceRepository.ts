import { BaseResource } from "../../business-layer/models/Resource"
import FirestoreCollections from "../../data-layer/adapters/FirestoreCollections"

export const FINANCIAL_RESOURCES = "financial"
export const ACADEMIC_RESOURCES = "academic"
export const EXTERNAL_RESOURCES = "external"
export const WELLBEING_RESOURCES = "wellbeing"

export default class ResourceRepository {
  /**
   * Method used to get all financial resources from the database.
   *
   * @returns An array of {@link BaseResource} objects representing the financial resources.
   */
  public async getFinancialResources(): Promise<BaseResource> {
    const res = await FirestoreCollections.resources
      .doc(FINANCIAL_RESOURCES)
      .get()
    return res.data()
  }

  /**
   * Method used to get all academic resources from the database.
   *
   * @returns An array of {@link BaseResource} objects representing the academic resources.
   */
  public async getAcademicResources(): Promise<BaseResource> {
    const res = await FirestoreCollections.resources
      .doc(ACADEMIC_RESOURCES)
      .get()
    return res.data()
  }

  /**
   * Method used to get all external resources from the database.
   *
   * @returns An array of {@link BaseResource} objects representing the external resources.
   */
  public async getExternalResources(): Promise<BaseResource> {
    const res = await FirestoreCollections.resources
      .doc(EXTERNAL_RESOURCES)
      .get()
    return res.data()
  }

  /**
   * Method used to get all wellbeing resources from the database.
   *
   * @returns An array of {@link BaseResource} objects representing the wellbeing resources.
   */
  public async getWellbeingResources(): Promise<BaseResource> {
    const res = await FirestoreCollections.resources
      .doc(WELLBEING_RESOURCES)
      .get()
    return res.data()
  }
}

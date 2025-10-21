import { BaseResource } from "../../business-layer/models/Resource"
import FirestoreCollections from "../../data-layer/adapters/FirestoreCollections"

export const LAND_ENVIRONMENT_RESOURCES = "land-environment"
export const FINANCIAL_STABILITY_RESOURCES = "financial-stability"
export const MENTAL_EMOTIONAL_RESOURCES = "mental-emotional"
export const PHYSICAL_RESOURCES = "physical"
export const SOCIAL_FAMILY_RESOURCES = "social-family"
export const SPIRITUAL_RESOURCES = "spiritual"

export default class ResourceRepository {
  /**
   * Method used to create a resource in the database.
   *
   * @param path The path of the resource document
   * @param resource The resource to create
   */
  public async createResource(
    path: "land-environment" | "financial-stability" | "mental-emotional" | "physical" | "social-family" | "spiritual",
    resource: BaseResource,
  ): Promise<void> {
    await FirestoreCollections.resources.doc(path).set(resource)
  }

  /**
   * Method used to edit a resource in the database.
   *
   * @param path The path of the resource document
   * @param resource The resource to edit
   */
  public async editResource(
    path: "land-environment" | "financial-stability" | "mental-emotional" | "physical" | "social-family" | "spiritual",
    resource: Partial<BaseResource>,
  ): Promise<void> {
    await FirestoreCollections.resources
      .doc(path)
      .set(resource, { merge: true })
  }

  /**
    * Method used to get all land & environment resources from the database.
    *
    * @returns A {@link BaseResource} object representing the land & environment resources.
    */
  public async getLandEnvironmentResources(): Promise<BaseResource> {
    const res = await FirestoreCollections.resources
      .doc(LAND_ENVIRONMENT_RESOURCES)
      .get()
    return res.data()
  }

  /**
    * Method used to get all financial stability resources from the database.
    *
    * @returns A {@link BaseResource} object representing the financial stability resources.
    */
  public async getFinancialStabilityResources(): Promise<BaseResource> {
    const res = await FirestoreCollections.resources
      .doc(FINANCIAL_STABILITY_RESOURCES)
      .get()
    return res.data()
  }

  /**
    * Method used to get all mental & emotional wellbeing resources from the database.
    *
    * @returns A {@link BaseResource} object representing the mental & emotional wellbeing resources.
    */
  public async getMentalEmotionalResources(): Promise<BaseResource> {
    const res = await FirestoreCollections.resources
      .doc(MENTAL_EMOTIONAL_RESOURCES)
      .get()
    return res.data()
  }

  /**
    * Method used to get all physical wellbeing resources from the database.
    *
    * @returns A {@link BaseResource} object representing the physical wellbeing resources.
    */
  public async getPhysicalResources(): Promise<BaseResource> {
    const res = await FirestoreCollections.resources
      .doc(PHYSICAL_RESOURCES)
      .get()
    return res.data()
  }

  /**
    * Method used to get all social & family wellbeing resources from the database.
    *
    * @returns A {@link BaseResource} object representing the social & family wellbeing resources.
    */
  public async getSocialFamilyResources(): Promise<BaseResource> {
    const res = await FirestoreCollections.resources
      .doc(SOCIAL_FAMILY_RESOURCES)
      .get()
    return res.data()
  }

  /**
    * Method used to get all spiritual wellbeing resources from the database.
    *
    * @returns A {@link BaseResource} object representing the spiritual wellbeing resources.
    */
  public async getSpiritualResources(): Promise<BaseResource> {
    const res = await FirestoreCollections.resources
      .doc(SPIRITUAL_RESOURCES)
      .get()
    return res.data()
  }
}

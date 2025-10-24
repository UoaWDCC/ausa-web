import { BaseResource } from "../../business-layer/models/Resource"
import ResourceRepository from "../../data-layer/repositories/ResourceRepository"
import { Controller, Get, Route, SuccessResponse, Tags } from "tsoa"

@Tags("Resources")
@Route("resources")
export class ResourceController extends Controller {
  /**
   * Fetches all land & environment resources
   *
   * @returns The land & environment resources with resource items
   */
  @SuccessResponse(200, "Fetched all land & environment resources")
  @Get("/land-environment")
  public async getLandEnvironmentResources(): Promise<BaseResource> {
    const data = await new ResourceRepository().getLandEnvironmentResources()

    return data
  }

  /**
   * Fetches all financial stability resources
   *
   * @returns The financial stability resources with resource items
   */
  @SuccessResponse(200, "Fetched all financial stability resources")
  @Get("/financial-stability")
  public async getFinancialStabilityResources(): Promise<BaseResource> {
    const data = await new ResourceRepository().getFinancialStabilityResources()

    return data
  }

  /**
   * Fetches all mental & emotional wellbeing resources
   *
   * @returns The mental & emotional wellbeing resources with resource items
   */
  @SuccessResponse(200, "Fetched all mental & emotional wellbeing resources")
  @Get("/mental-emotional")
  public async getMentalEmotionalResources(): Promise<BaseResource> {
    const data = await new ResourceRepository().getMentalEmotionalResources()

    return data
  }

  /**
   * Fetches all physical wellbeing resources
   *
   * @returns The physical wellbeing resources with resource items
   */
  @SuccessResponse(200, "Fetched all physical wellbeing resources")
  @Get("/physical")
  public async getPhysicalResources(): Promise<BaseResource> {
    const data = await new ResourceRepository().getPhysicalResources()

    return data
  }

  /**
   * Fetches all social & family wellbeing resources
   *
   * @returns The social & family wellbeing resources with resource items
   */
  @SuccessResponse(200, "Fetched all social & family wellbeing resources")
  @Get("/social-family")
  public async getSocialFamilyResources(): Promise<BaseResource> {
    const data = await new ResourceRepository().getSocialFamilyResources()

    return data
  }

  /**
   * Fetches all spiritual wellbeing resources
   *
   * @returns The spiritual wellbeing resources with resource items
   */
  @SuccessResponse(200, "Fetched all spiritual wellbeing resources")
  @Get("/spiritual")
  public async getSpiritualResources(): Promise<BaseResource> {
    const data = await new ResourceRepository().getSpiritualResources()

    return data
  }
}

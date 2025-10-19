import { BaseResource } from "../../business-layer/models/Resource"
import ResourceRepository from "../../data-layer/repositories/ResourceRepository"
import { Controller, Get, Route, SuccessResponse, Tags } from "tsoa"

@Tags("Resources")
@Route("resources")
export class ResourceController extends Controller {
  /**
   * Fetches all financial resources
   *
   * @returns The financial resource with resource items
   */
  @SuccessResponse(200, "Fetched all financial resources")
  @Get("/financial")
  public async getFinancialResources(): Promise<BaseResource> {
    const data = await new ResourceRepository().getFinancialResources()

    return data
  }

  /**
   * Fetches all academic resources
   *
   * @returns The academic resources with resource items
   */
  @SuccessResponse(200, "Fetched all academic resources")
  @Get("/academic")
  public async getAcademicResources(): Promise<BaseResource> {
    const data = await new ResourceRepository().getAcademicResources()

    return data
  }

  /**
   * Fetches all external resources
   *
   * @returns The external resources with resource items
   */
  @SuccessResponse(200, "Fetched all external resources")
  @Get("/external")
  public async getExternalResources(): Promise<BaseResource> {
    const data = await new ResourceRepository().getExternalResources()

    return data
  }

  /**
   * Fetches all wellbeing resources
   *
   * @returns The wellbeing resources with resource items
   */
  @SuccessResponse(200, "Fetched all wellbeing resources")
  @Get("/wellbeing")
  public async getWellbeingResources(): Promise<BaseResource> {
    const data = await new ResourceRepository().getWellbeingResources()

    return data
  }
}

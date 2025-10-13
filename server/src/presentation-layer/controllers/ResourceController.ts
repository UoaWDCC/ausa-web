import ResourceService from "../../service-layer/services/ResourceService"
import { Resource } from "business-layer/models/Resource"
import { Get } from "@tsoa/runtime/dist/decorators/methods"
import { SuccessResponse } from "@tsoa/runtime/dist/decorators/response"

export class ResourceController {
  /**
   * Retrieve all resources
   * @returns List of all resources from the database
   */
  @SuccessResponse("200", "Resources retrieved successfully")
  @Get()
  public async getAllResources(): Promise<Resource[]> {
    console.log("Fetching all resources...");
    const { resources } = await new ResourceService().getAllResources();
    console.log(`Returning ${resources.length} resources`);
    return resources;
  }
}

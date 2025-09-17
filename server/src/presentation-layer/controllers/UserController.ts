import { User } from "../../business-layer/models/User"
import {
  Controller,
  Get,
  Route,
  SuccessResponse,
  Security,
  Request,
  Path,
  Tags,
} from "tsoa"
import { UserService } from "../../data-layer/repositories/UserRepository"
import { AuthRequest } from "../../service-layer/dtos/request/AuthRequest"

@Tags("User")
@Route("users")
export class UserController extends Controller {
  @SuccessResponse("200", "Users retrieved successfully")
  @Get()
  public async getAllUsers(): Promise<User[]> {
    console.log("Getting all users...")
    const users = await new UserService().getAllUsers()
    console.log(`Returning ${users.length} users`)
    return users
  }
  /**
   * Get email of the current logged in user
   *
   * @param jwt- jwt token is needed for the user to be verified
   * @returns email of the user who calls this endpoint
   */
  @Security("jwt")
  @SuccessResponse("200", "User email retrieved successfully")
  @Get("{user_id}/email")
  public async getEmail(
    @Request() request: AuthRequest,
    @Path() user_id: string,
  ): Promise<{ email: string }> {
    console.log("getting user's email..")
    console.log(user_id)
    const user = request.user
    return { email: user.email }
  }
}

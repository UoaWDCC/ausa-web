import {
  Body,
  Controller,
  Post,
  Route,
  Tags,
  SuccessResponse,
  Response,
} from "tsoa"
import { authService } from "../../service-layer/services/AuthService"
import { RegisterRequest } from "../../service-layer/dtos/request/RegisterRequest"
import { LoginRequest } from "../../service-layer/dtos/request/LoginRequest"

@Route("auth")
@Tags("Authentication")
export class AuthController extends Controller {
  /**
   * Register a new user
   */
  @Post("register")
  @SuccessResponse("201", "User registered successfully")
  @Response("400", "Bad Request - User already exists")
  public async register(@Body() body: RegisterRequest) {
    try {
      const result = await authService.register(
        body.email,
        body.password,
        body.displayName,
      )
      this.setStatus(201)
      return result
    } catch (error: any) {
      this.setStatus(400)
      return { error: error.message }
    }
  }

  /**
   * Login a user
   */
  @Post("login")
  @SuccessResponse("200", "Login successful")
  @Response("401", "Unauthorized - Invalid credentials")
  public async login(@Body() body: LoginRequest) {
    try {
      return await authService.login(body.email, body.password)
    } catch {
      this.setStatus(401)
      return { error: "invalid credentials" }
    }
  }
}

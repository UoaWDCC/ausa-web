import { authService } from "../../service-layer/services/AuthService"
import { AuthRequest } from "../../service-layer/dtos/request/AuthRequest"

export function expressAuthentication(
  request: AuthRequest,
  securityName: string,
  scopes?: string[],
) {
  if (securityName === "jwt") {
    const authHeader = String(request.headers.authorization || "")

    return new Promise((resolve, reject) => {
      if (!authHeader.startsWith("Bearer ")) {
        return reject(new Error("No token provided"))
      }

      const token = authHeader.split(" ")[1]

      try {
        // Verify JWT token
        const decoded = authService.verifyToken(token) as any

        // Check scopes if provided
        if (scopes && scopes.length > 0) {
          for (const scope of scopes) {
            // Example: scope could be "admin", "user" etc.
            if (decoded.role !== scope) {
              return reject(new Error(`Required role: ${scope}`))
            }
          }
        }

        // Attach user to request
        request.user = {
          uid: decoded.uid,
          role: decoded.role,
          email: decoded.email,
          name: decoded.name,
        }

        resolve(request.user)
      } catch {
        reject(new Error("Invalid or expired token"))
      }
    })
  }

  return Promise.reject(new Error("Unknown security scheme"))
}

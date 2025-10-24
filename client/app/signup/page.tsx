"use client"

import React, { useState, ChangeEvent } from "react"
import Link from "next/link"
import { AuthCard, Input } from "../components/auth/AuthForm"
import client from "../services/fetch-client"

export default function SignupPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setError("")

      const response = await client.POST("/auth/register", {
        body: {
          email,
          password,
          displayName: fullName,
        },
      })

      if (response.error) {
        setError("User already exists")
        return
      }

      // Store the JWT token
      if (response.data && "token" in response.data) {
        localStorage.setItem("authToken", String(response.data.token))
        console.log("Registration successful:", response.data)
        // Redirect to  home page
        window.location.href = "/"
      }
    } catch (err) {
      console.error("Registration error:", err)
      setError("An error occurred during registration")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthCard
      title="Sign up to AUSA"
      gradient="linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #e0f2fe 100%)"
    >
      <div>
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <Input
          label="Full Name"
          type="text"
          placeholder="Example Name"
          value={fullName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFullName(e.target.value)
          }
        />
        <Input
          label="Email"
          type="email"
          placeholder="Example@email.com"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Input
          label="Password"
          type="password"
          placeholder="Example Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={handleSubmit}
            className="text-[#2563eb] bg-[#2563eb]/20 hover:bg-[#2563eb]/10 duration-300 rounded-md m-2 px-4 py-2 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>

        <p
          className="text-center mt-4 text-sm"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
        >
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </AuthCard>
  )
}

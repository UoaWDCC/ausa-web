"use client"

import React, { useState } from "react"
import Link from "next/link"
import { AuthCard, Input } from "../components/auth/AuthForm"
import client from "../services/fetch-client"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setError("")

      const response = await client.POST("/auth/login", {
        body: {
          email,
          password,
        },
      })

      if (response.error) {
        setError("Invalid email or password")
        return
      }

      // Store the JWT token
      if (response.data && "token" in response.data) {
        localStorage.setItem("authToken", String(response.data.token))
        console.log("Login successful:", response.data)
        // Redirect to  home page
        window.location.href = "/"
      }
    } catch (err) {
      console.error("Login error:", err)
      setError("An error occurred during login")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthCard
      title="Welcome Back"
      gradient="linear-gradient(135deg, #dbeafe 0%, #e0f2fe 50%, #f0f9ff 100%)"
    >
      <div>
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        <Input
          label="Email"
          type="email"
          placeholder="Example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Example Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={handleSubmit}
            className="text-[#2563eb] bg-[#2563eb]/20 hover:bg-[#2563eb]/10 duration-300 rounded-md m-2 px-4 py-2 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>

        <p
          className="text-center mt-4 text-sm"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </AuthCard>
  )
}

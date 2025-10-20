"use client"

import React, { useState } from "react"
import Link from "next/link"
import client from "../services/fetch-client"
import { setToken } from "../services/auth-client"
import { AuthCard, Input, Button } from "../components/auth/AuthForm"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setError("")

      const response = await (client as any).POST("/auth/register", {
        body: {
          email,
          password,
          displayName,
        },
      })

      if (response.error) {
        setError("Unable to sign up")
        return
      }

      if (response.data && "token" in response.data) {
        setToken(String(response.data.token))
        window.location.href = "/"
      }
    } catch (err) {
      console.error("Signup error:", err)
      setError("An error occurred during signup")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthCard title="Create an account" gradient="linear-gradient(135deg, #ecfccb 0%, #fef3c7 50%, #fff7ed 100%)">
      <div>
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <Input label="Display name" placeholder="Your name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />

        <Input label="Email" type="email" placeholder="Example@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />

        <Input label="Password" type="password" placeholder="Example Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className="mt-6">
          <Button onClick={handleSubmit} variant="primary" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </div>

        <p className="text-center mt-4 text-sm" style={{ fontFamily: "Montserrat, sans-serif", color: "#6b7280" }}>
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </AuthCard>
  )
}
"use client"

import React, { useState } from "react"
import Link from "next/link"
import AuthForm, { AuthCard, Input, Button } from "../components/auth/AuthForm"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    alert(`Login attempted with:\nEmail: ${email}\nPassword: ${password}`)
  }

  return (
    <AuthCard
      title="Welcome Back"
      gradient="linear-gradient(135deg, #dbeafe 0%, #e0f2fe 50%, #f0f9ff 100%)"
    >
      <div>
        <Input label="Email" type="email" placeholder="Example@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" placeholder="Example Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="mt-6">
          <Button onClick={handleSubmit} variant="primary">
            Sign In
          </Button>
        </div>

        <p className="text-center mt-4 text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }}>
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-600 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </AuthCard>
  )
}

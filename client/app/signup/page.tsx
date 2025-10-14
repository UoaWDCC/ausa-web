"use client"

import React, { useState, ChangeEvent } from "react"
import Link from "next/link"
import { AuthCard, Input, Button } from "../components/auth/AuthForm"

export default function SignupPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    alert(`Signup attempted with:\nFull Name: ${fullName}\nEmail: ${email}\nPassword: ${password}`)
  }

  return (
    <AuthCard title="Sign up to AUSA" gradient="linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #e0f2fe 100%)">
      <div>
        <Input label="Full Name" type="text" placeholder="Example Name" value={fullName} onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)} />
        <Input label="Email" type="email" placeholder="Example@email.com" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
        <Input label="Password" type="password" placeholder="Example Password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
        <div className="mt-6">
          <Button onClick={handleSubmit} variant="primary">
            Sign Up
          </Button>
        </div>

        <p className="text-center mt-4 text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#6b7280' }}>
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </AuthCard>
  )
}
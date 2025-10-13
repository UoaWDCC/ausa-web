"use client"

import React, { useState } from "react"
import PortalCard from "../components/composite/portal-card/PortalCard"
import Background from "../components/composite/background/Background"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Background>
      <main className="min-h-screen flex items-center justify-center">
        <PortalCard>
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Welcome Back
          </h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="flex flex-col">
              <span className="mb-1 text-sm text-black">Email</span>
              <input
                type="email"
                className="border rounded-lg px-3 py-2 text-black bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                autoComplete="email"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1 text-sm text-black">Password</span>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 text-black bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Example Password"
                autoComplete="current-password"
              />
            </label>
            <button
              type="submit"
              className="mt-4 bg-[var(--primary-700)] hover:bg-[var(--primary-600)] rounded-lg py-2 transition"
            >
              Login
            </button>
          </form>
        </PortalCard>
      </main>
    </Background>
  )
}

export default LoginPage

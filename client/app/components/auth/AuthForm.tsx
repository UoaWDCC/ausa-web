"use client"

import React, { ChangeEvent } from "react"

export interface InputProps {
  label: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-medium text-slate-700 mb-1"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>
  )
}

export const Button: React.FC<{
  onClick?: () => void
  disabled?: boolean
  variant?: "primary" | "secondary" | "tertiary"
  className?: string
  children: React.ReactNode
}> = ({ onClick, disabled, variant = "primary", className = "", children }) => {
  const getButtonClass = () => {
    switch (variant) {
      case "secondary":
        return "btn-secondary"
      case "tertiary":
        return "btn-tertiary"
      default:
        return "btn-primary"
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonClass()} w-full ${className}`}
      style={{ fontFamily: "Montserrat, sans-serif", fontSize: "16px" }}
    >
      {children}
    </button>
  )
}

export const AuthCard: React.FC<{
  title: string
  children: React.ReactNode
  gradient?: string
}> = ({ title, children, gradient }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background:
          gradient ||
          "linear-gradient(135deg, #e0f2fe 0%, #dbeafe 50%, #fef3c7 100%)",
      }}
    >
      <div className="w-full max-w-md rounded-2xl p-8 shadow-lg backdrop-blur-md bg-white/70 text-slate-900">
        <h2
          className="text-center mb-6 text-2xl font-bold text-slate-900"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {title}
        </h2>

        {children}
      </div>
    </div>
  )
}

export default AuthCard

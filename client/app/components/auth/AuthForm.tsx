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
        className="block text-sm font-medium mb-2 text-gray-700"
        style={{ fontFamily: "Crimson Text, serif", fontSize: "16px" }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/80 backdrop-blur-sm"
        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px", color: "var(--black)" }}
      />
    </div>
  )
}

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "tertiary"
  disabled?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const getButtonClass = () => {
    switch (variant) {
      case "primary":
        return "btn-primary"
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
        background: gradient || "linear-gradient(135deg, #e0f2fe 0%, #dbeafe 50%, #fef3c7 100%)",
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl p-8 shadow-lg backdrop-blur-md"
        style={{
          background: "rgba(255, 255, 255, 0.7)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
        }}
      >
        <h2
          className="text-center mb-8"
          style={{
            fontFamily: "Crimson Text, serif",
            fontSize: "36px",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#043873",
          }}
        >
          {title}
        </h2>
        {children}
      </div>
    </div>
  )
}

export default null

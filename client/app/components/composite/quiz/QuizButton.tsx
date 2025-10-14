import React from "react"

interface QuizButtonProps {
  text: string
  onClick?: () => void
  disabled?: boolean
  className?: string
}

const QuizButton: React.FC<QuizButtonProps> = ({
  text,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        quiz-button
        h-[66px]
        w-full
        flex
        items-center
        justify-center
        text-center
        font-sans
        text-lg
        font-medium
        transition-all
        duration-200
        ease-in-out
        border-2
        border-transparent
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        ${className}
      `}
      style={{
        backgroundColor: "var(--light-grey-100)",
        color: "var(--black)",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.borderColor = "var(--primary-600)"
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.borderColor = "transparent"
        }
      }}
    >
      <span className="px-6 leading-relaxed">{text}</span>
    </button>
  )
}

export default QuizButton

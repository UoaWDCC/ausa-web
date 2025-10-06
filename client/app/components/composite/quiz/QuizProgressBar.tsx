import React from "react"

interface QuizProgressBarProps {
  /** Total number of questions/sections */
  totalSections: number
  /** Current active section (0-indexed) */
  currentSection: number
  /** Width of the entire progress bar in pixels */
  width?: number
  /** Height of the progress bar in pixels */
  height?: number
  /** Gap between individual sections in pixels */
  gap?: number
  /** Custom className for additional styling */
  className?: string
}

const QuizProgressBar: React.FC<QuizProgressBarProps> = ({
  totalSections,
  currentSection,
  width = 650,
  height = 11,
  gap = 4,
  className = "",
}) => {
  return (
    <div
      className={`flex w-full max-w-md sm:max-w-lg md:max-w-2xl ${className}`}
      style={{
        height: `${height}px`,
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          className="flex-1 transition-all duration-300 ease-in-out rounded-full"
          style={{
            height: `${height}px`,
            backgroundColor:
              index <= currentSection
                ? "var(--primary-600)" // Active/completed sections - light accent blue
                : "var(--primary-100)", // Inactive sections - pale blue
          }}
        />
      ))}
    </div>
  )
}

export default QuizProgressBar

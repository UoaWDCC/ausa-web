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
  // Calculate width for each section including gaps
  const sectionWidth = (width - gap * (totalSections - 1)) / totalSections

  return (
    <div
      className={`flex ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          className="transition-all duration-300 ease-in-out rounded-full"
          style={{
            width: `${sectionWidth}px`,
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

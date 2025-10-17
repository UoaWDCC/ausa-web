import React from "react"

interface PortalCardProps {
  children: React.ReactNode
  className?: string
}

const PortalCard: React.FC<PortalCardProps> = ({
  children,
  className = "",
}) => (
  <div
    className={`rounded-2xl max-w-md w-full shadow-lg bg-[#B9D5FF]/25 backdrop-blur-md p-8 ${className}`}
    style={{
      border: "2px solid",
      borderImage: "linear-gradient(to right, #FFDE91, #5FADE6) 1",
    }}
  >
    {children}
  </div>
)

export default PortalCard

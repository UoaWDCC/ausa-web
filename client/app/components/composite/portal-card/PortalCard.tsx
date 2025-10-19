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
    className={`rounded-2xl shadow-lg bg-white/20 p-8 max-w-md w-full backdrop-blur-md ${className}`}
    style={{
      border: "2px solid",
      borderImage: "linear-gradient(to right, #FFDE91, #5FADE6) 1",
    }}
  >
    {children}
  </div>
)

export default PortalCard
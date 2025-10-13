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
  >
    {children}
  </div>
)

export default PortalCard

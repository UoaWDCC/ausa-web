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
    className={`relative rounded-2xl m-4 max-w-md w-full shadow-2xl bg-[#B9D5FF]/30 backdrop-blur-md p-8 ${className}`}
    style={{
      border: "2px solid",
      borderImage: "linear-gradient(to right, #FFDE91, #5FADE6) 1",
      color: "black",
    }}
  >
    {children}
  </div>
)

export default PortalCard

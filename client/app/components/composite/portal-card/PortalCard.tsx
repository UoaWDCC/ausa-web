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
      position: "relative",
    }}
  >
    <div
      className="absolute inset-0 rounded-2xl -z-10"
      style={{
        background: "linear-gradient(to right, #FFDE91, #5FADE6)",
        padding: "2px",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />
    {children}
  </div>
)

export default PortalCard

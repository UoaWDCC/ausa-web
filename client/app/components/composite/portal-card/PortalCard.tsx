import React from "react"

interface PortalCardProps {
  children: React.ReactNode
  className?: string
}

const PortalCard: React.FC<PortalCardProps> = ({
  children,
  className = "",
}) => {
  const styles = `
    .grad-border {
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
    }

    .grad-border::before {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 0;
      border-radius: 1rem;
      padding: 2px;
      background: linear-gradient(to right, #FFDE91, #5FADE6);
      mask:
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0); 
      -webkit-mask-composite: xor; // 
      mask-composite: exclude;
    }
  `

  return (
    <>
      <style>{styles}</style>
      <div
        className={`grad-border p-15 max-w-md w-full shadow-lg ${className}`}
        style={{
          backgroundColor: "rgba(185, 213, 255, 0.25)",
          backdropFilter: "blur(12px)",
        }}
      >
        {children}
      </div>
    </>
  )
}

export default PortalCard
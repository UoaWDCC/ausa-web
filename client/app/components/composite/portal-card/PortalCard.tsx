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
        className="md:w-2/3 max-w-lg rounded-2xl p-8 shadow-lg backdrop-blur-md"
        style={{
          background: "rgba(255, 255, 255, 0.7)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
        }}
      >
        <div
          className="text-gray-700"
          style={{
            fontFamily: "Crimson Text, serif",
            fontSize: "16px",
          }}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default PortalCard

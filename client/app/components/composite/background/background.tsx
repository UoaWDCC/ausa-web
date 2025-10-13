import React from "react"

const Background: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="min-h-screen min-w-full flex flex-col"
    style={{
      backgroundColor: "var(--primary-600)",
      width: "100vw",
      minHeight: "100vh",
    }}
  >
    {children}
  </div>
)

export default Background

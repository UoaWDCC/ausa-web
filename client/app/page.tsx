import React from "react"
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-background">
      {/* Headings */}
      <div className="flex flex-col items-center gap-6">
        <h1
          className="h1"
          style={{ color: "black", marginTop: "150px", marginBottom: "24px" }}
        >
          Heading 1 (h1)
        </h1>
        <h2 className="h2" style={{ color: "black", marginBottom: "20px" }}>
          Heading 2 (h2)
        </h2>
        <div
          className="subtitle-italic"
          style={{ color: "black", marginBottom: "18px" }}
        >
          Subtitle Italic
        </div>
        <h3 className="h3" style={{ color: "black", marginBottom: "16px" }}>
          Heading 3 (h3)
        </h3>
        <h4 className="h4" style={{ color: "black", marginBottom: "14px" }}>
          Heading 4 (h4)
        </h4>
      </div>

      {/* Body text */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <p className="b1-body" style={{ color: "black", marginBottom: "12px" }}>
          Body 1: Montserrat, 30px
        </p>
        <div
          className="b2-body"
          style={{ color: "black", marginBottom: "10px" }}
        >
          Body 2: Montserrat, 25px
        </div>
        <div
          className="b3-body"
          style={{ color: "black", marginBottom: "8px" }}
        >
          Body 3: Montserrat, 20px
        </div>
      </div>

      {/* Buttons showcase */}
      <div className="flex flex-col gap-6 mt-10 items-center">
        <div className="flex flex-row gap-4 flex-wrap justify-center">
          {/* Primary Buttons */}
          <button className="btn-primary">Primary (Hover me!)</button>
          <button className="btn-primary">Primary Click Test</button>
          <button className="btn-primary" disabled>
            Primary Disabled
          </button>

          {/* Secondary Buttons */}
          <button className="btn-secondary">Secondary (Hover me!)</button>
          <button className="btn-secondary">Secondary Click Test</button>
          <button className="btn-secondary" disabled>
            Secondary Disabled
          </button>

          {/* Tertiary Buttons */}
          <button className="btn-tertiary">Tertiary (Hover me!)</button>
          <button className="btn-tertiary">Tertiary Click Test</button>
          <button className="btn-tertiary" disabled>
            Tertiary Disabled
          </button>
        </div>
      </div>
    </div>
  )
}

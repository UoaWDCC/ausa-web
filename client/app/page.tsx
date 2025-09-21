import React from "react"
import CarouselCard from "./components/carousel/CarouselCard"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-background">
      {/* Headings */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="h1" style={{ color: "black", marginBottom: "24px" }}>
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
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-primary-bg)",
              color: "var(--btn-primary-fg)",
              border: "none",
            }}
          >
            Primary
          </button>
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-primary-bg-hover)",
              color: "var(--btn-primary-fg)",
              border: "none",
            }}
          >
            Primary Hover
          </button>
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-primary-bg-press)",
              color: "var(--btn-primary-fg)",
              border: "none",
            }}
          >
            Primary Press
          </button>
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-primary-bg-disabled)",
              color: "var(--btn-primary-fg-disabled)",
              border: "none",
            }}
            disabled
          >
            Primary Disabled
          </button>

          {/* Secondary Buttons */}
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-secondary-bg)",
              color: "var(--btn-secondary-fg)",
              border: "none",
            }}
          >
            Secondary
          </button>
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-secondary-bg-hover)",
              color: "var(--btn-secondary-fg)",
              border: "none",
            }}
          >
            Secondary Hover
          </button>
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-secondary-bg-press)",
              color: "var(--btn-secondary-fg)",
              border: "none",
            }}
          >
            Secondary Press
          </button>
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-secondary-bg-disabled)",
              color: "var(--btn-secondary-fg-disabled)",
              border: "none",
            }}
            disabled
          >
            Secondary Disabled
          </button>

          {/* Tertiary Buttons */}
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-tertiary-bg)",
              color: "var(--btn-tertiary-fg)",
              border: "none",
            }}
          >
            Tertiary
          </button>
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-tertiary-bg-hover)",
              color: "var(--btn-tertiary-fg)",
              border: "none",
            }}
          >
            Tertiary Hover
          </button>
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-tertiary-bg-press)",
              color: "var(--btn-tertiary-fg)",
              border: "none",
            }}
          >
            Tertiary Press
          </button>
          <button
            className="px-6 py-3 rounded font-bold"
            style={{
              background: "var(--btn-tertiary-bg-disabled)",
              color: "var(--btn-tertiary-fg-disabled)",
              border: "none",
            }}
            disabled
          >
            Tertiary Disabled
          </button>
        </div>
      </div>

      {/* Carousel Testing */}
      <CarouselCard
        title="Sample Carousel Card"
        description="This is a description for the sample carousel card."
        image="/path/to/image.jpg"
        link="https://example.com"
        variant="wide"
      />
      <CarouselCard
        title="Sample Carousel Card"
        description="This is a description for the sample carousel card."
        image="/path/to/image.jpg"
        link="https://example.com"
        variant="thin"
      />
    </div>
  )
}

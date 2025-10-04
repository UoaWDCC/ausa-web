import React from "react"
import Button from "@/app/components/generic/button/regular/Button"

interface CarouselCardProps {
  title: string
  description: string
  image: string
  link: string
  variant?: "wide" | "thin"
}

const getDimensions = (variant: "wide" | "thin") => {
  if (variant === "wide") return { width: 630, height: 450 }
  // default to thin: mobile-first design
  return { width: 350, height: 470 }
}

const CarouselCard = ({
  title,
  description,
  image,
  link,
  variant,
}: CarouselCardProps) => {
  const { width, height } = getDimensions(variant || "thin")
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md bg-white flex flex-col border-gray-200 border"
      style={{ width, height }}
    >
      <img src={image} alt={title} className="w-full h-1/2 object-cover" />

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg text-gray-600 font-semibold">{title}</h3>

        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>

        <div className="mt-auto mb-4">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button
              label="Visit Website"
              className="px-6 py-3 mt-4 rounded-full btn-secondary"
              fontWeight="normal"
            />
          </a>
        </div>

        <img
          src="/ausa_logo.png"
          alt="AUSA Logo"
          className="absolute bottom-3 right-3 w-14 h-14"
        />
      </div>
    </div>
  )
}

export default CarouselCard

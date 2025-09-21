import React from "react"
import Image from "next/image"
import Button from "../generic/button/regular/Button"

interface CarouselCardProps {
  title: string
  description: string
  image: string
  link: string
  variant?: "wide" | "thin"
}

const getDimensions = (variant: "wide" | "thin") => {
  if (variant === "wide") return { width: 420, height: 300 }
  // default to thin: mobile-first design
  return { width: 300, height: 403 } // ~1.4 ratio
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
      className="rounded-lg overflow-hidden shadow-md bg-white flex flex-col"
      style={{ width, height }}
    >
      <img src={image} alt={title} className="w-full h-2/3 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mt-4">{title}</h3>
        <p className="text-sm text-gray-600 mt-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button
            label="Visit Website"
            className="px-6 py-3 mt-4 mb-10 btn-secondary"
            fontWeight="normal"
          />
        </a>
      </div>
    </div>
  )
}

export default CarouselCard

import React from "react"
import Image from "next/image"
import Button from "../generic/button/regular/Button"

interface CarouselCardProps {
  title: string
  description: string
  image: string
  link: string
}

const CarouselCard = ({
  title,
  description,
  image,
  link,
}: CarouselCardProps) => {
  return (
    <div className="rounded-lg shadow-md bg-white">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button
            label="Secondary"
            className="px-6 py-3 rounded font-bold btn-secondary"
          />
        </a>
      </div>
    </div>
  )
}

export default CarouselCard

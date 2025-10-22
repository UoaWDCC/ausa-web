import React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/utils/cn"

export interface CarouselCardProps {
  title: string
  description: string
  icon: React.ReactNode
  variant?: "wide" | "thin"
}

const carouselCardVariations = cva(
  // Base styles
  "w-full relative rounded-lg overflow-hidden bg-white flex flex-col border-gray-300 border-2",
  {
    variants: {
      variant: {
        wide: ["h-[450px]"],
        thin: ["h-[470px]"],
      },
    },
    defaultVariants: {
      variant: "thin",
    },
  },
)

const CarouselCard = ({
  title,
  description,
  icon,
  variant,
}: CarouselCardProps) => {
  const baseClasses = cn(carouselCardVariations({ variant }))

  const classes = `${baseClasses} w-full flex flex-col items-center text-center bg-gradient-to-b from-[#043873] to-[#7EA5D0] text-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105`

  return (
    <div className={classes}>
      <div className="text-6xl text-white mb-6">{icon}</div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-sm text-blue-100 leading-relaxed">{description}</p>
    </div>
  )
}

export default CarouselCard

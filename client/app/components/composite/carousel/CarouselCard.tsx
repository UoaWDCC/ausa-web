import React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/utils/cn"
import { Button } from "@/app/components/generic/button/next/Button"

export interface CarouselCardProps {
  title: string
  description: string
  image: string
  onCtaClick?: () => void
  ctaLabel?: string
  link?: string
  variant?: "wide" | "thin"
  buttonLabel?: string
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
  image,
  link,
  variant,
  onCtaClick,
  ctaLabel = "Learn More",
}: CarouselCardProps) => {
  const baseClasses = cn(carouselCardVariations({ variant }))

  return (
    <div className={baseClasses}>
      <img src={image} alt={title} className="w-full h-1/2 object-cover" />

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-3xl text-gray-700 font-semibold">{title}</h3>

        <p className="text-sm text-gray-500 mt-4 line-clamp-3">{description}</p>

        {(!!link || onCtaClick) && (
          <div className="mt-4">
            <Button
              asLink={!!link}
              href={link || "#"}
              onClick={onCtaClick}
              variant="secondary"
            >
              {ctaLabel}
            </Button>
          </div>
        )}

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

import React from "react"

interface SkeletonCarouselCardProps {
  variant?: "wide" | "thin"
}

const getDimensions = (variant: "wide" | "thin") => {
  if (variant === "wide") return { width: 630, height: 450 }
  // default to thin: mobile-first design
  return { width: 350, height: 470 }
}

const SkeletonCarouselCard = ({ variant }: SkeletonCarouselCardProps) => {
  const { width, height } = getDimensions(variant || "thin")
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md bg-white flex flex-col border-gray-200 border animate-pulse"
      style={{ width, height }}
    >
      {/* Skeleton for image */}
      <div className="w-full h-1/2 bg-gray-300"></div>

      <div className="p-4 flex flex-col flex-1">
        {/* Skeleton for title */}
        <div className="h-6 bg-gray-300 rounded mb-2"></div>

        {/* Skeleton for description */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>

        {/* Skeleton for button */}
        <div className="mt-auto mb-4">
          <div className="h-10 bg-gray-300 rounded-full w-32"></div>
        </div>

        {/* Skeleton for logo */}
        <div className="absolute bottom-3 right-3 w-14 h-14 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  )
}

export default SkeletonCarouselCard

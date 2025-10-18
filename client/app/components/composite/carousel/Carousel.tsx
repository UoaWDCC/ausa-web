"use client"

import React, { useRef } from "react"
import CarouselCard from "./CarouselCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
  title: string
  description: string
  image: string
  link: string
}

interface CarouselProps {
  items: CarouselItem[]
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const card = scrollRef.current.firstElementChild as HTMLElement
      if (!card) return
      const cardWidth = card.offsetWidth
      scrollRef.current.scrollBy({
        left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="w-full py-12 relative">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Carousel container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
        >
          {items.map((item, idx) => (
            <CarouselCard key={idx} {...item} />
          ))}
        </div>

        {/* Left button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Right button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  )
}

export default Carousel

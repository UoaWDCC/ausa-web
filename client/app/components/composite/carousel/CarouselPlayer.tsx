"use client"

import CarouselCard, { CarouselCardProps } from "./MainPageCarousel"
import { useCallback, useMemo, useState } from "react"
import { useWindowSize } from "@uidotdev/usehooks"
import { cn } from "@/utils/cn"

interface CarouselPlayerProps {
  /**
   * Note to consumer - you need to transform your data into {@link CarouselCardProps}
   * before passing it to the CarouselPlayer component.
   */
  carouselCards: CarouselCardProps[]
  /**
   * @remarks this is 0 indexed
   */
  onPageChange?: (newIndex: number) => void
}

export const CarouselPlayer = ({
  carouselCards,
  onPageChange,
}: CarouselPlayerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  // calculate cards per page based on screen size
  const { width } = useWindowSize()

  const cardsPerPage = useMemo(() => {
    if (!width) return 1
    if (width >= 1280) return 4 // xl and above
    if (width >= 1024) return 3 // lg
    if (width >= 640) return 2 // md
    return 1 // sm and below
  }, [width])

  const gridColsClass = useMemo(() => {
    switch (cardsPerPage) {
      case 4:
        return "grid-cols-4"
      case 3:
        return "grid-cols-3"
      case 2:
        return "grid-cols-2"
      default:
        return "grid-cols-1"
    }
  }, [cardsPerPage])

  const handlePageSelect = useCallback(
    (newIndex: number) => {
      setCurrentIndex(newIndex)
      if (onPageChange) {
        onPageChange(newIndex)
      }
    },
    [onPageChange],
  )

  const totalPages = Math.ceil(carouselCards.length / cardsPerPage)

  const CarouselCards = useMemo(
    () =>
      carouselCards
        .slice(currentIndex * cardsPerPage, (currentIndex + 1) * cardsPerPage)
        .map((card) => <CarouselCard {...card} key={card.title} />),
    [carouselCards, currentIndex, cardsPerPage],
  )

  const CarouselPagination = useMemo(
    () =>
      Array.from({ length: totalPages }).map((_, pageIndex) => (
        <button
          key={pageIndex}
          onClick={() => handlePageSelect(pageIndex)}
          className={cn(
            "h-3 w-3 rounded-full cursor-pointer",
            pageIndex === currentIndex
              ? "bg-btn-primary-fg-disabled"
              : " bg-btn-primary-bg-disabled",
          )}
        />
      )),
    [totalPages, handlePageSelect, currentIndex],
  )

  return (
    <article className="flex flex-col items-center w-full gap-8">
      {/* Render carousel cards based on currentIndex and cardsPerPage */}
      <section className={cn("grid w-full gap-4", gridColsClass)}>
        {CarouselCards}
      </section>
      {/* Pagination controls */}
      <section className="flex gap-8">{CarouselPagination}</section>
    </article>
  )
}

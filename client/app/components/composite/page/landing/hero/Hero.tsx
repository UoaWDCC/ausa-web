"use client"

import { Button } from "@/app/components/generic/button/next/Button"

interface HeroProps {
  title: string
  subtitle?: string
  onCtaClick?: () => void
}

export const Hero = ({ title, onCtaClick = () => {}, subtitle }: HeroProps) => {
  return (
    <section className="flex flex-col items-center justify-center py-20 primary-blue-gradient w-full text-white min-h-[75svh] text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm md:text-xl font-thin mb-8 horizontal-clipping">
          {subtitle}
        </p>
      )}
      {onCtaClick && (
        <Button onClick={onCtaClick} asLink href={"/quiz"} size="lg">
          Get Started
        </Button>
      )}
    </section>
  )
}

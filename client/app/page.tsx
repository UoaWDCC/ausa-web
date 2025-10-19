import React from "react"
import { Hero } from "@/app/components/composite/page/landing/hero/Hero"
import { MentalWellbeing } from "@/app/components/composite/page/landing/mental-wellbeing/MentalWellbeing"
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <Hero
        title={"Your Wellbeing, Our Priority"}
        subtitle={
          "Welcome to the TRK AUSA Wellbeing Portal! This is your go-to space for mental health support, resources, and guidance. Whether you're feeling overwhelmed, isolated, or just need someone to talk to, you're not alone. "
        }
      />
      <MentalWellbeing heading={"Mental Wellbeing"} />
    </main>
  )
}

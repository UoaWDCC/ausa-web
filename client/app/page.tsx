import React from "react"
import { Hero } from "@/app/components/composite/page/landing/hero/Hero"
import { MentalWellbeing } from "@/app/components/composite/page/landing/mental-wellbeing/MentalWellbeing"
import { CarouselCardProps } from "./components/composite/carousel/MainPageCarousel"
import { FaBullhorn } from "react-icons/fa"
import { TbMessages } from "react-icons/tb"
import { FaHandHoldingHeart } from "react-icons/fa"

const mentalWellbeingCards: CarouselCardProps[] = [
  {
    title: "Stress Management",
    description:
      "Learn effective techniques to manage stress and anxiety in your daily life. Discover mindfulness practices and coping strategies.",
    icon: <FaBullhorn />,
  },
  {
    title: "24/7 Support Line",
    description:
      "Access our confidential support line anytime you need someone to talk to. Trained counselors are available around the clock.",
    icon: <TbMessages />,
  },
  {
    title: "Mental Health Resources",
    description:
      "Explore our comprehensive library of mental health resources, articles, and tools to support your wellbeing journey.",
    icon: <FaHandHoldingHeart />,
  },
  {
    title: "Peer Support Groups",
    description:
      "Connect with others who understand what you're going through. Join our supportive community and share experiences.",
    icon: <FaHandHoldingHeart />,
  },
  {
    title: "Wellness Workshops",
    description:
      "Attend our interactive workshops on topics like resilience, self-care, and emotional intelligence. Free for all members.",
    icon: <FaBullhorn />,
  },
  {
    title: "Self-Care Tips",
    description:
      "Practical self-care strategies you can implement today. Small steps can make a big difference in your mental health.",
    icon: <TbMessages />,
  },
]

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <Hero
        title={"Your Wellbeing, Our Priority"}
        subtitle={
          "Welcome to the TRK AUSA Wellbeing Portal! This is your go-to space for mental health support, resources, and guidance. Whether you're feeling overwhelmed, isolated, or just need someone to talk to, you're not alone. "
        }
      />
      <MentalWellbeing
        heading={"Mental Wellbeing"}
        carouselItems={mentalWellbeingCards}
      />
    </main>
  )
}

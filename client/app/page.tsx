import React from "react"
import { Hero } from "@/app/components/composite/page/landing/hero/Hero"
import { MentalWellbeing } from "@/app/components/composite/page/landing/mental-wellbeing/MentalWellbeing"
import { CarouselCardProps } from "@/app/components/composite/carousel/CarouselCard"

export const metadata = {
  title: "Home | AUSA WEB",
  description: "Access your wellbeing resources and tools",
}

const mentalWellbeingCards: CarouselCardProps[] = [
  {
    title: "Stress Management",
    description:
      "Learn effective techniques to manage stress and anxiety in your daily life. Discover mindfulness practices and coping strategies.",
    image: "https://picsum.photos/seed/stress/400/300",
    link: "/resources/stress-management",
    ctaLabel: "Learn More",
  },
  {
    title: "24/7 Support Line",
    description:
      "Access our confidential support line anytime you need someone to talk to. Trained counselors are available around the clock.",
    image: "https://picsum.photos/seed/support/400/300",
    link: "/support/hotline",
    ctaLabel: "Get Help Now",
  },
  {
    title: "Mental Health Resources",
    description:
      "Explore our comprehensive library of mental health resources, articles, and tools to support your wellbeing journey.",
    image: "https://picsum.photos/seed/resources/400/300",
    link: "/resources",
    ctaLabel: "View Resources",
  },
  {
    title: "Peer Support Groups",
    description:
      "Connect with others who understand what you're going through. Join our supportive community and share experiences.",
    image: "https://picsum.photos/seed/peer/400/300",
    link: "/community/peer-support",
    ctaLabel: "Join Community",
  },
  {
    title: "Wellness Workshops",
    description:
      "Attend our interactive workshops on topics like resilience, self-care, and emotional intelligence. Free for all members.",
    image: "https://picsum.photos/seed/workshop/400/300",
    link: "/events/workshops",
    ctaLabel: "See Schedule",
  },
  {
    title: "Self-Care Tips",
    description:
      "Practical self-care strategies you can implement today. Small steps can make a big difference in your mental health.",
    image: "https://picsum.photos/seed/selfcare/400/300",
    link: "/resources/self-care",
    ctaLabel: "Read More",
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

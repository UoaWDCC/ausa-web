import CarouselCard from "../components/composite/carousel/CarouselCard"

const cards = [
  {
    image: "land_environment_resources.jpeg",
    heading: "Connection to Land & Environment",
    description:
      "Explore resources that help you connect with the land and environment.",
    cta: {
      href: "/resources/land-environment",
      label: "View Resources",
    },
  },
  {
    image: "financial_resources.jpeg",
    heading: "Financial Stability & Support",
    description:
      "Access financial support, budgeting tools, and resources for economic wellbeing.",
    cta: {
      href: "/resources/financial-stability",
      label: "View Resources",
    },
  },
  {
    image: "wellbeing_resources.jpeg",
    heading: "Mental & Emotional Wellbeing",
    description:
      "Find mental health support, counseling services, and emotional wellness resources.",
    cta: {
      href: "/resources/mental-emotional",
      label: "View Resources",
    },
  },
  {
    image: "physical_resources.jpeg",
    heading: "Physical Wellbeing & Health",
    description:
      "Discover health services, fitness resources, and physical wellness support.",
    cta: {
      href: "/resources/physical",
      label: "View Resources",
    },
  },
  {
    image: "social_resources.jpeg",
    heading: "Social & Family Wellbeing",
    description:
      "Connect with community support, family services, and social wellness resources.",
    cta: {
      href: "/resources/social-family",
      label: "View Resources",
    },
  },
  {
    image: "spiritual_resources.jpeg",
    heading: "Spiritual & Inner Wellbeing",
    description:
      "Explore spiritual practices, cultural connections, and inner wellness resources.",
    cta: {
      href: "/resources/spiritual",
      label: "View Resources",
    },
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <header className="mb-10 text-center pt-20">
        <h1 className="text-4xl font-serif font-bold text-[var(--primary-900)] mb-2">
          Resources
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-[var(--black)]">
          Find the support you need across financial, academic, external, and
          wellbeing resources. Click a card to learn more.
        </p>
      </header>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl place-items-center"
        aria-label="Resource Cards"
      >
        {cards.map((card, index) => (
          <div className="flex justify-center w-full" key={index}>
            <CarouselCard
              title={card.heading}
              description={card.description}
              image={card.image}
              link={card.cta.href}
              variant="thin"
              ctaLabel={card.cta.label}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

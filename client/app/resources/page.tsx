import CarouselCard from "../components/composite/carousel/CarouselCard"

const cards = [
  {
    image: "/financial_resources.jpeg",
    heading: "Financial Resources",
    description:
      "Explore scholarships, grants, budgeting tools, and financial support to help you thrive.",
    cta: {
      href: "/resources/financial",
      label: "View Financial",
    },
  },
  {
    image: "/academic_resources.jpeg",
    heading: "Academic Resources",
    description:
      "Access study guides, tutoring, workshops, and academic support for your success.",
    cta: {
      href: "/resources/academic",
      label: "View Academic",
    },
  },
  {
    image: "/external_resources.jpeg",
    heading: "External Resources",
    description:
      "Find trusted external organizations and services for additional help and opportunities.",
    cta: {
      href: "/resources/external",
      label: "Visit External",
    },
  },
  {
    image: "/wellbeing_resources.jpeg",
    heading: "Wellbeing Resources",
    description:
      "Discover mental health, wellness, and support services to help you feel your best.",
    cta: {
      href: "/resources/wellbeing",
      label: "View Wellbeing",
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

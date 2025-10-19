import CarouselCard from "@/app/components/composite/carousel/CarouselCard"
import ResourceService from "@/app/services/resource/resourceService"

export default async function FinancialResourcesPage() {
  const data = await ResourceService.getFinancialResources()

  return (
    <main className="min-h-screen flex flex-col items-center p-0">
      <header className="relative w-full h-[50vh]">
        <img
          src="/financial_resources.jpeg"
          className="absolute inset-0 w-full h-full object-cover brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#043873] to-transparent opacity-60 z-10 pointer-events-none" />
        <div className="relative z-20 w-full h-full flex items-end justify-center pb-8">
          <div className="flex flex-row items-end gap-10 max-w-6xl px-8">
            <h1 className="text-6xl text-[var(--white)]">
              <span className="italic">Financial</span>
              <br />
              Resources
            </h1>
            <p className="text-lg max-w-4xl text-[var(--white)] font-thin">
              Money worries can add extra stress, but you don’t have to face
              them alone. This page connects you with tools, services, and
              advice to help manage your finances. Taking control of your
              financial wellbeing is just as important as caring for your mental
              health.
            </p>
          </div>
        </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center py-20">
        {data?.resources?.map((resource) => (
          <CarouselCard
            key={resource.header}
            title={resource.header}
            description={resource.description}
            image={resource.image}
            link={resource.href}
            variant="wide"
          />
        ))}
      </section>
    </main>
  )
}

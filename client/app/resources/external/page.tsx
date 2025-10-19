import CarouselCard from "@/app/components/composite/carousel/CarouselCard"
import ResourceService from "@/app/services/resource/resourceService"

export default async function ExternalResourcesPage() {
  const data = await ResourceService.getExternalResources()

  return (
    <main className="min-h-screen flex flex-col items-center p-0">
      <header className="relative w-full h-[50vh]">
        <img
          src="/external_resources.jpeg"
          className="absolute inset-0 w-full h-full object-cover brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A7D8C] to-transparent opacity-60 z-10 pointer-events-none" />
        <div className="relative z-20 w-full h-full flex items-end justify-center pb-8">
          <div className="flex flex-row items-end gap-10 max-w-6xl px-8">
            <h1 className="text-6xl text-[var(--white)]">
              <span className="italic">External</span>
              <br />
              {data.title}
            </h1>
            <p className="text-lg max-w-4xl text-[var(--white)] font-thin pt-20">
              {data.description}
            </p>
          </div>
        </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center py-20 w-full max-w-6xl">
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

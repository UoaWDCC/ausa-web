import CarouselCard from "@/app/components/composite/carousel/CarouselCard"
import ResourceService from "@/app/services/resource/resourceService"

export default async function AcademicResourcesPage() {
  const data = await ResourceService.getAcademicResources()

  return (
    <main className="min-h-screen flex flex-col items-center p-0">
      <header className="relative w-full h-[50vh]">
        <img
          src="/academic_resources.jpeg"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
          alt="Academic Resources"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#7EC6EC] to-transparent opacity-60 z-10 pointer-events-none" />
        <div className="relative z-20 w-full h-full flex items-end justify-center pb-8">
          <div className="flex flex-row items-end gap-10 max-w-6xl px-8">
            <h1 className="text-6xl text-[var(--white)]">
              <span className="italic">{data?.title || "Academic"}</span>
              <br />
              {data.title}
            </h1>
            <p className="text-lg max-w-4xl text-[var(--white)] font-thin">
              {data?.description || "Explore our academic resources"}
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

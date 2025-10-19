import { useFinancialResources } from "@/app/services/resource/resourceQueries"

export default function FinancialResourcesPage() {
  // const financialResources = useFinancialResources()

  // const { data } = financialResources
  // const { title, description, resources } = data

  return (
    <main className="min-h-screen flex flex-col items-center p-0">
      <header className="relative w-full h-[50vh]">
        <img
          src="/wellbeing_resources.jpeg"
          className="absolute inset-0 w-full h-full object-cover brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFDE91] to-transparent opacity-40 z-10 pointer-events-none" />
        <div className="relative z-20 w-full h-full flex items-end justify-center pb-8">
          <div className="flex flex-row items-end gap-10 max-w-6xl px-8">
            <h1 className="text-6xl text-[var(--white)]">
              <span className="italic">Wellbeing</span>
              <br />
              Resources
            </h1>
            <p className="text-lg max-w-4xl text-[var(--white)] font-thin">
              Looking after your wellbeing goes beyond study—it’s about balance,
              resilience, and support. Here you’ll find practical tools, guides,
              and services designed to help you manage stress, boost your mental
              health, and feel your best.
            </p>
          </div>
        </div>
      </header>
      <section></section>
    </main>
  )
}

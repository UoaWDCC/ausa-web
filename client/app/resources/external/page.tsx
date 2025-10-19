import { useFinancialResources } from "@/app/services/resource/resourceQueries"

export default function FinancialResourcesPage() {
  // const financialResources = useFinancialResources()

  // const { data } = financialResources
  // const { title, description, resources } = data

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
              Resources
            </h1>
            <p className="text-lg max-w-4xl text-[var(--white)] font-thin">
              Sometimes the best support comes from outside the university. This
              page links you to trusted organisations, hotlines, and services
              for extra help when you need it.
            </p>
          </div>
        </div>
      </header>
      <section></section>
    </main>
  )
}

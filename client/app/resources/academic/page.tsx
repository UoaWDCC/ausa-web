import { useFinancialResources } from "@/app/services/resource/resourceQueries"

export default function FinancialResourcesPage() {
  // const financialResources = useFinancialResources()

  // const { data } = financialResources
  // const { title, description, resources } = data

  return (
    <main className="min-h-screen flex flex-col items-center p-0">
      <header className="relative w-full h-[50vh]">
        <img
          src="/academic_resources.jpeg"
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#7EC6EC] to-transparent opacity-60 z-10 pointer-events-none" />
        <div className="relative z-20 w-full h-full flex items-end justify-center pb-8">
          <div className="flex flex-row items-end gap-10 max-w-6xl px-8">
            <h1 className="text-6xl text-[var(--white)]">
              <span className="italic">Academic</span>
              <br />
              Resources
            </h1>
            <p className="text-lg max-w-4xl text-[var(--white)] font-thin">
              Studying can be challenging, but the right support makes all the
              difference. Here, you’ll find tools and services to help you
              succeed—whether it’s study skills, time management, tutoring, or
              academic advice. Remember, asking for help is a sign of strength,
              not weakness.
            </p>
          </div>
        </div>
      </header>
      <section></section>
    </main>
  )
}

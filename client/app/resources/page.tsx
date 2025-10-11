"use client"
import React from "react"
import ResourcesSection from "../components/composite/resources/ResourcesSection"

export interface Category {
  id: string
  label: string
}

export interface ResourceItem {
  title: string
  description: string
  url: string
}

export interface SectionData {
  id: string
  title: string
  sectionDescription: string
  resources: ResourceItem[]
}

type SidebarSectionProps = {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
}

// Collapsible sidebar
function SidebarSection({
  title,
  defaultOpen = false,
  children,
}: SidebarSectionProps) {
  const [open, setOpen] = React.useState(defaultOpen)
  const id = React.useId()

  return (
    <div className="mb-3 text-white">
      <button
        type="button"
        className="flex gap-2 items-center"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`sec-${id}`}
      >
        <h3 className="text-2xl mb-3">{title}</h3>
        {/* chevron */}
        <svg
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
          />
        </svg>
      </button>

      <div
        id={`sec-${id}`}
        aria-hidden={!open}
        className={`
                    overflow-hidden duration-500
                    transition-[max-height,opacity]
                    ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
      >
        {children}
      </div>
    </div>
  )
}

// Monile category selector
function MobileCategories({
  categories,
  value,
  onChange,
  includeAll = true,
  label = "Filter",
}: {
  categories: Category[]
  value: string
  onChange: (v: string) => void
  includeAll?: boolean
  label?: string
}) {
  const opts = includeAll
    ? [{ id: "all", label: "All" }, ...categories]
    : categories

  return (
    <div className="md:hidden flex items-center justify-between sticky top-[64px] bg-gradient-to-r from-[#043873] to-[#7EC6EC] rounded-br-full px-4 py-4 font-serif">
      <p className="font-serif text-2xl">{label}</p>
      <select
        aria-label="Filter resource category"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className=" p-2 mr-5 italic text-2xl focus:outline-none hover:cursor-pointer"
      >
        {opts.map((cat) => (
          <option key={cat.id} value={cat.id} className="bg-[#043873]">
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  )
}

const ResourcesPage = () => {
  // Resource data
  const sections: SectionData[] = [
    {
      id: "financial",
      title: "Financial",
      sectionDescription:
        "Money worries can add extra stress, but you don’t have to face them alone. This page connects you with tools, services, and advice to help manage your finances. Taking control of your financial wellbeing is just as important as caring for your mental health.",
      resources: [
        {
          title: "University Learning Hub",
          description:
            "Access workshops, peer mentoring, and study resources to enhance your learning.",
          url: "https://www.learninghub.auckland.ac.nz/",
        },
        {
          title: "Library Research Help",
          description:
            "Find guides and tutorials on researching effectively and managing references.",
          url: "https://www.library.auckland.ac.nz/",
        },
      ],
    },
    {
      id: "academic",
      title: "Academic",
      sectionDescription:
        "Studying can be challenging, but the right support makes all the difference. Here, you’ll find tools and services to help you succeed—whether it’s study skills, time management, tutoring, or academic advice. Remember, asking for help is a sign of strength, not weakness.",
      resources: [
        {
          title: "University Learning Hub",
          description:
            "Access workshops, peer mentoring, and study resources to enhance your learning.",
          url: "https://www.learninghub.auckland.ac.nz/",
        },
        {
          title: "Library Research Help",
          description:
            "Find guides and tutorials on researching effectively and managing references.",
          url: "https://www.library.auckland.ac.nz/",
        },
      ],
    },
    {
      id: "external",
      title: "External",
      sectionDescription:
        "Sometimes the best support comes from outside the university. This page links you to trusted organisations, hotlines, and services for extra help when you need it.",
      resources: [
        {
          title: "University Learning Hub",
          description:
            "Access workshops, peer mentoring, and study resources to enhance your learning.",
          url: "https://www.learninghub.auckland.ac.nz/",
        },
        {
          title: "Library Research Help",
          description:
            "Find guides and tutorials on researching effectively and managing references.",
          url: "https://www.library.auckland.ac.nz/",
        },
      ],
    },
    {
      id: "wellbeing",
      title: "Wellbeing",
      sectionDescription:
        "Looking after your wellbeing goes beyond study—it’s about balance, resilience, and support. Here you’ll find practical tools, guides, and services designed to help you manage stress, boost your mental health, and feel your best.",
      resources: [
        {
          title: "Student Health & Counselling",
          description:
            "Free and confidential health services to support your mental and physical wellbeing.",
          url: "https://www.auckland.ac.nz/en/on-campus/student-support.html",
        },
        {
          title: "Financial Aid Office",
          description:
            "Explore scholarships, grants, and financial assistance available to students.",
          url: "https://www.auckland.ac.nz/en/study/scholarships-and-awards.html",
        },
      ],
    },
  ]

  const categories: Category[] = sections.map((s) => ({
    id: s.id,
    label: s.title,
  }))
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all")

  const visible =
    selectedCategory === "all"
      ? sections
      : sections.filter((s) => s.id === selectedCategory)

  return (
    <div className="flex items-stretch min-h-[calc(100vh-64px)] min-h-screen bg-[#FAF7F2] mt-[64px]">
      {/* Main container (sidebar + content) */}
      <div className="w-full max-w-[1500px] flex flex-col md:flex-row gap-10">
        {/* MOBILE TOP CATEGORIES (now prop-driven) */}
        <MobileCategories
          categories={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
          includeAll
          label="Filter"
        />

        {/* LHS SIDEBAR — hello eve! */}
        <div className="w-full md:w-[300px] bg-gradient-to-b from-[#043873] to-[#C7E1FF] rounded-tr-4xl shadow-md p-6 hidden md:block mt-12">
          {/* Sidebar */}
          <h3 className="text-3xl text-white mb-10">
            Our <span className="italic">Resources</span>
          </h3>
          <SidebarSection title="Financial">
            <div className="ml-5 text-xl py-2 space-y-2 underline-offset-4 decoration-1 font-serif italic">
              <a
                href="https://www.learninghub.auckland.ac.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                University Learning Hub
              </a>
              <a
                href="https://www.library.auckland.ac.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                Library Research Help
              </a>
            </div>
          </SidebarSection>

          <SidebarSection title="Academic">
            <div className="ml-5 text-xl py-2 space-y-2 underline-offset-4 decoration-1 font-serif italic">
              <a
                href="https://www.learninghub.auckland.ac.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                University Learning Hub
              </a>
              <a
                href="https://www.library.auckland.ac.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                Library Research Help
              </a>
            </div>
          </SidebarSection>

          <SidebarSection title="Wellbeing">
            <div className="ml-5 text-xl py-2 space-y-2 underline-offset-4 decoration-1 font-serif italic">
              <a
                href="https://www.learninghub.auckland.ac.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                University Learning Hub
              </a>
              <a
                href="https://www.library.auckland.ac.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                Library Research Help
              </a>
            </div>
          </SidebarSection>

          <SidebarSection title="External">
            <div className="ml-5 text-xl py-2 space-y-2 underline-offset-4 decoration-1 font-serif italic">
              <a
                href="https://www.auckland.ac.nz/en/on-campus/student-support.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                Student Health & Counselling
              </a>
              <a
                href="https://www.auckland.ac.nz/en/study/scholarships-and-awards.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                Financial Aid Office
              </a>
            </div>
          </SidebarSection>
        </div>

        {/* RHS CONTENT */}
        <div className="flex-1 w-full bg-[#FAF7F2] p-6 mt-12">
          {visible.map((sec) => (
            <section key={sec.id} id={sec.id}>
              <ResourcesSection
                sectionTitle={sec.title}
                sectionDescription={sec.sectionDescription}
                resources={sec.resources}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage

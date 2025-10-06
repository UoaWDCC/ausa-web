"use client"
import React from "react"
import ResourcesSection from "../components/composite/resources/ResourcesSection"

type SidebarSectionProps = {
    title: string
    defaultOpen?: boolean
    children: React.ReactNode
}

// Collapsible sidebar section component
function SidebarSection({ title, defaultOpen = false, children }: SidebarSectionProps) {
    const [open, setOpen] = React.useState(defaultOpen)
    const id = React.useId()

    return (
        <div className="mb-3 text-white">
            <button
                type="button"
                className="flex gap-2 items-center"
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
                aria-controls={`sec-${id}`}
            >
                <h3 className="text-2xl mb-3">{title}</h3>
        {/* chevron */}
                <svg
                    className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20" fill="white" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
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

const ResourcesPage = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-[#FAF7F2] py-16 px-5 md:p-10">
      {/* Main container (sidebar + content) */}
      <div className="w-full max-w-[1500px] flex flex-col md:flex-row gap-8">

        {/* LHS SIDEBAR — hello eve! */}
        <div className="w-full md:w-[300px] bg-gradient-to-b from-[#043873] to-[#C7E1FF] rounded-lg shadow-md p-6 hidden md:block mt-14">
          {/* Sidebar buttons */}
            <h3 className="text-3xl text-white mb-10">Our <span className="italic">Resources</span></h3>
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
        <div className="flex-1 w-full bg-white rounded-lg shadow-lg p-8">
            <ResourcesSection
                sectionTitle="Financial"
                sectionDescription="Money worries can add extra stress, but you don’t have to face them alone. 
                This page connects you with tools, services, and advice to help manage your finances. 
                Taking control of your financial wellbeing is just as important as caring for your mental health."
                resources={[
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
                ]}
            />

            <ResourcesSection
                sectionTitle="Academic"
                sectionDescription="Studying can be challenging, but the right support makes all the difference. 
                Here, you’ll find tools and services to help you succeed—whether it’s study skills, time management, tutoring, or academic advice. 
                Remember, asking for help is a sign of strength, not weakness."
                resources={[
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
                ]}
            />

            <ResourcesSection
                sectionTitle="External"
                sectionDescription="Sometimes the best support comes from outside the university. 
                This page links you to trusted organisations, hotlines, and services for extra help when you need it."
                resources={[
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
                ]}
            />

            <ResourcesSection
                sectionTitle="Wellbeing"
                sectionDescription="Looking after your wellbeing goes beyond study—it’s about balance, resilience, and support. 
                Here you’ll find practical tools, guides, and services designed to help you manage stress, boost your mental health, and feel your best."
                resources={[
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
                ]}
            />
        </div>
      </div>
    </div>
  )
}

export default ResourcesPage

"use client"
import React from "react"
import ResourcesSection from "../components/composite/resources/ResourcesSection"

const ResourcesPage = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-16 px-5 md:p-10">
      {/* Main container (sidebar + content) */}
      <div className="w-full max-w-[1500px] flex flex-col md:flex-row gap-8">

        {/* LHS SIDEBAR — hello eve! */}
        <div className="w-full md:w-[300px] bg-white rounded-lg shadow-md p-6 hidden md:block">
          {/* Placeholder for sidebar buttons */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Categories</h3>
          <p className="text-sm text-gray-500 italic">Sidebar under construction...</p>
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

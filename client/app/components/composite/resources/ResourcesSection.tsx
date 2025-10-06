"use client"
import React from "react"
import ResourcesLink from "./ResourcesLink"

interface Resource {
  title: string
  description: string
  url: string
}

interface ResourcesSectionProps {
  sectionTitle: string
  sectionDescription: string
  resources: Resource[]
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  sectionTitle,
  sectionDescription,
  resources,
}) => {
  return (
    <section className="rounded-xl p-8 mb-10">
        <h1 className="text-4xl text-[#2A2A2A] mb-3">
        <span className="italic">{sectionTitle}</span> Resources
        </h1>
        
        <h3 className="text-gray-600 mb-6">{sectionDescription}</h3>
        <div className="flex flex-col gap-4">
            {resources.map((res, idx) => (
            <ResourcesLink
                key={idx}
                title={res.title}
                description={res.description}
                url={res.url}
            />
            ))}
        </div>
    </section>
  )
}

export default ResourcesSection

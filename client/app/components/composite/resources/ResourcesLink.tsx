"use client"
import React from "react"

interface ResourcesLinkProps {
  title: string
  description: string
  url: string
}

const ResourcesLink: React.FC<ResourcesLinkProps> = ({ title, description, url }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-[#3B3F5C] mb-2">{title}</h2>
      <h3 className="text-gray-600 text-sm mb-4">{description}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start px-4 py-2 text-[#2563EB] bg-[#DBEAFE]/70 rounded-md text-sm hover:bg-[#DBEAFE] transition-colors"
      >
        Visit Website
      </a>
    </div>
  )
}

export default ResourcesLink

import React from "react"

interface CardItemProps {
  title: string
  description: string
  icon: React.ReactNode
}

const CardItem: React.FC<CardItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#043873] to-[#7EA5D0] text-white p-8 rounded-lg shadow-lg w-full md:w-1/4 transition-transform hover:scale-105">
      <div className="text-6xl text-white mb-6">{icon}</div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-sm text-blue-100 leading-relaxed">{description}</p>
    </div>
  )
}

export default CardItem

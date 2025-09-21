"use client"

import React, { useState } from "react"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

const cards = [
  {
    title: "Awareness",
    text: "Awareness is about noticing how you’re really feeling—your thoughts, emotions, and energy levels—so you can respond with care.",
    popUpText: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Notice your thoughts, feelings, and energy levels throughout the day.
        </li>
        <li>Pause before reacting to situations—observe first.</li>
        <li>Keep a journal to track moods, triggers, and patterns.</li>
        <li>Practice mindfulness or short meditation sessions.</li>
        <li>
          Recognize signs of stress or fatigue early and respond appropriately.
        </li>
      </ul>
    ),
  },
  {
    title: "Communication",
    text: "Communication helps you build stronger connections, express yourself clearly, and create supportive relationships that boost your wellbeing.",
    popUpText: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Speak clearly and actively listen to others.</li>
        <li>Use “I” statements to express feelings without blaming.</li>
        <li>Ask questions to clarify instead of assuming.</li>
        <li>Maintain eye contact and open body language.</li>
        <li>Provide and accept constructive feedback gracefully.</li>
      </ul>
    ),
  },
  {
    title: "Selfcare",
    text: "Self-care means making time for the little things that recharge you—because looking after yourself is essential, not optional.",
    popUpText: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Schedule short breaks to recharge during your day.</li>
        <li>Prioritize sleep, nutrition, and exercise.</li>
        <li>Set boundaries for work, study, and personal time.</li>
        <li>Engage in hobbies or activities that bring joy.</li>
        <li>Practice relaxation techniques (breathing, baths, walks).</li>
      </ul>
    ),
  },
]

const ModalWindow = () => {
  const [selectedCard, setSelectedCard] = useState<null | (typeof cards)[0]>(
    null,
  )

  return (
    <div className="w-[500px] md:w-full flex justify-center gap-0">
      {/* cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0">
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCard(card)}
            className="flex-1 p-8 cursor-pointer 
                       transition 
                       bg-[#3A7D8C]
                       group
                       relative"
          >
            {/* white lines between cards */}
            {idx < cards.length - 1 && (
              <span className="hidden md:block absolute right-0 h-[150px] w-[2px] bg-white"></span>
            )}
            <div className="flex items-center gap-4 mb-4">
              <h2
                className="h5 text-2xl text-white relative 
             after:content-[''] after:block after:h-[2px] after:bg-white 
             after:scale-x-0 after:origin-left 
             after:transition-transform after:duration-300
             md:group-hover:after:scale-x-100"
              >
                {card.title}
              </h2>
              <ArrowRightIcon className="w-5 h-5 text-white" />
            </div>
            <p className="b3-body text-white">{card.text}</p>
          </div>
        ))}
      </div>

      {/* modal overlay */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm "
            onClick={() => setSelectedCard(null)}
          ></div>

          {/* modal card */}
          <div className="relative bg-[#3A7D8C] rounded-2xl shadow-lg max-w-md w-full p-10">
            {/* close button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 text-white cursor-pointer hover:opacity-80 text-xl"
            >
              ✕
            </button>

            <h1 className="text-white mb-4">{selectedCard.title}</h1>
            <p className=" text-white b3-body">{selectedCard.popUpText}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalWindow

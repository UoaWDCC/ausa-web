"use client";

import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";


const cards = [
  {
    title: "Awareness",
    text: "Awareness is about noticing how you’re really feeling—your thoughts, emotions, and energy levels—so you can respond with care.",
  },
  {
    title: "Communication",
    text: "Communication helps you build stronger connections, express yourself clearly, and create supportive relationships that boost your wellbeing.",
  },
  {
    title: "Selfcare",
    text: "Self-care means making time for the little things that recharge you—because looking after yourself is essential, not optional.",
  },
];

const ModalWindow = () => {
  const [selectedCard, setSelectedCard] = useState<null | typeof cards[0]>(null);

  return (
    <div className="w-full flex justify-center">
      {/* always visible cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:divide-x md:divide-gray-300">
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCard(card)}
            className="flex-1 p-6 bg-[#3A7D8C] md:w-full w-[400px] justify-center align-items items-center cursor-pointer hover:bg-gray-300 transition "
          >
            <h1 className=" font-bold mb-2 flex items-center gap-4 ">
              {card.title}
              <ArrowRightIcon className="w-5 h-5 text-gray-600 text-white" />
            </h1>
            <p>{card.text}</p>
          </div>

        ))}
      </div>

      {/* modal overlay */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#3A7D8C] rounded-2xl shadow-lg max-w-md w-full p-6 relative">
            {/* close button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 text-gray-600 cursor-pointer hover:text-gray-900 text-xl"
            >
              ✕
            </button>

            <h1 className="text-xl font-bold mb-4">{selectedCard.title}</h1>
            <p>{selectedCard.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalWindow;

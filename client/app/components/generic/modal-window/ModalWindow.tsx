"use client";

import React, { useState } from "react";

const cards = [
  {
    title: "About Us",
    text: "Our portal brings together tools, services, and a supportive community to help you prioritise your wellbeing.",
  },
  {
    title: "Wellbeing Quiz",
    text: "Take our short quiz to check in, reflect, and discover tailored resources and support to boost your wellbeing today.",
  },
  {
    title: "Events",
    text: "Join workshops, socials and wellbeing weeks. Something for everyone!",
  },
];

const ModalWindow = () => {
  const [selectedCard, setSelectedCard] = useState<null | typeof cards[0]>(null);

  return (
    <div className="">
      {/* always visible cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:divide-x md:divide-gray-300">
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCard(card)}
            className="flex-1 p-6 bg-gray-200 cursor-pointer hover:bg-gray-300 transition"
          >
            <h1 className="font-bold mb-2">{card.title}</h1>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      {/* modal overlay */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
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

"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";


interface AccordianProps {
  title: string;
  content: string;
}

const Accordian: React.FC<AccordianProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordian = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <div className="text-black border-b border-[#043873]">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex justify-between items-center w-full px-4 py-5 cursor-pointer"
      >
        <span>{title}</span>

        <ChevronDownIcon
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && <div className="px-4 py-3 text-gray-700">{content}</div>}
    </div>
  );
};

export default Accordian;


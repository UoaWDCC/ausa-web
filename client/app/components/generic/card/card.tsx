import { FaBullhorn } from "react-icons/fa6"
import { TbMessages } from "react-icons/tb"
import { FaHandHoldingHeart } from "react-icons/fa"

export default function WellbeingCards() {
  const cards = [
    {
      icon: <FaBullhorn />,
      title: "Awareness",
      text: "Our portal brings together tools, services, and a supportive community to help you prioritise your wellbeing.",
    },
    {
      icon: <TbMessages />,
      title: "Communication",
      text: "Communication helps you build stronger connections, express yourself clearly, and create supportive relationships that boost your wellbeing.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Selfcare",
      text: "Self-care means making time for the little things that recharge you—because looking after yourself is essential, not optional.",
    },
  ]

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 p-8 min-h-[400px]">
      {cards.map((card) => (
        <div
          key={card.title}
          className="flex flex-col items-center text-center bg-gradient-to-b from-[#043873] to-[#7EA5D0] text-white p-8 rounded-lg shadow-lg w-full md:w-1/4 transition-transform hover:scale-105"
        >
          <div className="text-6xl text-white mb-6">{card.icon}</div>
          <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
          <p className="text-sm text-blue-100 leading-relaxed">{card.text}</p>
        </div>
      ))}
    </div>
  )
}

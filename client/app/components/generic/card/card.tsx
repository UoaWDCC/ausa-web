import { FaBullhorn } from "react-icons/fa6"
import { TbMessages } from "react-icons/tb"
import { FaHandHoldingHeart } from "react-icons/fa"
import CardItem from "./cardItem"

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
        <CardItem
          key={card.title}
          title={card.title}
          description={card.text}
          icon={card.icon}
        />
      ))}
    </div>
  )
}

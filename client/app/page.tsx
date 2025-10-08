// app/page.tsx (App Router)
// or pages/index.tsx (Pages Router)
import Image from "next/image"
import ModalWindow from "./components/composite/modal-window/ModalWindow"
import Carousel from "./components/composite/carousel/Carousel"

const carouselItems = [
  {
    title: "Counselling Services",
    description:
      "Free and confidential counselling sessions available to all students. Book online or in-person.",
    image: "/counselling.jpg",
    link: "https://www.auckland.ac.nz/en/on-campus/student-support/student-health-counselling.html",
  },
  {
    title: "Medical Centre",
    description:
      "On-campus doctors and nurses providing primary healthcare, prescriptions, and wellbeing checks.",
    image: "/medical.jpg",
    link: "https://www.auckland.ac.nz/en/on-campus/student-support/student-health.html",
  },
  {
    title: "Peer Support",
    description:
      "Connect with fellow students trained to support you through challenges in a safe space.",
    image: "/peer.jpg",
    link: "https://ausa.org.nz/",
  },
  {
    title: "More Support",
    description:
      "Connect with fellow students trained to support you through challenges in a safe space.",
    image: "/peer.jpg",
    link: "https://ausa.org.nz/",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex flex-col items-center justify-center text-center bg-black text-white min-h-screen max-w-[100vw] mt-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Your Wellbeing, Our Priority
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Welcome to the TRK-AUSA Wellbeing Portal! This is your go-to space for
          mental health support, resources and guidance. Whether you're feeling
          overwhelmed, isolated, or just need someone to talk to, you're not
          alone.
        </p>
        <button className="mt-6 bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
          Learn More
        </button>
        <div className="md:hidden mx-auto mt-6">
          <ModalWindow />
        </div>
      </div>
      <div className="hidden md:flex md:justify-center md:relative md:z-10 md:-mt-24">
        <ModalWindow />
      </div>

      <h1 className="text-[#3A7D8C] mt-10 italic text-4xl text-center mb-8">
        Wellbeing Events
      </h1>

      <Carousel items={carouselItems} />
    </div>
  )
}

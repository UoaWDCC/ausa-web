// app/page.tsx (App Router) 
// or pages/index.tsx (Pages Router)
import Image from "next/image";
import ModalWindow from "./components/composite/modal-window/ModalWindow";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="relative flex flex-col items-center justify-center text-center text-white min-h-[60vh]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/image3.jpeg"
            alt="Hero Background"
            fill
            priority
            className="object-cover brightness-75"
          />
        </div>

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
        <div className="flex md:hidden w-[90%] mx-10 mt-6">
            <ModalWindow />
        </div>
      </div>
        <div className="hidden md:flex md:w-[90%] md:mx-auto md:relative md:z-10 md:-mt-24">
            <ModalWindow />
        </div>
    </div>
  );
}

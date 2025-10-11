"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import Button from "../components/generic/button/regular/Button"
import Page from "@/public/ausa_logo.png"

const TAB_COLOURS: Record<string, { header: string; main: string }> = {
  about: {
    header: "bg-white",
    main: "bg-gradient-to-b from-[#FAF7F2] to-[#CAE5F8]",
  },
  quizresults: {
    header: "bg-[#FFDE91]",
    main: "bg-[#FAF7F2]",
  },
}

const Profile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [activeTab, setActiveTab] = useState<"about" | "quizresults">("about")
  const [isEditing, setIsEditing] = useState(false)


  const handleFileClick = () => fileInputRef.current?.click()
  const handleEditToggle = () => {
    setIsEditing((prev) => !prev)
    setActiveTab("about")
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      console.log("Selected file:", file)
    }
  }

  const currentStyle = TAB_COLOURS[activeTab] ?? TAB_COLOURS.about

  return (
    <div className={`min-h-screen w-full ${currentStyle.main}`}>
      {/* Profile Header */}
      <div
        className={`flex flex-col mt-[64px] w-full items-center gap-8 h-[300px] ${currentStyle.header}`}
      />

      <div className="relative w-[250px] h-[250px] mx-auto -mt-[200px] z-10">
        {/* Profile Picture */}
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-md bg-white ring-2 ring-black">
          <Image alt="Profile Photo" className="object-cover" fill src={Page} />
        </div>
        <input
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          ref={fileInputRef}
          type="file"
        />


        {/* Camera Button */}
        <Button label="cameraIcon" onClick={handleFileClick}></Button>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-col text-black mt-[50px] w-full relative">
        <h1 className="text-4xl text-[#043873] text-center mt-20 mb-15">
          Welcome, User!
        </h1>

        <div className="flex flex-col mb-3 px-6 x-6 md:mx-30">
          {/* Tabs */}
          <div className="flex justify-between w-full items-center">
            <ul className="flex flex-1 font-serif gap-6 font-semibold">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveTab("about")}
                  className={`px-2 py-1 transition ${activeTab === "about" ? "text-[#2563EB]": "text-black" }`}
                >
                  About
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => setActiveTab("quizresults")}
                  className={`px-2 py-1 transition ${activeTab === "quizresults" ? "text-[#2563EB]": "text-black" }`}
                >
                  Quiz Results
                </button>
              </li>
            </ul>

            {/* Edit Profile Button */}
            <button
              type="button"
              onClick={handleEditToggle}
              className="bg-blue-100 text-blue-500 px-4 p-2 rounded-full hover:bg transition"
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border border-black-900 mt-1 px-6 mx-6 md:mx-30" />

        {/* Tab Content (depending on what tab is currently clicked on) */}
        <div className="mt-8 px-6 md:mx-30 mb-20">
          {activeTab === "about" && <div>About Component Placeholder</div>}
          {activeTab === "quizresults" && <div>Quiz Results Placeholder</div>}
        </div>
      </div>
    </div>
  )
}

export default Profile

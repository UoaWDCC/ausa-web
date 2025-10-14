"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import Logo from "@/public/ausa_logo.png"
import Camera from "@/public/camera.svg"
import type { User as FirebaseUser } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/app/config/firebase"
import { getCurrentUser } from "@/app/services/firebase-auth"

const TAB_COLOURS: Record<string, { header: string; main: string }> = {
  about: {
    header: "bg-white",
    main: "bg-gradient-to-b from-[#FAF7F2] to-[#CAE5F8]",
  },
  quizresults: {
    header: "bg-white",
    main: "bg-gradient-to-b from-[#FAF7F2] to-[#CAE5F8]",
  },
}

const Profile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [activeTab, setActiveTab] = useState<"about" | "quizresults">("about")
  const [isEditing, setIsEditing] = useState(false)

  // // Firebase user state
  // const [user, setUser] = useState<FirebaseUser | null>(null)
  // const [authReady, setAuthReady] = useState(false)

  // {
  //   /* Firebase auth state  */
  // }
  // useEffect(() => {
  //   if (!auth) {
  //     // Firebase not initialized (envs missing or init failed)
  //     setUser(null)
  //     setAuthReady(true)
  //     return
  //   }

  //   // 1) fast path after refresh
  //   setUser(getCurrentUser())

  //   // 2) subscribe for reliable first-load/sign-in/out updates
  //   const unsub = onAuthStateChanged(auth, (u) => {
  //     setUser(u)
  //     setAuthReady(true)
  //   })
  //   return () => unsub()
  // }, [])

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
  // const displayName = user?.displayName || user?.email || "User"

  return (
    <div className={`min-h-screen w-full ${currentStyle.main}`}>
      {/* Profile Header */}
      <div
        className={`flex flex-col mt-[64px] w-full items-center gap-8 h-[300px] ${currentStyle.header}`}
      />

      <div className="relative w-[250px] h-[250px] mx-auto -mt-[200px] z-10">
        {/* Profile Picture */}
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-md bg-white ring-2 ring-black">
          <Image alt="Profile Photo" className="object-cover" fill src={Logo} />
        </div>
        <input
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          ref={fileInputRef}
          type="file"
        />

        {/* Camera Button */}
        <button
          className="absolute bottom-6 right-2 bg-[#FAF7F2] p-2 rounded-full shadow-md hover:ring-2 ring-black transition"
          onClick={handleFileClick}
        >
          <Image
            alt="Change Profile Photo"
            className="object-cover"
            src={Camera}
          />
        </button>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-col text-black w-full relative">
        <h1 className="text-4xl text-[#043873] text-center mt-12 mb-16 italic">
          {/* {`Welcome, ${displayName}!`} */}
          Welcome, User!
        </h1>

        <div className="flex flex-col mb-3 px-2 md:mx-30">
          {/* Tabs */}
          <div className="flex justify-between w-full items-center">
            <ul className="flex flex-1 font-serif gap-6 text-xl">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveTab("about")}
                  className={`px-2 py-1 transition ${activeTab === "about" ? "text-[#2563EB]" : "text-[#3B3F5C]"}`}
                >
                  About
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => setActiveTab("quizresults")}
                  className={`px-2 py-1 transition ${activeTab === "quizresults" ? "text-[#2563EB]" : "text-[#3B3F5C]"}`}
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
          {/* About Tab */}
          {activeTab === "about" && (
            // Section Container
            <div className="flex flex-col gap-10">
              {/* About Me Section */}
              <div className="w-full bg-white rounded-lg px-6 py-8 border border-neutral-200 hover:shadow-md">
                <h3 className="font-semibold text-xl mb-6 text-[#3B3F5C]">About Me</h3>
                <p className="text-[#3B3F5C] mt-2 text-sm">
                  Description here.
                </p>
              </div>
              {/* Wellbeing Notes Section */}
              <div className="w-full bg-white rounded-lg px-6 py-8 border border-neutral-200 hover:shadow-md">
                <h3 className="font-semibold text-xl text-[#3B3F5C]">Wellbeing Notes</h3>
                <h3 className="font-medium text-lg mt-10 text-[#3B3F5C]">Best wellbeing advice I was given was...</h3>
                <p className="text-[#3B3F5C] mt-3 text-sm">
                  Description here.
                </p>
                <h3 className="font-medium text-lg mt-10 text-[#3B3F5C]">Best way to chill after a day of Uni is...</h3>
                <p className="text-[#3B3F5C] mt-3 text-sm">
                  Description here.
                </p>
              </div>
            </div>
          )}
          {/* Quiz Results Tab */}
          {activeTab === "quizresults" && (
            // Section Container
            <div className="flex gap-10 flex-col md:flex-row">
              {/* Sidebar section*/}
              <div className="hidden lg:block lg:w-[300px] bg-white rounded-lg px-6 py-8 border border-neutral-200">
                <h3 className="font-semibold text-xl mb-6 text-[#3B3F5C]">Entries</h3>
                <h3 className="text-xl mb-6 ml-3">06/10/25, 1:10pm</h3>
                <h3 className="text-xl mb-6 ml-3">06/10/25, 1:10pm</h3>
                <h3 className="text-xl mb-6 ml-3">06/10/25, 1:10pm</h3>
              </div>
              {/* Resource Link section */}
              <div className="w-full lg:flex-1 flex flex-col gap-10">
                <div className="bg-white rounded-lg px-6 py-8 border border-neutral-200 hover:shadow-md">
                  <h3 className="font-semibold text-xl mb-6 text-[#3B3F5C]">Resource Links</h3>
                  <p className="text-[#3B3F5C] mt-2 text-sm mb-5">
                    Description here.
                  </p>
                  <button
                    type="button"
                    className="bg-blue-100 text-blue-500 p-2 rounded-full hover:bg transition"
                  >Visit Website</button>
                </div>
                <div className="bg-white rounded-lg px-6 py-8 border border-neutral-200 hover:shadow-md">
                  <h3 className="font-semibold text-xl mb-6 text-[#3B3F5C]">Resource Links</h3>
                  <p className="text-[#3B3F5C] mt-2 text-sm mb-5">
                    Description here.
                  </p>
                  <button
                    type="button"
                    className="bg-blue-100 text-blue-500 p-2 rounded-full hover:bg transition"
                  >Visit Website</button>
                </div>
                <div className="bg-white rounded-lg px-6 py-8 border border-neutral-200 hover:shadow-md">
                  <h3 className="text-xl mb-6 text-[#3B3F5C]">Resource Links</h3>
                  <p className="text-[#3B3F5C] mt-2 text-sm mb-5">
                    Description here.
                  </p>
                  <button
                    type="button"
                    className="bg-blue-100 text-blue-500 p-2 rounded-full hover:bg transition"
                  >Visit Website</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile

"use client"

import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import Logo from "@/public/ausa_logo.png"
import Camera from "@/public/camera.svg"
import type { User as FirebaseUser } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/app/config/firebase"
import { getCurrentUser } from "@/app/services/firebase-auth"
import Result from "../models/request-models/Result"

type Resource = { id: string; title: string; url: string; description?: string }
type Entry = { id: string; label: string; datetime: string; resources: Resource[] }

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

// SAMPLE ENTRIES: delete when reources can be loaded from API
const sampleEntries: Entry[] = [
  {
    id: "E1",
    datetime: "2025-10-06T13:10:00",
    resources: [
      { id: "R1", title: "Mixing University Life with Mental Wellbeing", url: "https://example.com/a", description: "aaa"},
      { id: "R2", title: "How to Survive Building a Project for AUSA", url: "https://example.com/b", description: "aaa"},
      { id: "R3", title: "Mixing University Life with Mental Wellbeing", url: "https://example.com/a", description: "aaa"},
      { id: "R4", title: "How to Survive Building a Project for AUSA", url: "https://example.com/b", description: "aaa"},
    ],
  },
  {
    id: "E2",
    label: "08/10/25, 4:20pm",
    datetime: "2025-10-08T16:20:00",
    resources: [
      { id: "R1", title: "How to Prevent Your Repo from Getting Cancer", url: "https://example.com/a", description: "aaa"},
      { id: "R2", title: "Why does Ray Not Believe in Pronouns?", url: "https://example.com/b", description: "aaa"},
    ],
  },
  {
    id: "E3",
    label: "12/10/25, 6:09pm",
    datetime: "2025-10-12T18:09:00",
    resources: [
      { id: "R1", title: "How to Deal with Your Client Showing Up 90 Minutes Late", url: "https://example.com/a", description: "aaa"},
      { id: "R2", title: "Is Becky using AI to Communicate with Her Team?", url: "https://example.com/b", description: "aaa"},
    ],
  },
]

const Profile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [activeTab, setActiveTab] = useState<"about" | "quizresults">("about")
  const [isEditing, setIsEditing] = useState(false)

  const [activeEntryId, setActiveEntryId] = useState<string | null>(null)
  const [entries, setEntries] = useState<Entry[]>(sampleEntries)
  useEffect(() => {
    if (activeTab === "quizresults") {
      setActiveEntryId((prev) => prev ?? entries[0]?.id ?? null)
    } else {
      setActiveEntryId(null)
    }
  }, [activeTab, entries])
  const activeEntry = entries.find((e) => e.id === activeEntryId) ?? null

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
              <div className="md:w-[300px] bg-white rounded-lg px-6 py-8 border border-neutral-200">
                <h3 className="font-semibold text-xl mb-6 text-[#3B3F5C]">Entries</h3>
                <ul className="space-y-3">
                  {entries.map((entry) => {
                    const selected = entry.id === activeEntryId
                    return (
                      <li key={entry.id}>
                        <button
                          className={`w-full text-left px-3 py-2 rounded-md transition text-xl ${selected ? "text-[#2563EB]" : "hover:text-[#0000FF] text-[#3B3F5C]"}`}
                          onClick={() => setActiveEntryId(entry.id)}
                        >
                          <div className="font-semibold text-xl">
                            {/* ensure datetime is follows format in NZ */}
                            {new Date(entry.datetime).toLocaleDateString("en-NZ", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit"
                            })}
                          </div>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
              {/* Resource Link section */}
              <div className="w-full lg:flex-1 flex flex-col gap-10 md:max-h-[600px] lg:overflow-y-auto pr-3 scrollable-resources">
                {activeEntry ? (
                  <>
                    {activeEntry.resources.map((r) => (
                      <div
                        key={r.id}
                        className="bg-white rounded-lg px-6 py-8 border border-neutral-200 hover:shadow-md"
                      >
                        <h3 className="font-semibold text-xl mb-6 text-[#3B3F5C]">{r.title}</h3>
                        <p className="text-[#3B3F5C] mt-2 text-sm mb-5">
                          {r.description || "Description here."}
                        </p>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-100 text-blue-500 p-2 rounded-full hover:bg transition inline-block"
                        >
                          Visit Website
                        </a>
                      </div>
                    ))}
                  </>
                ) : (
                  // just in case no entry is selected??? but first entry is always selected first
                  <div className="bg-white rounded-lg px-6 py-8 border border-neutral-200 hover:shadow-md">
                    <h3 className="font-semibold text-xl mb-4 text-[#3B3F5C]">No entry selected</h3>
                    <p className="text-[#3B3F5C] mt-2 text-sm">Click an entry on the left to view its resources.</p>
                  </div>
                )}
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile

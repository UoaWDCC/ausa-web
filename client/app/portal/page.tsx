"use client"

import React from "react"
import PortalCard from "../components/composite/portal-card/PortalCard"
import Background from "../components/composite/background/background"
import Link from "next/link"

const PortalPage = () => {
  return (
    <Background>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#043873] bg-[#faf7f2]">
        {/* <PortalCard> */}
          <h2 className="text-2xl italic mb-6 text-center text-[#FAF7F2]">
            Welcome to AUSA Wellbeing
          </h2>
          <div className="grid grid-cols-2 w-[400px] gap-4">
            <Link href="/">
              <div className="bg-[#FFDE91] rounded-lg w-48 h-48 justify-center items-center flex flex-col text-sm text-white shadow-lg">
                <h4 className="font-bold text-2xl text-black">Home</h4>
              </div>
            </Link>
            <Link href="/quiz">
              <div className="bg-[#FFDE91] rounded-lg w-48 h-48 justify-center items-center flex flex-col text-sm bg-gradient-to-r text-white shadow-lg">
                <h4 className="font-bold text-2xl text-black">Quiz</h4>
              </div>
            </Link>
            <Link href="/contact">
              <div className="bg-[#FFDE91] rounded-lg w-48 h-48 justify-center items-center flex flex-col text-sm bg-gradient-to-r text-white shadow-lg">
                <h4 className="font-bold text-2xl text-black">Contact</h4>
              </div>
            </Link>
             <Link href="/signup">
              <div className="bg-[#FFDE91] rounded-lg w-48 h-48 justify-center items-center flex flex-col text-sm bg-gradient-to-r text-white shadow-lg">
                <h4 className="font-bold text-2xl text-black">Signup</h4>
              </div>
            </Link>
          </div>
      </main>
    </Background>
  )
}

export default PortalPage

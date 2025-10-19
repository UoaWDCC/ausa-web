"use client"

import React from "react"
import PortalCard from "../components/composite/portal-card/PortalCard"
import Link from "next/link"

const PortalPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#3A7D8C] via-[#FAF7F2] to-[#CAE5F8] ">
      <PortalCard>
        <h2 className="text-2xl italic mb-6 text-center text-black ">
          Welcome to AUSA Wellbeing
        </h2>
        <div className="flex flex-col gap-4 ">
          <Link href="/">
            <p className="border border-white rounded-lg px-3 py-4 text-center text-sm bg-gradient-to-r from-[#FFDE91] to-[#FFF0CC] text-black hover:drop-shadow-lg transition-all duration-300 ease-out">
              Home
            </p>
          </Link>
          <Link href="/quiz">
            <p className="border border-white rounded-lg px-3 py-4 text-center text-sm bg-gradient-to-r from-[#FFDE91] to-[#FFF0CC] text-black hover:drop-shadow-lg transition-all duration-300 ease-out">
              Quiz
            </p>
          </Link>
          <Link href="/contacts">
            <p className="border border-white rounded-lg px-3 py-4 text-center text-sm bg-gradient-to-r from-[#FFDE91] to-[#FFF0CC] text-black hover:drop-shadow-lg transition-all duration-300 ease-out">
              Contact
            </p>
          </Link>
        </div>
      </PortalCard>
    </div>
  )
}
export default PortalPage

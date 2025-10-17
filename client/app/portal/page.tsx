"use client"

import React from "react"
import PortalCard from "../components/composite/portal-card/PortalCard"
import Background from "../components/composite/background/background"
import Link from "next/link"

const PortalPage = () => {
  return (
    <Background>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#3A7D8C] via-[#FAF7F2] to-[#CAE5F8]">
        <PortalCard>
          <h2 className="text-2xl italic mb-6 text-center text-black">
            Welcome to AUSA Wellbeing
          </h2>
          <div className="flex flex-col gap-4">
            <Link href="/">
              <p className="border rounded-lg px-3 py-3 text-center text-sm bg-gradient-to-r from-[#FFDE91] to-[#94C2DD] text-white">
                Home
              </p>
            </Link>
            <Link href="/quiz">
              <p className="border rounded-lg px-3 py-3 text-center text-sm bg-gradient-to-r from-[#FFDE91] to-[#94C2DD] text-white">
                Quiz
              </p>
            </Link>
            <Link href="/contact">
              <p className="border rounded-lg px-3 py-3 text-center text-sm bg-gradient-to-r from-[#FFDE91] to-[#94C2DD] text-white">
                Contact
              </p>
            </Link>
          </div>
        </PortalCard>
      </main>
    </Background>
  )
}

export default PortalPage

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
          <div className="flex flex-col gap-4 ">
            <Link href="/">
              <h4 className=" hover:opacity-85 text-xl hover:shadow-lg duration-300 rounded-lg px-3 py-3 text-center bg-gradient-to-r from-[#FFDE91] to-[#94C2DD] text-black">
                Home
              </h4>
            </Link>
            <Link href="/quiz">
              <h4 className=" hover:opacity-85 text-xl hover:shadow-lg duration-300 rounded-lg px-3 py-3 text-center  bg-gradient-to-r from-[#FFDE91] to-[#94C2DD] text-black">
                Quiz
              </h4>
            </Link>
            <Link href="/contact">
              <h4 className="hover:opacity-85 text-xl hover:shadow-lg duration-300 rounded-lg px-3 py-3 text-center  bg-gradient-to-r from-[#FFDE91] to-[#94C2DD] text-black">
                Contact
              </h4>
            </Link>
          </div>
        </PortalCard>
      </main>
    </Background>
  )
}

export default PortalPage

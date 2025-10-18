"use client"

import React from "react"
import PortalCard from "../components/composite/portal-card/PortalCard"
import Background from "../components/composite/background/background"
import Link from "next/link"

const PortalPage = () => {
  return (
    <Background>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-accent-warm-400 via-[#FAF7F2] to-white ">
        {/* <PortalCard> */}
          <h2 className="text-2xl italic mb-6 text-center text-black">
            Welcome to AUSA Wellbeing
          </h2>
          <div className="grid grid-cols-2 w-[400px] gap-4">
            <Link href="/">
              <div className="border bg-primary rounded-lg w-48 h-48 text-center text-sm bg-gradient-to-r text-white">
                Home
              </div>
            </Link>
            <Link href="/quiz">
              <div className="border bg-primary rounded-lg w-48 h-48 text-center text-sm bg-gradient-to-r text-white">
                Quiz
              </div>
            </Link>
            <Link href="/contact">
              <div className="border bg-primary rounded-lg w-48 h-48 text-center text-sm bg-gradient-to-r text-white">
                Contact
              </div>
            </Link>
             <Link href="/signup">
              <div className="border bg-primary rounded-lg w-48 h-48 text-center text-sm bg-gradient-to-r text-white">
                Sign Up
              </div>
            </Link>
          </div>
      </main>
    </Background>
  )
}

export default PortalPage

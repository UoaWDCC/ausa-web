"use client"

import React from "react"
import Background from "../components/composite/background/background"
import Link from "next/link"

interface CardProps {
  lnk: string
  pageName: string
}

const Card = ( {lnk, pageName}:CardProps) => {
    return (<Link href={lnk}>
      <div className="bg-[#FFDE91] rounded-lg w-48 h-48 justify-center hover:-translate-y-4 duration-300 hover:shadow-2xl items-center flex flex-col text-sm text-white shadow-lg">
        <h4 className="font-bold text-2xl text-black">{pageName}</h4>
      </div>
    </Link>)
}

const PortalPage = () => {
  return (
    <Background>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#043873] bg-[#faf7f2]">
        {/* <PortalCard> */}
          <h2 className="text-2xl italic mb-6 text-center text-[#FAF7F2]">
            Welcome to AUSA Wellbeing
          </h2>
          <div className="grid grid-cols-2 w-[400px] gap-4">
            <Card lnk="/" pageName="Home" />
            <Card lnk="/quiz" pageName="Quiz" />
            <Card lnk="/contact" pageName="Contact" />
            <Card lnk="/signup" pageName="Signup" />
          </div>
      </main>
    </Background>
  )
}

export default PortalPage

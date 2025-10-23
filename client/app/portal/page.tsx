"use client"

import React from "react"
import PortalCard from "../components/composite/portal-card/PortalCard"
import Link from "next/link"

const PortalPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#3A7D8C] via-[#FAF7F2] to-[#CAE5F8]">
      <PortalCard>
        <h2
          className="text-center mb-8"
          style={{
            fontFamily: "Crimson Text, serif",
            fontSize: "36px",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#043873",
          }}
        >
          Welcome to AUSA Wellbeing
        </h2>

        <div className="flex flex-col gap-4">
          <Link href="/">
            <p className="rounded-lg px-3 py-4 text-center text-lg font-medium bg-gradient-to-r from-[#9abce2ff] to-[#c9dff8ff] hover:drop-shadow-lg transition-all duration-300 ease-out">
              <h2>Home</h2>
            </p>
          </Link>

          <Link href="/quiz">
            <p className="rounded-lg px-3 py-4 text-center text-lg font-medium bg-gradient-to-r from-[#9abce2ff] to-[#c9dff8ff] hover:drop-shadow-lg transition-all duration-300 ease-out">
              <h2>Quiz</h2>
            </p>
          </Link>

          <Link href="/contacts">
            <p className="rounded-lg px-3 py-4 text-center text-lg font-medium bg-gradient-to-r from-[#9abce2ff] to-[#c9dff8ff] hover:drop-shadow-lg transition-all duration-300 ease-out">
              <h2>Contact</h2>
            </p>
          </Link>
        </div>
      </PortalCard>
    </div>
  )
}

export default PortalPage

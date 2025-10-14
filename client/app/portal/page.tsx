"use client"

import React, { useState } from "react"
import PortalCard from "../components/composite/portal-card/PortalCard"
import Background from "../components/composite/background/background"

const PortalPage = () => {
  return (
    <Background>
      <main className="min-h-screen flex items-center justify-center">
        <PortalCard>
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Welcome to AUSA Wellbeing
          </h2>
          <div className="flex flex-col gap-4">
            <p className="border rounded-lg px-3 py-3 text-center text-sm bg-gradient-to-r from-[#FFDE91] to-[#94C2DD] text-white">
              Test 1
            </p>
            <p className="border rounded-lg px-3 py-3 text-center text-sm bg-gradient-to-r from-[#FFDE91] to-[#94C2DD] text-white">
              Test 2
            </p>
            <p className="border rounded-lg px-3 py-3 text-center text-sm bg-gradient-to-r from-[#FFDE91] to-[#94C2DD] text-white">
              Test 3
            </p>
          </div>
        </PortalCard>
      </main>
    </Background>
  )
}

export default PortalPage

"use client"

import React from "react"
import Link from "next/link"
// import Image from "next/image"
import Button from "../button/regular/Button"

// import facebook from "../../app/assets/icons/facebook.svg"
// import gps from "../../app/assets/icons/gps.svg"
// import instagram from "../../app/assets/icons/instagram.svg"
// import linkedin from "../../app/assets/icons/linkedin.svg"
// import phone from "../../app/assets/icons/phone.svg"

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Student Council", href: "#" },
        { label: "AUSA Website", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Advocacy", href: "#" },
        { label: "Buddy Program", href: "#" },
        { label: "Class Representatives", href: "#" },
        { label: "Health Counseling", href: "#" },
      ],
    },
    {
      title: "Emergency Help",
      links: [{ label: "Emergency Contacts", href: "#" }],
    },
  ]

  return (
    <footer className="footer w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/AusaLogo.svg"
                alt="AUSA Logo"
                className="h-10 w-auto"
              />
              <div className="text-2xl font-bold font-serif">AUSA</div>
            </div>
            <p className="text-sm max-w-xs">
              This is a description of the TRK-AUSA organisation. Our mission is
              to *insert here*, and we plan on doing this alongside our values
              *insert here*.
            </p>
          </div>

          {/* Center */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <div className="b3-body font-bold mb-4">{section.title}</div>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex-1">
            <div>
              <Button
                label="Contact Us"
                backgroundColor="var(--btn-primary-bg)"
                className="px-6 py-2"
                fontWeight="bold"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © Te Rōpū Kahikatea - Auckland University Students’ Association 2025.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

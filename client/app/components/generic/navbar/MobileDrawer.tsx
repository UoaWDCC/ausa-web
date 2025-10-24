"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/app/components/generic/button/next/Button"
import OldButton from "@/app/components/generic/button/regular/Button"

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  navigationItems: string[]
  activeItem: string
  onNavClick: (item: string) => void
  className?: string
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  navigationItems,
  activeItem,
  onNavClick,
}) => {
  const handleNavClick = (item: string) => {
    onNavClick(item)
    onClose()
  }

  const navPaths: Record<string, string> = {
    Home: "/",
    Resources: "/resources",
    Quiz: "/quiz",
    Events: "/events",
    FAQs: "/faqs",
    Contacts: "/contacts",
    Login: "/login",
  }

  return (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          mobile-drawer fixed top-0 left-0 z-50 h-full w-3/4 max-w-sm duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header with Logo */}
        <div className="flex h-full flex-col p-6">
          <div className="mb-8 flex justify-center">
            <img src="/AusaLogo.svg" alt="AUSA Logo" className="h-15" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <Link href={navPaths[item]} key={`mobile-${item}`}>
                <OldButton
                  key={`mobile-${item}`}
                  label={item}
                  onClick={() => handleNavClick(item)}
                  backgroundColor={
                    activeItem === item
                      ? "var(--btn-primary-bg)"
                      : "transparent"
                  }
                  textColour={
                    activeItem === item ? "var(--btn-primary-fg)" : undefined
                  }
                  className={`w-full justify-start px-4 py-3 rounded-lg transition-all duration-500 ${activeItem === item ? "hover:bg-btn-primary-bg-hover" : "hover:bg-btn-secondary-bg-hover"}`}
                  textSize="text-lg"
                  fontWeight={activeItem === item ? "bold" : "normal"}
                />
              </Link>
            ))}
          </nav>

          {/* Login */}
          <div className="mt-auto pt-6">
            <Button asLink href={navPaths["Login"]} variant="square">
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileDrawer

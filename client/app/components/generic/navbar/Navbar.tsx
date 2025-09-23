"use client"

import React, { useState, useEffect } from "react"
import Button from "../button/regular/Button"
import MobileDrawer from "./MobileDrawer"
import Link from "next/link"
import { usePathname } from "next/navigation"

export interface NavbarProps {
  onNavigate?: (page: string) => void
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className = "", onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    "Home",
    "Resources",
    "Quiz",
    "Events",
    "FAQs",
    "Contacts",
  ]

  const navPaths: Record<string, string> = {
    Home: "/",
    Resources: "/resources",
    Quiz: "/quiz",
    Events: "/events",
    FAQs: "/faqs",
    Contacts: "/contacts",
    Login: "/login",
  }

  const pathToItem: Record<string, string> = {
    "/": "Home",
    "/resources": "Resources",
    "/quiz": "Quiz",
    "/events": "Events",
    "/faqs": "FAQs",
    "/contacts": "Contacts",
    "/login": "Login",
  }

  const [activeItem, setActiveItem] = useState(() => pathToItem[pathname])

  useEffect(() => {
    setActiveItem(pathToItem[pathname])
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (item: string) => {
    setActiveItem(item)
    onNavigate?.(item)
  }

  const handleLoginClick = (item: string) => {
    onNavigate?.('Login')
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <>
      <nav
        className={`
          navbar fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-out
          ${hasScrolled ? "shadow-lg" : "shadow-none"}
          ${className}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="">
              <img src="/AusaLogo.svg" alt="AUSA Logo" className="h-15" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3 flex-1 justify-center">
              {navigationItems.map((item) => (
                <div key={item} className="group relative">
                  <Link href={navPaths[item]}>
                    <Button
                      label={item}
                      onClick={() => handleNavClick(item)}
                      backgroundColor={
                        activeItem === item
                          ? "var(--btn-primary-bg)"
                          : "transparent"
                      }
                      className={`
                        px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden
                        ${
                          activeItem === item
                            ? "font-medium shadow-md"
                            : "hover:bg-btn-primary-bg-hover group-hover:scale-105"
                        }
                      `}
                      fontWeight={activeItem === item ? "bold" : "normal"}
                    />
                  </Link>

                  {/* Hover Animation */}
                  {activeItem !== item && (
                    <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Login */}
            <div className="hidden md:flex">
              <Button
                label="Login"
                onClick={() => handleLoginClick("Login")}
                className={`
                    px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden
                    bg-[var(--btn-secondary-bg-press)] hover:bg-[var(--btn-secondary-bg)] hover:scale-105
                  `}
                fontWeight={activeItem === "Login" ? "bold" : "normal"}
              />
            </div>
            <div className="flex">
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2"
                  type="button"
                >
                  {/* Burger Icon */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
        activeItem={activeItem}
        onNavClick={handleNavClick}
      />
    </>
  )
}

export default Navbar

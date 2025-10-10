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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [highlightStyle, setHighlightStyle] = useState({ width: 0, left: 0 })
  const pathname = usePathname()
  const buttonRefs = React.useRef<{ [key: string]: HTMLDivElement | null }>({})

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

  const updateHighlightPosition = (item: string) => {
    const buttonElement = buttonRefs.current[item]
    if (buttonElement) {
      const { offsetLeft, offsetWidth } = buttonElement
      setHighlightStyle({ left: offsetLeft, width: offsetWidth })
    }
  }

  const handleNavClick = (item: string) => {
    setActiveItem(item)
    onNavigate?.(item)
  }

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item)
    updateHighlightPosition(item)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
    updateHighlightPosition(activeItem)
  }

  // Update highlight position when active item changes
  useEffect(() => {
    if (activeItem) {
      updateHighlightPosition(activeItem)
    }
  }, [activeItem])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <>
      <nav
        className={`
          navbar fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-out
          ${hasScrolled ? "bg-black/80" : "bg-black"}
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
            <div className="hidden md:flex items-center space-x-3 flex-1 justify-center relative">
              {/* Moving highlight background */}
              <div 
                className="absolute top-0 bottom-0 bg-[var(--btn-primary-bg)] rounded-lg transition-all duration-300 ease-out pointer-events-none z-0"
                style={{
                  width: `${highlightStyle.width}px`,
                  left: `${highlightStyle.left}px`,
                }}
              />
              
              {navigationItems.map((item, index) => (
                <div 
                  key={item} 
                  className="relative z-10"
                  ref={(el) => {
                    buttonRefs.current[item] = el
                  }}
                >
                  <Link href={navPaths[item]}>
                    <Button
                      label={item}
                      onClick={() => handleNavClick(item)}
                      backgroundColor="transparent"
                      className={`
                        px-4 py-2 rounded-lg transition-colors duration-200 relative
                        ${(activeItem === item || hoveredItem === item) 
                          ? "font-medium text-[var(--btn-primary-fg)]" 
                          : "text-white"
                        }
                      `}
                      fontWeight={(activeItem === item || hoveredItem === item) ? "bold" : "normal"}
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* Login */}
            <div className="hidden md:flex">
              <Link href={navPaths["Login"]}>
                <Button
                  label="Login"
                  onClick={() => handleNavClick("Login")}
                  className={`
                      px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden
                      bg-[var(--btn-secondary-bg-press)] hover:bg-[var(--btn-secondary-bg)] hover:scale-105
                    `}
                  fontWeight={"bold"}
                />
              </Link>
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

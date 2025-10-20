"use client"

import React, { useState, useEffect } from "react"
import MobileDrawer from "./MobileDrawer"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/utils/cn"
import { Button } from "@/app/components/generic/button/next/Button"
import Image from "next/image"

export interface NavbarProps {
  onNavigate?: (page: string) => void
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className = "", onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const buttonRefs = React.useRef<{ [key: string]: HTMLDivElement | null }>({})

  const navigationItems = ["Home", "Resources", "Quiz", "FAQs", "Contacts"]

  const navPaths: Record<string, string> = {
    Home: "/",
    Resources: "/resources",
    Quiz: "/quiz",
    FAQs: "/faqs",
    Contacts: "/contacts",
    Login: "/login",
  }

  const pathToItem: Record<string, string> = {
    "/": "Home",
    "/resources": "Resources",
    "/quiz": "Quiz",
    "/faqs": "FAQs",
    "/contacts": "Contacts",
    "/login": "Login",
  }

  const [activeItem, setActiveItem] = useState(() => pathToItem[pathname])

  useEffect(() => {
    setActiveItem(pathToItem[pathname])
  }, [pathname])

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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <>
      <nav className={cn(className, "bg-[var(--black)] fixed w-screen z-20")}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/AusaLogo.svg"
                width={200}
                height={200}
                alt="AUSA Logo"
                className="h-15 w-fit"
              />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center flex-1 gap-3 pr-4 justify-end relative">
              {navigationItems.map((item) => (
                <div
                  key={item}
                  className="relative z-10"
                  ref={(el) => {
                    buttonRefs.current[item] = el
                  }}
                >
                  <Link href={navPaths[item]}>
                    <div
                      className="px-4 py-2 rounded-lg hover:bg-accent-warm-200 hover:text-black transition-colors text-white duration-200 relative cursor-pointer"
                      onClick={() => handleNavClick(item)}
                    >
                      {item}
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/**
             * Login
             * TODO: connect to auth
             */}
            <div className="hidden md:flex">
              <Button asLink href={navPaths["Login"]} variant="square">
                Login
              </Button>
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

"use client"

import React from "react"
import Button from "../button/regular/Button"

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
          <div className="mb-8 flex justify-center">Logo Here</div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={`mobile-${item}`}
                label={item}
                onClick={() => handleNavClick(item)}
                backgroundColor={
                  activeItem === item ? "var(--btn-primary-bg)" : "transparent"
                }
                className={`
                  w-full justify-start px-4 py-3 rounded-lg transition-all duration-500
                  ${
                    activeItem === item
                      ? "text-btn-primary-fg hover:bg-btn-primary-bg-hover"
                      : "text-primary-emphasis hover:bg-btn-secondary-bg-hover"
                  }
                `}
                textSize="text-lg"
                fontWeight={activeItem === item ? "bold" : "normal"}
              />
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileDrawer

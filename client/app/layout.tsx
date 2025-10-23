"use client"

// import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"
import Navbar from "./components/generic/navbar/Navbar"
import { usePathname } from "next/navigation"

// export const metadata: Metadata = {
//   title: "AUSA WEB",
//   description: "",
// }

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()

  const hideNavbarRoutes = ["/portal"] // list any routes that shouldn't show navbar
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname)

  return (
    <html lang="en">
      <head>
        <link
          // href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          {!shouldHideNavbar && <Navbar />}
          {children}
        </Providers>
      </body>
    </html>
  )
}

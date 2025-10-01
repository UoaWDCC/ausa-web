import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"
import Navbar from "./components/generic/navbar/Navbar"
import Footer from "./components/generic/footer/Footer"

export const metadata: Metadata = {
  title: "AUSA WEB",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          // href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {" "}
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

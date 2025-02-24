import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChatbotWrapper } from "@/components/ChatbotWrapper"
import { BackToTop } from "@/components/BackToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "Personal portfolio showcasing my work and experience",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen`}>
        <Navigation />
        {children}
        <Footer />
        <ChatbotWrapper />
        <BackToTop />
      </body>
    </html>
  )
}



import './globals.css'
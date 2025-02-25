"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import Link from "next/link"
import Image from "next/image"
import toast, { Toaster } from "react-hot-toast"
import { Donegal_One } from "next/font/google"

export function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  const downloadResume = () => {
    const resumeUrl = "/AsherFarhan_Resume.pdf"

    const link = document.createElement("a")
    link.href = resumeUrl
    link.setAttribute("download", "AsherFarhan_Resume.pdf")
    document.body.appendChild(link)

    link.click()
    document.body.removeChild(link)

    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-gradient-to-br from-purple-900 to-indigo-900 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-purple-100">Resume downloaded successfully!</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-purple-700">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-purple-300 hover:text-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    ))
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="pt-32 pb-16 px-4"
    >
        <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "linear-gradient(145deg, #2D1B69, #1E1145)",
            color: "#E9D8FD",
            border: "1px solid #6B46C1",
            padding: "16px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          },
        }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-3xl"></div>
          <div className="relative bg-zinc-900/90 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8 border border-purple-500/20">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Hi, I'm{" "}
                <AnimatedText text="Asher Farhan" className="text-purple-500 inline-block min-w-[3px]" delay={1500} />
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400">AI Engineer | Full Stack Developer</h2>
              <p className="text-gray-400">
              Empowering the future with the power of AI and advanced technology.
              </p>
              <div className="flex gap-4">
                <Button onClick={downloadResume}>
                  Download Resume <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={scrollToContact}>
                  Contact Me
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com/AsherFarhan2001" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-gray-400 hover:text-purple-500 transition-colors" />
                </Link>
                <Link href="https://www.linkedin.com/in/asher-farhan-472a381b9/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-gray-400 hover:text-purple-500 transition-colors" />
                </Link>
                <Link href="asherfarhan123@gmail.com">
                  <Mail className="h-6 w-6 text-gray-400 hover:text-purple-500 transition-colors" />
                </Link>
              </div>
            </div>
            <div className="w-48 h-48 relative flex-shrink-0">
              <Image
                src="/profile/profile_pic.jpg"
                alt="Your Name"
                width={192}
                height={192}
                className="rounded-full object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}


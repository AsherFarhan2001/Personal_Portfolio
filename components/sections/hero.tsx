"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="pt-32 pb-16 px-4"
    >
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
                <Button>
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


"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Education } from "@/components/sections/education"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Services } from "@/components/sections/services"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Certifications } from "@/components/sections/certifications"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <motion.main ref={containerRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: "url('/background-pattern.svg')",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Certifications />
      <Contact />
    </motion.main>
  )
}


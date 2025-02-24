"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const projects = [
  {
    title: "SmartShop",
    description:
      "Smart shopping system with AI-powered Recommendations backed by intelligent Home delivery system.",
    image: "/projects/smartshop.jpeg",
    tags: ["ReactJs", "NodeJs", "Python", "Flask", "TF-IDF Algo"],
  },
  {
    title: "Share Assistant",
    description:
      "An AI-powered voice and chat assistant that automates customer ride bookings and steamline account managers tasks.",
    image: "/projects/share.jpg",
    tags: ["Python", "OpenAI", "FastAPI", "LangChain", "LLM", "Redis"],
  },
  {
    title: "Smart PDF",
    description:
      "Implemented RAG Chatbot that used extracted text from PDF as knowledgebase and responds to user questions.",
    image: "/projects/smartpdf.jpg",
    tags: ["Python", "FastAPI", "OpenAI", "LangChain", "Docker", "Pinecone"],
  },
  {
    title: "AI-Powered Portfolio",
    description: "A sleek and interactive AI based portfolio showcasing my skills, experience, and education—all in one place for easy access.",
    image: "/projects/portfolio.jpg",
    tags: ["NextJs", "Groq", "TailwindCSS"],
  },
  {
    title: "Veteran Meet",
    description: "A dynamic networking platform where veterans and professionals can connect, share ideas, and engage.",
    image: "/projects/veteran.jpg",
    tags: ["ReactJs", "NodeJs","MonogDB"],
  },
  {
    title: "Employee Management System",
    description:
      "A platform for seamless employee payroll management and HR operations, simplifying workforce administration.",
    image: "/projects/employee.jpg",
    tags: ["Java", "JavaFX", "MySQL", ""],
  },
]

export function Projects() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="projects"
      className="py-12 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Explore my latest projects showcasing innovative solutions across various domains
        </motion.p>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[300px] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Wrapper for pop-up effect */}
              <motion.div
                className="h-full w-full"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay - Only visible on hover */}
                <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/85 transition-all duration-300" />

                {/* Content */}
                <div className="relative h-full p-4 flex flex-col justify-between">
                  {/* Title - Always visible with shadow for readability */}
                  <h3 className="text-xl font-bold text-white drop-shadow-lg group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description and Tags - Appear on hover */}
                  <div className="space-y-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-gray-200 text-sm line-clamp-3">{project.description}</p>

                    {/* Tags with new styling */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: tagIndex * 0.1 }}
                          className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-200 backdrop-blur-sm
                                   border border-purple-500/30 shadow-sm shadow-purple-500/20"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}


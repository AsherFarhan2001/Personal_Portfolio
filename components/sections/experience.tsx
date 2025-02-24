"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    company: "SHARE Mobility",
    logo: "/companies/share.png",
    companyDescription: "Leading software development company specializing in mobility solutions",
    location: "Columbus, OH",
    title: "Software Engineer l",
    duration: "2024 - Present",
    description: "Leading the frontend development team and architecting scalable solutions",
    responsibilities: [
      "Implemented LLM Powered function calls boosting user query resolution by 40%",
      "Designed and implemented scalable backend services using Python, FastAPI, NodeJS.",
      "Resolved and streamlined bugs, improving performance of system by 30% for seamless functionality.",
      "Led the development of comprehensive unit tests for a multilingual AI-Powered call automation in Pytest.",
      "Engineered AI-powered Assistant leveraging LLM, RAG, Vector Databases, Prompt Engeering to automate customer ride bookings and streamline account managers tasks.",
      "Contributed to the development of AI-powered products, tailored to optimize 40% of customers ride-hailing operations.",
    ],
  },
  {
    company: "National University of Computer and Emerging Sciences",
    logo: "/companies/nuces.png",
    companyDescription: "Reputable instituion offering undergraduate and graduate programs in computer science",
    location: "Islamabad, Pakistan",
    title: "Teaching Assistant",
    duration: "2023-2024",
    description: "Assisted professors in teaching and grading course related assignments.",
    responsibilities: [
      "Assisted in managing coursework and providing academic support as a Teaching Assistant for a course of software Design and Analysis.",
      " Managed grading for assignments, quizzes, and projects, while addressing student queries and concerns",
      "Conducted demos of projects and assignments to evaluate student understanding and provide feedback",
    ],
  },
]

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="experience"
      className="py-16 px-4 bg-zinc-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Company Card */}
              <div className="bg-zinc-800/50 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-colors">
                {/* Company Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-16 h-16 overflow-hidden bg-white flex items-center justify-center flex-shrink-0 p-2 ${
                      index === 1 ? "rounded-full" : "rounded-xl"
                    }`}
                  >
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      width={64}
                      height={64}
                      className={`w-full h-full object-contain ${
                        index === 1 ? "rounded-full" : ""
                      }`}
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <p className="text-gray-400">{exp.companyDescription}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-purple-500 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </span>
                      <span className="text-gray-400 flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Role Details */}
                <div className="ml-20">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-purple-500">{exp.title}</h4>
                      <p className="text-gray-400 mt-2">{exp.description}</p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h5 className="font-semibold mb-3 text-gray-300">Responsibilities</h5>
                      <ul className="grid gap-3">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[2.75rem] top-[7.5rem] bottom-[-4rem] w-0.5 bg-purple-500/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}




"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, BookOpen, ChevronRight } from "lucide-react"
import Image from "next/image"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "National University of Computer and Emerging Sciences (FAST-NUCES)",
    duration: "2019 - 2023",
    description: "Focussed on AI-driven technologies with a strong computational knowledge ",
    courses: [
      "Data Structures and Algorithms",
      "Artificial Intelligence",
      "Web Programming",
      "Software Design and Analysis",
    ],
    logo: "/education/uni.png",
  },
  // Add more education entries as needed
]

export function Education() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="education"
      className="py-16 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-zinc-800/30 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left side - Degree Info */}
                <div className="lg:w-1/3 bg-purple-500/10 p-6 relative overflow-hidden">
                  <GraduationCap className="h-32 w-32 text-purple-500/20 absolute -right-8 -bottom-8 transform rotate-12" />
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-16 h-11 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                      <Image
                        src={edu.logo || "/placeholder.svg"}
                        alt={`${edu.institution} logo`}
                        width={64}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-400">{edu.degree}</h3>
                  </div>
                  <p className="text-gray-300 flex items-center gap-2 relative z-10">
                    <Calendar className="h-4 w-4" />
                    {edu.duration}
                  </p>
                  <p className="text-gray-400 mt-2 relative z-10">{edu.institution}</p>
                </div>

                {/* Right side - Description and Courses */}
                <div className="lg:w-2/3 p-6 relative">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Overview</h4>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Key Courses
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <motion.li
                          key={courseIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: courseIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-gray-300 group/course"
                        >
                          <ChevronRight className="h-4 w-4 text-purple-500 flex-shrink-0 mt-1 group-hover/course:translate-x-1 transition-transform duration-300" />
                          <span className="text-sm">{course}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/50 via-purple-500/25 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}


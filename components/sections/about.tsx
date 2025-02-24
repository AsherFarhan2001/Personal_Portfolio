"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      id="about"
      className="py-16 mt-13"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          About Me
        </motion.h2>
        <p className="text-gray-400 italic text-lg">Passionate about advancing AI for a smarter future.</p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-300 space-y-4"
        >
          <p>
          Ambitious and motivated software engineer with a year of professional experience and a strong foundation in
          Computer Science.
          </p>
          <p>
          Passionate about leveraging technology to solve real world challenges, with a particular focus
          on AI innovation and full-stack development. Eager to embrace new challenges with a collaborative mindset.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}


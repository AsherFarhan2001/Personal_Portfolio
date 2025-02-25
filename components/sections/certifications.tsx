"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const certifications = [
  {
    name: "Azure Fundamentals AZ-900",
    issuedBy: "Microsoft",
    image:
      "/certifications/azure.png",
    orientation: "horizontal",
  },
  {
    name: "TA Ship Certificate",
    issuedBy: "FAST-NUCES",
    image:
      "/certifications/ta.jpeg",
    orientation: "vertical",
  },
]

export function Certifications() {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="certifications"
        className="py-16 px-4 relative overflow-hidden bg-zinc-950 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Certifications
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative group ${
                  cert.orientation === "horizontal"
                    ? "w-full md:w-[31rem] h-72 bg-black p-4 rounded-2xl"
                    : "w-full md:w-80 h-96 bg-black p-4 rounded-2xl"
                }`}
              >
                <div className={`relative w-full h-full overflow-hidden rounded-lg shadow-lg`}>
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.name} Certification`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-6 text-center">
                    <h3 className="text-white text-2xl font-bold mb-2 tracking-wide">{cert.name}</h3>
                    <p className="text-purple-500 text-lg font-semibold">Issued by</p>
                    <p className="text-gray-300 text-lg">{cert.issuedBy}</p>
                  </div>
                </div>
                {/* Enhanced glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-purple-500 blur-2xl -z-10`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    )
  }
  
  


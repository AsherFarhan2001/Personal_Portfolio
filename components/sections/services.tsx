"use client"

import { motion } from "framer-motion"
import { Code, Bot, Brain } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Full-Stack Applications",
    description:
      "End-to-end web solutions tailored to your business needs, from responsive frontends to robust backends.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Generative AI Chatbots",
    description: "Custom AI-powered chatbots to enhance customer engagement and automate support processes.",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI-Powered Solutions",
    description:
      "Cutting-edge AI solutions to optimize your business processes, including machine learning models, predictive analytics, and intelligent automation systems.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <service.icon className="absolute bottom-4 left-4 h-8 w-8 text-purple-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


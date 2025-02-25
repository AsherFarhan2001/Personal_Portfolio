"use client"

import { motion } from "framer-motion"
import { Code2, Database, Brain, Cloud, Server } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

const skillCategories = [
  {
    name: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React", icon: "/skills/react.png" },
      { name: "Next.js", icon: "/skills/next.png" },
      { name: "TypeScript", icon: "/skills/typescript.png" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
      { name: "Material UI", icon: "/skills/materialui.png" },
    ],
  },
  {
    name: "Backend Development",
    icon: Server,
    skills: [
      { name: "Python", icon: "/skills/python.png" },
      { name: "FastAPI", icon: "/skills/fastapi.png" },
      { name: "Flask", icon: "/skills/flask.png" },
      { name: "Java", icon: "/skills/java.png" },
      { name: "Node.js", icon: "/skills/node.png" },
    ],
  },
  {
    name: "Artificial Intelligence",
    icon: Brain,
    skills: [
      { name: "Langchain", icon: "/skills/langchain.png" },
      { name: "OpenAI", icon: "/skills/openai.png" },
      { name: "Groq", icon: "/skills/groq.png" },
      { name: "LLM", icon: "/skills/llm.png" },
      { name: "Embeddings", icon: "/skills/embedding.png" },
      { name: "Pandas", icon: "/skills/pandas.png" },
      { name: "NumPy", icon: "/skills/numpy.png" },
      { name: "Generative AI", icon: "/skills/genai.png" },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: "/skills/mongo.png" },
      { name: "Redis", icon: "/skills/redis.png" },
      { name: "MySQL", icon: "/skills/mysql.png" },
      { name: "Pinecone", icon: "/skills/pinecone.png" },
      { name: "SQL Server", icon: "/skills/sqlserver.png" },
      { name: "Oracle", icon: "/skills/oracle.png" },
    ],
  },
  {
    name: "DevOps",
    icon: Cloud,
    skills: [
      { name: "Git", icon: "/skills/git.png" },
      { name: "Docker", icon: "/skills/docker.png" },
      { name: "GitHub Actions", icon: "/skills/actions.png" },
      { name: "Azure", icon: "/skills/azure.png" },
      { name: "AWS", icon: "/skills/aws.png" },
      { name: "Jenkins", icon: "/skills/jenkins.png" },
    ],
  },
  {
    name: "Tools",
    icon: Cloud,
    skills: [
      { name: "Cursor", icon: "/skills/cursor.jpg" },
      { name: "VS Code", icon: "/skills/code.png" },
      { name: "Postman", icon: "/skills/postman.png" },
      { name: "Insomnia", icon: "/skills/insomnia.png" },
      { name: "Jira", icon: "/skills/jira.png" },
      { name: "Jupyter", icon: "/skills/notebook.png" },
    ],
  },
]

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="skills"
      className="py-12 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 rounded-lg p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="h-5 w-5 text-purple-500" />
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <TooltipProvider key={skillIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          className="relative group"
                        >
                          <div className="absolute -inset-0.5 bg-purple-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                          <div className="bg-zinc-700 rounded-lg p-2 flex flex-col items-center gap-1 border border-purple-500/10 relative">
                            <Image
                              src={skill.icon || "/placeholder.svg"}
                              alt={skill.name}
                              width={32}
                              height={32}
                              className="w-8 h-8 object-contain"
                            />
                            <span className="text-xs text-gray-200 text-center mt-1 group-hover:text-purple-200 transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="text-xs">
                          <p className="font-semibold">{skill.name}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}


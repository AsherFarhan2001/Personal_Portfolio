"use client"

import { motion } from "framer-motion"
import { RobotIcon } from "./RobotIcon"

export function ChatbotIcon({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <div 
      onClick={onClick}
      className="fixed bottom-4 right-4 cursor-pointer z-50"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="shadow-lg"
      >
        <div className="relative w-14 h-14">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 shadow-xl"
          >
            <RobotIcon />
          </motion.div>
          {/* Animated status indicator */}
          <div className="absolute -right-1 -bottom-1 w-4 h-4">
            <div className="absolute inset-0 rounded-full bg-green-500"></div>
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full border-2 border-zinc-900"></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


"use client"

import { motion } from "framer-motion"

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
            {/* Robot Head Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-full p-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Robot Head */}
              <rect
                x="6"
                y="7"
                width="12"
                height="12"
                rx="2"
                className="fill-white"
                stroke="white"
                strokeWidth="1.5"
              />
              
              {/* Robot Eyes */}
              <rect
                x="9"
                y="10"
                width="2"
                height="3"
                rx="0.5"
                className="fill-indigo-600"
              />
              <rect
                x="13"
                y="10"
                width="2"
                height="3"
                rx="0.5"
                className="fill-indigo-600"
              />
              
              {/* Robot Antenna */}
              <path
                d="M12 4L12 7"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="4" r="1" className="fill-indigo-300" />
              
              {/* Robot Mouth Grid */}
              <path
                d="M9 15h6"
                stroke="indigo"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9 16.5h6"
                stroke="indigo"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              
              {/* Circuit Lines */}
              <path
                d="M4 12h2M18 12h2M6 18l1-1M17 18l-1-1"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
              
              {/* Connection Points */}
              <circle cx="4" cy="12" r="0.5" className="fill-indigo-300" />
              <circle cx="20" cy="12" r="0.5" className="fill-indigo-300" />
              <circle cx="6" cy="18" r="0.5" className="fill-indigo-300" />
              <circle cx="18" cy="18" r="0.5" className="fill-indigo-300" />
            </svg>
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


"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className, delay = 2000 }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)

  const animateText = useCallback(() => {
    if (isTyping) {
      if (displayText.length < text.length) {
        setDisplayText((prev) => text.slice(0, prev.length + 1))
      } else {
        // Delay for 2 seconds before starting to erase
        setTimeout(() => setIsTyping(false), 2000)
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText((prev) => prev.slice(0, -1))
      } else {
        setIsTyping(true)
      }
    }
  }, [displayText.length, isTyping, text])

  useEffect(() => {
    if (!hasStarted) {
      const timer = setTimeout(() => setHasStarted(true), delay)
      return () => clearTimeout(timer)
    }

    const intervalId = setInterval(animateText, isTyping ? 100 : 50)
    return () => clearInterval(intervalId)
  }, [hasStarted, delay, animateText, isTyping])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-purple-500 ml-1 relative top-[1px]"
      />
    </span>
  )
}


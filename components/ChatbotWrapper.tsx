"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { ChatbotIcon } from "./ChatbotIcon"
import { Chatbot } from "./Chatbot"

export function ChatbotWrapper() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <>
      {!isChatbotOpen && <ChatbotIcon onClick={() => setIsChatbotOpen(true)} />}
      <AnimatePresence>{isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}</AnimatePresence>
    </>
  )
}


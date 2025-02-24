"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, User, Bot } from "lucide-react"
import { useChat } from "ai/react"
import { ChatbotIcon } from "./ChatbotIcon"
import { RobotIcon } from "./RobotIcon"

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center space-x-1 p-2 bg-zinc-700 rounded-lg"
    >
      <motion.span
        className="w-2 h-2 bg-purple-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
      />
      <motion.span
        className="w-2 h-2 bg-purple-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.2 }}
      />
      <motion.span
        className="w-2 h-2 bg-purple-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.4 }}
      />
    </motion.div>
  )
}

export function Chatbot() {
  const [error, setError] = useState<string | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: "/api/chat",
    onError: (err) => {
      console.error("Chat error:", err)
      setIsTyping(false)
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: "assistant",
        content: "I apologize, but I'm having trouble processing your request at the moment. Please try again in a few moments. If you need immediate assistance, you can reach out to Asher directly at asherfarhan123@gmail.com."
      }])
    },
    onFinish: () => {
      setIsTyping(false)
    },
  })
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Scroll on new messages
  useEffect(() => {
    scrollToBottom()
  }, [messages]) // Scroll whenever messages update

  useEffect(() => {
    // Add welcome message when the component mounts
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "Welcome! I'm here to answer any questions about Asher's portfolio. How can I assist you today?",
      },
    ])
  }, [setMessages])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsTyping(true)
    try {
      await handleSubmit(e)
    } catch (err) {
      console.error("Submit error:", err)
      setError("Failed to send message. Please try again.")
      setIsTyping(false)
    }
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="chatbot"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: "easeOut"
            }}
            style={{ originY: 1 }}
            className="fixed bottom-4 right-4 w-96 h-[70vh] bg-zinc-800 rounded-lg shadow-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-zinc-700">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <RobotIcon className="w-6 h-6" />
                    <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-800">
                      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Portfolio AI Assistant
                  </h3>
                  <p className="text-xs text-zinc-400">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <RobotIcon className="w-6 h-6" />
                        </div>
                      </div>
                    )}
                    <div className={`flex flex-col ${message.role === "user" ? "items-end" : "items-start"}`}>
                      <span className="text-xs text-gray-400 mb-1">{message.role === "user" ? "You" : "AI"}</span>
                      <span
                        className={`inline-block p-3 rounded-2xl text-sm ${
                          message.role === "user" 
                            ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white" 
                            : "bg-zinc-700/50 text-white"
                        }`}
                      >
                        {message.content}
                      </span>
                    </div>
                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <TypingIndicator />
                </motion.div>
              )}
              {error && (
                <div className="text-center">
                  <span className="text-red-500 text-sm">{error}</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={onSubmit} className="p-4 border-t border-zinc-700">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me anything about the portfolio..."
                  className="flex-1 p-3 rounded-xl bg-zinc-700/50 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-3 rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 transition-all"
                  disabled={isLoading}
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChatbotIcon 
              onClick={() => setIsOpen(true)} 
              isOpen={!isOpen} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


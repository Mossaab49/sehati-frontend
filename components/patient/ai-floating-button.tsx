"use client"

import { Bot } from "lucide-react"
import { useApp } from "@/lib/patient-context"

export function AIFloatingButton() {
  const { currentPage, setCurrentPage, setSelectedConversation } = useApp()

  // Don't show on messages page (AI is already there pinned)
  if (currentPage === "messages") return null

  return (
    <button
      onClick={() => {
        setSelectedConversation("ai-bot")
        setCurrentPage("messages")
      }}
      className="fixed bottom-20 right-4 lg:bottom-8 lg:right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
      aria-label="Open AI Health Assistant"
    >
      <Bot className="w-6 h-6" />
    </button>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import {
  Send,
  Paperclip,
  Mic,
  MicOff,
  ArrowLeft,
  Search,
  Bot,
  Clock,
} from "lucide-react"
import { useApp } from "@/lib/patient-context"
import type { Message, Conversation } from "@/lib/patient-context"

export function MessagesPage() {
  const {
    conversations,
    setConversations,
    selectedConversation,
    setSelectedConversation,
  } = useApp()

  const activeConv = conversations.find((c) => c.id === selectedConversation)
  const [searchMsg, setSearchMsg] = useState("")

  const filteredConversations = conversations.filter((c) => {
    if (!searchMsg.trim()) return true
    return c.doctorName.toLowerCase().includes(searchMsg.toLowerCase())
  })

  // Sort: AI bot first, then by timestamp
  const sortedConversations = [...filteredConversations].sort((a, b) => {
    if (a.isAiBot) return -1
    if (b.isAiBot) return 1
    return b.lastTimestamp.getTime() - a.lastTimestamp.getTime()
  })

  const handleSelectConversation = (conv: Conversation) => {
    setSelectedConversation(conv.id)
    // Mark as read
    if (conv.unreadCount > 0) {
      setConversations((prev) =>
        prev.map((c) =>
          c.id === conv.id
            ? {
                ...c,
                unreadCount: 0,
                messages: c.messages.map((m) => ({ ...m, read: true })),
              }
            : c
        )
      )
    }
  }

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Conversation List */}
      <div
        className={`${
          activeConv ? "hidden md:flex" : "flex"
        } flex-col w-full md:w-80 lg:w-96 border-r border-border bg-card shrink-0`}
      >
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchMsg}
              onChange={(e) => setSearchMsg(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {sortedConversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => handleSelectConversation(conv)}
              className={`w-full flex items-center gap-3 px-4 py-3 border-b border-border/50 transition-colors text-left ${
                selectedConversation === conv.id
                  ? "bg-primary/5 border-l-2 border-l-primary"
                  : "hover:bg-secondary/50"
              }`}
            >
              <div className="relative shrink-0">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm ${
                    conv.isAiBot
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {conv.isAiBot ? <Bot className="w-5 h-5" /> : conv.doctorName.split(" ").slice(1).map(n => n[0]).join("")}
                </div>
                {conv.isOnline && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary border-2 border-card" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {conv.doctorName}
                    {conv.isAiBot && (
                      <span className="ml-1.5 text-[10px] font-medium text-primary">AI</span>
                    )}
                  </p>
                  <span className="text-[10px] text-muted-foreground shrink-0">
                    {formatTimeAgo(conv.lastTimestamp)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs text-muted-foreground truncate">{conv.lastMessage}</p>
                  {conv.unreadCount > 0 && (
                    <span className="shrink-0 w-5 h-5 text-[10px] font-bold rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      {conv.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      {activeConv ? (
        <ChatWindow
          conversation={activeConv}
          onBack={() => setSelectedConversation(null)}
        />
      ) : (
        <div className="hidden md:flex flex-1 items-center justify-center bg-background">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Send className="w-7 h-7 text-primary" />
            </div>
            <p className="text-base font-semibold text-foreground">Select a conversation</p>
            <p className="text-sm text-muted-foreground mt-1">Choose a doctor to start messaging</p>
          </div>
        </div>
      )}
    </div>
  )
}

function ChatWindow({
  conversation,
  onBack,
}: {
  conversation: Conversation
  onBack: () => void
}) {
  const { setConversations, doctors } = useApp()
  const [input, setInput] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [conversation.messages])

  const sendMessage = (text: string, type: "text" | "audio" = "text") => {
    if (!text.trim()) return

    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      senderId: "user",
      text,
      timestamp: new Date(),
      read: true,
      type,
    }

    setConversations((prev) =>
      prev.map((c) =>
        c.id === conversation.id
          ? {
              ...c,
              messages: [...c.messages, newMsg],
              lastMessage: text,
              lastTimestamp: new Date(),
            }
          : c
      )
    )

    setInput("")

    // AI Bot auto-reply
    if (conversation.isAiBot) {
      setTimeout(() => {
        const aiReply = getAIResponse(text)
        const aiMsg: Message = {
          id: `msg-${Date.now()}-ai`,
          senderId: "ai-bot",
          text: aiReply,
          timestamp: new Date(),
          read: true,
          type: "text",
        }
        setConversations((prev) =>
          prev.map((c) =>
            c.id === conversation.id
              ? {
                  ...c,
                  messages: [...c.messages, aiMsg],
                  lastMessage: aiReply,
                  lastTimestamp: new Date(),
                }
              : c
          )
        )
      }, 1200)
    }
  }

  const handleSend = () => {
    sendMessage(input)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false)
      sendMessage("Voice message: I have been feeling dizzy and having headaches for the past few days.", "audio")
    } else {
      setIsRecording(true)
    }
  }

  const handleAttachment = () => {
    const fileName = "medical_report.pdf"
    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      senderId: "user",
      text: `Attached: ${fileName}`,
      timestamp: new Date(),
      read: true,
      type: "document",
      fileName,
    }
    setConversations((prev) =>
      prev.map((c) =>
        c.id === conversation.id
          ? {
              ...c,
              messages: [...c.messages, newMsg],
              lastMessage: `Attached: ${fileName}`,
              lastTimestamp: new Date(),
            }
          : c
      )
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Chat Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-card border-b border-border">
        <button
          onClick={onBack}
          className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="relative">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
              conversation.isAiBot
                ? "bg-primary text-primary-foreground"
                : "bg-primary/10 text-primary"
            }`}
          >
            {conversation.isAiBot ? <Bot className="w-5 h-5" /> : conversation.doctorName.split(" ").slice(1).map(n => n[0]).join("")}
          </div>
          {conversation.isOnline && (
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-card" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{conversation.doctorName}</p>
          <p className="text-xs text-muted-foreground">
            {conversation.isAiBot
              ? "AI Health Assistant - Always available"
              : conversation.isOnline
              ? "Online"
              : "Clinic hours: Mon-Fri, 9AM-5PM"}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {conversation.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.senderId === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                msg.senderId === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : msg.senderId === "ai-bot"
                  ? "bg-card border border-primary/20 text-card-foreground rounded-bl-md"
                  : "bg-card border border-border text-card-foreground rounded-bl-md"
              }`}
            >
              {msg.type === "audio" && (
                <div className="flex items-center gap-2 mb-1">
                  <Mic className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-medium opacity-75">Voice Message</span>
                </div>
              )}
              {msg.type === "document" && (
                <div className="flex items-center gap-2 mb-1">
                  <Paperclip className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-medium opacity-75">{msg.fileName}</span>
                </div>
              )}
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className={`text-[10px] ${msg.senderId === "user" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {formatTime(msg.timestamp)}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-4 py-3 bg-card border-t border-border pb-safe" style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}>
        {isRecording && (
          <div className="flex items-center gap-3 mb-3 p-3 bg-destructive/10 rounded-xl">
            <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
            <span className="text-sm font-medium text-destructive">Recording...</span>
            <Clock className="w-4 h-4 text-destructive ml-auto" />
          </div>
        )}
        <div className="flex items-center gap-2">
          <button
            onClick={handleAttachment}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shrink-0"
            aria-label="Attach file"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <button
            onClick={toggleRecording}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
              isRecording
                ? "bg-destructive text-destructive-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
            aria-label={isRecording ? "Stop recording" : "Start recording"}
          >
            {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-4 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-primary text-primary-foreground hover:bg-accent transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

function getAIResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase()
  if (msg.includes("headache") || msg.includes("head") || msg.includes("migraine")) {
    return "Based on your symptoms, I recommend visiting a Neurologist. Headaches and migraines can have various causes. Dr. Amina Benali at Casablanca Medical Center is available today. Would you like me to help you book an appointment?"
  }
  if (msg.includes("heart") || msg.includes("chest") || msg.includes("cardiac")) {
    return "Heart and chest symptoms should be taken seriously. I recommend seeing a Cardiologist as soon as possible. Dr. Amina Benali specializes in cardiology and is available today at 2:00 PM."
  }
  if (msg.includes("skin") || msg.includes("rash") || msg.includes("acne") || msg.includes("eczema")) {
    return "For skin-related concerns, I recommend visiting a Dermatologist. Dr. Youssef El Idrissi at Rabat Skin Clinic is an excellent choice and has availability today at 3:30 PM."
  }
  if (msg.includes("child") || msg.includes("kid") || msg.includes("baby") || msg.includes("fever")) {
    return "For children's health concerns, a Pediatrician is the best specialist. Dr. Fatima Zahra Ouazzani at Kids Care Hospital is highly rated and available tomorrow at 9:00 AM."
  }
  if (msg.includes("eye") || msg.includes("vision") || msg.includes("sight")) {
    return "For vision and eye-related issues, I recommend an Ophthalmologist. Dr. Salma Cherkaoui at VisionCare Clinic has excellent reviews and is available tomorrow at 10:30 AM."
  }
  if (msg.includes("bone") || msg.includes("joint") || msg.includes("knee") || msg.includes("back")) {
    return "For bone and joint problems, an Orthopedic Surgeon would be most appropriate. Dr. Karim Tahiri at Atlas Bone & Joint Clinic is available today at 5:00 PM."
  }
  if (msg.includes("dizzy") || msg.includes("dizziness")) {
    return "Dizziness can be caused by many factors including inner ear issues, blood pressure, or neurological conditions. I recommend starting with a General Practitioner visit. Dr. Hassan Mouline at Family Health Center is available today at 11:00 AM and can refer you to a specialist if needed."
  }
  if (msg.includes("voice") || msg.includes("audio")) {
    return "Thank you for your voice message. Based on your description, I've analyzed your symptoms. Let me recommend the best specialist for you. Could you tell me more about when these symptoms started?"
  }
  return "Thank you for describing your symptoms. To give you the best recommendation, could you tell me more about:\n- Where do you feel discomfort?\n- How long have you had these symptoms?\n- Are there any other symptoms?\n\nYou can also send a voice message if it's easier for you."
}

function formatTimeAgo(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return "now"
  if (diffMins < 60) return `${diffMins}m`
  if (diffHours < 24) return `${diffHours}h`
  return `${diffDays}d`
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

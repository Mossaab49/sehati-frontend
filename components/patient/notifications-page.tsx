"use client"

import { useState } from "react"
import {
  Bell, Calendar, MessageCircle, CheckCheck,
  Clock, X, User, Stethoscope, MapPin, CheckCircle2
} from "lucide-react"
import { useApp } from "@/lib/patient-context"
import type { Notification } from "@/lib/patient-context"
import { cn } from "@/lib/utils"

// ─── Types extra data ─────────────────────────────────────────────

interface AppointmentExtra {
  doctorName:   string;
  specialty:    string;
  clinic:       string;
  date:         string;
  time:         string;
  status:       'upcoming' | 'accepted';
}

// ─── Extended mock notifications (overrides context ones) ─────────

const PATIENT_NOTIFICATIONS: (Notification & { extra?: AppointmentExtra; convId?: string })[] = [
  {
    id: "n1",
    type: "appointment",
    title: "Upcoming Appointment",
    description: "Your appointment with Dr. Amina Benali is tomorrow at 2:00 PM.",
    timestamp: new Date(Date.now() - 1800000),
    read: false,
    extra: {
      doctorName: "Dr. Amina Benali",
      specialty:  "Cardiologist",
      clinic:     "Casablanca Medical Center",
      date:       "March 11, 2026",
      time:       "14:00",
      status:     "upcoming",
    },
  },
  {
    id: "n4",
    type: "appointment",
    title: "Appointment Accepted",
    description: "Dr. Youssef El Idrissi accepted your appointment request for March 15.",
    timestamp: new Date(Date.now() - 3600000),
    read: false,
    extra: {
      doctorName: "Dr. Youssef El Idrissi",
      specialty:  "Dermatologist",
      clinic:     "Rabat Skin Clinic",
      date:       "March 15, 2026",
      time:       "10:30",
      status:     "accepted",
    },
  },
  {
    id: "n2",
    type: "message",
    title: "New Message",
    description: "Dr. Fatima Zahra Ouazzani's office sent you a message.",
    timestamp: new Date(Date.now() - 86400000),
    read: false,
    convId: "ai-bot",
  },
  {
    id: "n3",
    type: "system",
    title: "Welcome to Sehati",
    description: "Complete your profile to get personalized doctor recommendations.",
    timestamp: new Date(Date.now() - 172800000),
    read: true,
  },
]

// ─── Appointment Detail Modal ─────────────────────────────────────

function AppointmentModal({
  extra,
  onClose,
}: {
  extra: AppointmentExtra;
  onClose: () => void;
}) {
  const isAccepted = extra.status === "accepted"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-card border border-border rounded-2xl w-full max-w-md shadow-2xl">
        <div className="p-6 space-y-5">

          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center",
                isAccepted ? "bg-primary/10" : "bg-blue-400/10"
              )}>
                {isAccepted
                  ? <CheckCircle2 className="w-5 h-5 text-primary" />
                  : <Calendar className="w-5 h-5 text-blue-400" />
                }
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">
                  {isAccepted ? "Appointment Confirmed" : "Upcoming Appointment"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {isAccepted ? "Your appointment has been accepted" : "Appointment details"}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Status badge */}
          <div className={cn(
            "px-3 py-2 rounded-xl text-xs font-semibold text-center",
            isAccepted ? "bg-primary/10 text-primary" : "bg-blue-400/10 text-blue-400"
          )}>
            {isAccepted ? "✓ Confirmed by doctor" : "⏳ Scheduled — awaiting confirmation"}
          </div>

          {/* Info */}
          <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="font-semibold text-foreground">{extra.doctorName}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Stethoscope className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-foreground">{extra.specialty}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-foreground">{extra.clinic}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-foreground">{extra.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-foreground">{extra.time}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────

export function NotificationsPage() {
  const { markNotificationRead, markAllNotificationsRead, setCurrentPage, setSelectedConversation } = useApp()

  const [notifications, setNotifications] = useState(PATIENT_NOTIFICATIONS)
  const [activeNotif, setActiveNotif]     = useState<typeof PATIENT_NOTIFICATIONS[0] | null>(null)

  const unreadCount = notifications.filter((n) => !n.read).length

  const markRead = (id: string) => {
    markNotificationRead(id)
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n))
  }

  const markAll = () => {
    markAllNotificationsRead()
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const handleClick = (notif: typeof PATIENT_NOTIFICATIONS[0]) => {
    markRead(notif.id)

    if (notif.type === "message") {
      // redirect to messages and open the conversation
      if (notif.convId) setSelectedConversation(notif.convId)
      setCurrentPage("messages")
    } else if (notif.type === "appointment" && notif.extra) {
      setActiveNotif(notif)
    }
  }

  const formatDate = (date: Date) => {
    const diffMs    = Date.now() - date.getTime()
    const diffMins  = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays  = Math.floor(diffMs / 86400000)
    if (diffMins < 1)   return "Just now"
    if (diffMins < 60)  return `${diffMins} min ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays === 1) return "Yesterday"
    return `${diffDays} days ago`
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "appointment": return <Calendar className="w-5 h-5 text-primary" />
      case "message":     return <MessageCircle className="w-5 h-5 text-purple-400" />
      default:            return <Bell className="w-5 h-5 text-muted-foreground" />
    }
  }

  const getIconBg = (type: string) => {
    switch (type) {
      case "appointment": return "bg-primary/10"
      case "message":     return "bg-purple-400/10"
      default:            return "bg-secondary"
    }
  }

  const getHint = (notif: typeof PATIENT_NOTIFICATIONS[0]) => {
    if (notif.type === "message")     return <p className="text-xs text-purple-400 mt-1 font-medium">→ Click to open conversation</p>
    if (notif.type === "appointment") return <p className="text-xs text-primary mt-1 font-medium">→ Click to view details</p>
    return null
  }

  return (
    <>
      <div className="flex-1 overflow-y-auto pb-24 lg:pb-8">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
              {unreadCount > 0 && (
                <p className="text-sm text-muted-foreground mt-0.5">{unreadCount} unread notification{unreadCount > 1 ? 's' : ''}</p>
              )}
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAll}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-primary hover:bg-primary/10 transition-colors"
              >
                <CheckCheck className="w-3.5 h-3.5" />
                Mark all as read
              </button>
            )}
          </div>

          {/* List */}
          <div className="space-y-2">
            {notifications.map((notif) => (
              <button
                key={notif.id}
                onClick={() => handleClick(notif)}
                className={cn(
                  "w-full flex items-start gap-4 p-4 rounded-2xl border transition-all text-left",
                  notif.read
                    ? "bg-card border-border hover:border-border/80"
                    : "bg-primary/5 border-primary/20 hover:border-primary/30"
                )}
              >
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", getIconBg(notif.type))}>
                  {getIcon(notif.type)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-foreground">{notif.title}</p>
                    {!notif.read && <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{notif.description}</p>
                  {getHint(notif)}
                  <div className="flex items-center gap-1 mt-1.5">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">{formatDate(notif.timestamp)}</span>
                  </div>
                </div>
              </button>
            ))}

            {notifications.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bell className="w-7 h-7 text-primary" />
                </div>
                <p className="text-base font-semibold text-foreground">No notifications yet</p>
                <p className="text-sm text-muted-foreground mt-1">{"You're all caught up!"}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Appointment Detail Modal */}
      {activeNotif?.extra && (
        <AppointmentModal
          extra={activeNotif.extra}
          onClose={() => setActiveNotif(null)}
        />
      )}
    </>
  )
}

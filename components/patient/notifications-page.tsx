"use client"

import { useEffect } from "react"
import { Bell, Calendar, MessageCircle, Shield, CheckCheck, Clock } from "lucide-react"
import { useApp } from "@/lib/patient-context"

export function NotificationsPage() {
  const { notifications, markNotificationRead, markAllNotificationsRead } = useApp()


  useEffect(() => {
    markAllNotificationsRead()
  }, [])

  const unreadCount = notifications.filter((n) => !n.read).length

  const getIcon = (type: string) => {
    switch (type) {
      case "appointment":
        return <Calendar className="w-5 h-5 text-primary" />
      case "message":
        return <MessageCircle className="w-5 h-5 text-primary" />
      case "family":
        return <Shield className="w-5 h-5 text-amber-600" />
      default:
        return <Bell className="w-5 h-5 text-primary" />
    }
  }

  const formatDate = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins} min ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays === 1) return "Yesterday"
    return `${diffDays} days ago`
  }

  return (
    <div className="flex-1 overflow-y-auto pb-24 lg:pb-8">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
            {unreadCount > 0 && (
              <p className="text-sm text-muted-foreground mt-0.5">{unreadCount} unread notifications</p>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllNotificationsRead}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-primary hover:bg-primary/10 transition-colors"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              Mark all as read
            </button>
          )}
        </div>

        <div className="space-y-2">
          {notifications.map((notification) => (
            <button
              key={notification.id}
              onClick={() => markNotificationRead(notification.id)}
              className={`w-full flex items-start gap-4 p-4 rounded-2xl border transition-all text-left ${
                notification.read
                  ? "bg-card border-border hover:border-border"
                  : "bg-primary/5 border-primary/20 hover:border-primary/30"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className={`text-sm font-semibold ${notification.read ? "text-foreground" : "text-foreground"}`}>
                    {notification.title}
                  </p>
                  {!notification.read && (
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{notification.description}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">{formatDate(notification.timestamp)}</span>
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
  )
}

"use client"

import { useState } from "react"
import { LayoutDashboard, User, MessageCircle, Bell, Settings, ChevronLeft, ChevronRight, LogOut } from "lucide-react"
import { useApp, useTranslation } from "@/lib/patient-context"
import { useRouter } from "next/navigation"
import { logout } from "@/lib/auth"

export function SidebarNav() {
  const { currentPage, setCurrentPage, conversations, sidebarCollapsed, setSidebarCollapsed, notifications, markAllNotificationsRead, setConversations } = useApp()
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const t = useTranslation()
  const router = useRouter()

  const navItems = [
    { id: "dashboard" as const, label: t.dashboard, icon: LayoutDashboard },
    { id: "profile" as const, label: t.profile, icon: User },
    { id: "messages" as const, label: t.messages, icon: MessageCircle },
    { id: "notifications" as const, label: t.notifications, icon: Bell },
    { id: "settings" as const, label: t.settings, icon: Settings },
  ]

  const totalUnread = conversations.reduce((acc, c) => acc + c.unreadCount, 0)
  const unreadNotifs = notifications.filter((n) => !n.read).length

  const handleNavClick = (id: typeof navItems[number]["id"]) => {
    setCurrentPage(id)
    if (id === "notifications") markAllNotificationsRead()
    if (id === "messages") {
      setConversations((prev) => prev.map((c) => ({ ...c, unreadCount: 0 })))
    }
  }

  const handleLogout = () => {
    setShowLogoutConfirm(false)
    logout()
    router.push("/login")
  }

  return (
    <nav className={`hidden lg:flex flex-col border-r border-border bg-card py-6 px-3 gap-1 shrink-0 transition-all duration-300 ${sidebarCollapsed ? "w-[68px]" : "w-60"}`}>
      {/* Collapse toggle */}
      <button
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        title={sidebarCollapsed ? t.expand : t.collapse}
        className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-secondary transition-colors text-muted-foreground self-end mb-2"
      >
        {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {navItems.map((item) => {
        const isActive = currentPage === item.id
        const Icon = item.icon
        const showBadge = (item.id === "messages" && totalUnread > 0) || (item.id === "notifications" && unreadNotifs > 0)
        const badgeCount = item.id === "messages" ? totalUnread : unreadNotifs

        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            title={sidebarCollapsed ? item.label : undefined}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            } ${sidebarCollapsed ? "justify-center" : ""}`}
          >
            <div className="relative shrink-0">
              <Icon className="w-5 h-5" />
              {showBadge && sidebarCollapsed && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 text-[9px] font-bold rounded-full bg-destructive text-destructive-foreground flex items-center justify-center">
                  {badgeCount}
                </span>
              )}
            </div>
            {!sidebarCollapsed && (
              <>
                <span className="flex-1 truncate">{item.label}</span>
                {showBadge && (
                  <span className="ml-auto flex items-center justify-center w-5 h-5 text-[10px] font-bold rounded-full bg-destructive text-destructive-foreground">
                    {badgeCount}
                  </span>
                )}
              </>
            )}
          </button>
        )
      })}

      {/* Logout */}
      <div className="mt-auto pt-2 border-t border-border">
        <button
          onClick={() => setShowLogoutConfirm(true)}
          title={sidebarCollapsed ? "Sign Out" : undefined}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-destructive hover:bg-destructive/10 ${sidebarCollapsed ? "justify-center" : ""}`}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!sidebarCollapsed && <span>Sign Out</span>}
        </button>
      </div>

      {/* Logout Confirm Dialog */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
              <LogOut className="w-6 h-6 text-destructive" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground">Sign out?</h3>
              <p className="text-sm text-muted-foreground mt-1">You will be signed out of your current session.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowLogoutConfirm(false)} className="flex-1 py-2.5 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors text-sm font-medium">Cancel</button>
              <button onClick={handleLogout} className="flex-1 py-2.5 rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors text-sm font-medium">Sign Out</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export function MobileNav() {
  const { currentPage, setCurrentPage, conversations, notifications, markAllNotificationsRead, setConversations } = useApp()
  const t = useTranslation()

  const navItems = [
    { id: "dashboard" as const, label: t.dashboard, icon: LayoutDashboard },
    { id: "profile" as const, label: t.profile, icon: User },
    { id: "messages" as const, label: t.messages, icon: MessageCircle },
    { id: "notifications" as const, label: t.notifications, icon: Bell },
    { id: "settings" as const, label: t.settings, icon: Settings },
  ]

  const totalUnread = conversations.reduce((acc, c) => acc + c.unreadCount, 0)
  const unreadNotifs = notifications.filter((n) => !n.read).length

  const handleNavClick = (id: typeof navItems[number]["id"]) => {
    setCurrentPage(id)
    if (id === "notifications") markAllNotificationsRead()
    if (id === "messages") {
      setConversations((prev) => prev.map((c) => ({ ...c, unreadCount: 0 })))
    }
  }

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border">
      <div className="flex items-stretch justify-around px-1 py-1" style={{ paddingBottom: "env(safe-area-inset-bottom, 4px)" }}>
        {navItems.map((item) => {
          const isActive = currentPage === item.id
          const Icon = item.icon
          const showBadge = (item.id === "messages" && totalUnread > 0) || (item.id === "notifications" && unreadNotifs > 0)
          const badgeCount = item.id === "messages" ? totalUnread : unreadNotifs

          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative flex flex-col items-center justify-center gap-1 flex-1 py-2 px-1 rounded-xl transition-all ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground active:bg-secondary"
              }`}
            >
              {/* Active indicator pill */}
              {isActive && (
                <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-primary" />
              )}

              <div className="relative mt-1">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? "scale-110" : ""}`} />
                {showBadge && (
                  <span className="absolute -top-1 -right-1.5 min-w-[14px] h-3.5 px-0.5 text-[8px] font-bold rounded-full bg-destructive text-destructive-foreground flex items-center justify-center">
                    {badgeCount > 9 ? "9+" : badgeCount}
                  </span>
                )}
              </div>
              <span className={`text-[9px] font-semibold tracking-wide transition-all ${isActive ? "opacity-100" : "opacity-60"}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

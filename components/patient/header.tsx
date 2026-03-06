"use client"

import { Bell, Moon, Sun, LogOut, ChevronDown, Menu, X } from "lucide-react"
import { useApp } from "@/lib/patient-context"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { logout } from "@/lib/auth"

export function Header() {
  const {
    currentPage,
    setCurrentPage,
    darkMode,
    toggleDarkMode,
    user,
    notifications,
    language,
    setLanguage,
  } = useApp()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const unreadCount = notifications.filter((n) => !n.read).length

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const langFullLabels: Record<string, string> = { en: "English", fr: "Français", ar: "العربية" }

  const navItems = [
    { id: "dashboard" as const, label: "Dashboard" },
    { id: "profile" as const, label: "Profile" },
    { id: "messages" as const, label: "Messages" },
    { id: "notifications" as const, label: "Notifications" },
    { id: "settings" as const, label: "Settings" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-14 bg-card/95 backdrop-blur-sm border-b border-border">
        {/* Logo */}
        <button
          onClick={() => setCurrentPage("dashboard")}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-base font-bold text-foreground">Sehati</span>
        </button>

        {/* Right side */}
        <div className="flex items-center gap-1">
          {/* Dark mode */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Notifications bell */}
          <button
            onClick={() => setCurrentPage("notifications")}
            className={`relative flex items-center justify-center w-9 h-9 rounded-lg transition-colors ${
              currentPage === "notifications"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[9px] font-bold rounded-full bg-destructive text-destructive-foreground">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>

          {/* Menu button */}
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 pl-1 pr-2 py-1.5 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-xs shrink-0">
                {user.fullName.charAt(0)}
              </div>
              <span className="hidden sm:inline text-sm font-medium text-foreground">{user.fullName.split(" ")[0]}</span>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
            </button>

            {/* Dropdown */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
                {/* User info */}
                <div className="px-4 py-3 border-b border-border bg-secondary/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {user.fullName.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{user.fullName}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                  </div>
                </div>

                {/* Nav items (mobile — hidden on desktop since sidebar handles it) */}
                <div className="lg:hidden py-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => { setCurrentPage(item.id); setMenuOpen(false) }}
                      className={`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${
                        currentPage === item.id
                          ? "text-primary font-medium bg-primary/8"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {item.label}
                      {item.id === "notifications" && unreadCount > 0 && (
                        <span className="ml-auto flex items-center justify-center w-5 h-5 text-[10px] font-bold rounded-full bg-destructive text-destructive-foreground">
                          {unreadCount}
                        </span>
                      )}
                    </button>
                  ))}
                  <div className="border-t border-border mt-1" />
                </div>

                {/* Language switcher */}
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Language</p>
                  <div className="flex gap-1.5">
                    {(["en", "fr", "ar"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setMenuOpen(false) }}
                        className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                          language === lang
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {langFullLabels[lang]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sign out */}
                <button
                  onClick={() => { setMenuOpen(false); setShowLogoutConfirm(true) }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-destructive hover:bg-destructive/8 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Logout Confirm Dialog */}
      {showLogoutConfirm && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
          onClick={() => setShowLogoutConfirm(false)}
        >
          <div
            className="w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
              <LogOut className="w-6 h-6 text-destructive" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground">Sign out?</h3>
              <p className="text-sm text-muted-foreground mt-1">You will be signed out of your current session.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-3 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => { setShowLogoutConfirm(false); logout(); router.push("/login") }}
                className="flex-1 py-3 rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors text-sm font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

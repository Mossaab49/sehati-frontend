"use client"

import { AppProvider, useApp } from "@/lib/patient-context"
import { Header } from "@/components/patient/header"
import { SidebarNav, MobileNav } from "@/components/patient/sidebar-nav"
import { Dashboard } from "@/components/patient/dashboard"
import { ProfilePage } from "@/components/patient/profile-page"
import { MessagesPage } from "@/components/patient/messages-page"
import { NotificationsPage } from "@/components/patient/notifications-page"
import { SettingsPage } from "@/components/patient/settings-page"
import { AIFloatingButton } from "@/components/patient/ai-floating-button"

function AppContent() {
  const { currentPage } = useApp()

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SidebarNav />
        <div className="flex-1 overflow-hidden flex flex-col min-h-0">
          {currentPage === "dashboard" && <Dashboard />}
          {currentPage === "profile" && <ProfilePage />}
          {currentPage === "messages" && <MessagesPage />}
          {currentPage === "notifications" && <NotificationsPage />}
          {currentPage === "settings" && <SettingsPage />}
        </div>
      </div>
      <MobileNav />
      <AIFloatingButton />
    </div>
  )
}

export default function PatientPage() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

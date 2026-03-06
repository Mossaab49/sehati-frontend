"use client"

import { useState } from "react"
import {
  Globe,
  Moon,
  Sun,
  Bell,
  Shield,
  Eye,
  Smartphone,
  Key,
  Trash2,
  ChevronRight,
  Lock,
  Check,
  X,
  CheckCircle2,
  QrCode,
  LogOut,
} from "lucide-react"
import { useApp, type Language, useTranslation } from "@/lib/patient-context"
import { useRouter } from "next/navigation"
import { logout } from "@/lib/auth"

export function SettingsPage() {
  const { language, setLanguage, darkMode, toggleDarkMode, twoFactorEnabled, setTwoFactorEnabled, user, setUser } = useApp()
  const t = useTranslation()
  const router = useRouter()
  const [notifAppointments, setNotifAppointments] = useState(true)
  const [notifMessages, setNotifMessages] = useState(true)
  const [notifReminders, setNotifReminders] = useState(true)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const [showChangePassword, setShowChangePassword] = useState(false)
  const [show2FA, setShow2FA] = useState(false)
  const [passwordForm, setPasswordForm] = useState({ current: "", newPass: "", confirm: "" })
  const [passwordError, setPasswordError] = useState("")
  const [passwordSuccess, setPasswordSuccess] = useState(false)
  const [authCode, setAuthCode] = useState("")
  const [twoFASuccess, setTwoFASuccess] = useState(false)

  const langOptions: { value: Language; label: string; native: string; flag: string }[] = [
    { value: "en", label: "English",  native: "English",  flag: "🇬🇧" },
    { value: "fr", label: "French",   native: "Français", flag: "🇫🇷" },
    { value: "ar", label: "Arabic",   native: "العربية",  flag: "🇲🇦" },
  ]

  const handlePasswordSubmit = () => {
    setPasswordError("")
    if (!passwordForm.current || !passwordForm.newPass || !passwordForm.confirm) return
    if (passwordForm.current !== user.password) {
      setPasswordError("Current password is incorrect")
      return
    }
    if (passwordForm.newPass !== passwordForm.confirm) {
      setPasswordError(t.passwordMismatch)
      return
    }
    if (passwordForm.newPass.length < 6) {
      setPasswordError("Password must be at least 6 characters")
      return
    }
    setUser((prev) => ({ ...prev, password: passwordForm.newPass }))
    setPasswordSuccess(true)
    setPasswordForm({ current: "", newPass: "", confirm: "" })
    setTimeout(() => {
      setPasswordSuccess(false)
      setShowChangePassword(false)
    }, 1800)
  }

  const handle2FAToggle = () => {
    if (authCode.length < 6) return
    setTwoFactorEnabled(!twoFactorEnabled)
    setTwoFASuccess(true)
    setAuthCode("")
    setTimeout(() => {
      setTwoFASuccess(false)
      setShow2FA(false)
    }, 1800)
  }

  return (
    <div className="flex-1 overflow-y-auto pb-24 lg:pb-8">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">{t.settings}</h1>

        <div className="space-y-6">

          {/* Appearance */}
          <div className="bg-card rounded-2xl border border-border p-5 md:p-6">
            <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Eye className="w-4 h-4 text-primary" />
              {t.appearance}
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {darkMode ? <Moon className="w-4 h-4 text-muted-foreground" /> : <Sun className="w-4 h-4 text-muted-foreground" />}
                <div>
                  <p className="text-sm font-medium text-foreground">{t.darkMode}</p>
                  <p className="text-xs text-muted-foreground">{t.darkModeDesc}</p>
                </div>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`relative w-11 h-6 rounded-full transition-colors ${darkMode ? "bg-primary" : "bg-muted"}`}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-card shadow-sm transition-transform ${darkMode ? "translate-x-5" : "translate-x-0"}`} />
              </button>
            </div>
          </div>

          {/* Language */}
          <div className="bg-card rounded-2xl border border-border p-5 md:p-6">
            <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              {t.language}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {langOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setLanguage(opt.value)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${
                    language === opt.value
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border text-foreground hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{opt.flag}</span>
                    <div className="text-left">
                      <p className="text-sm font-medium">{opt.label}</p>
                      <p className="text-xs text-muted-foreground">{opt.native}</p>
                    </div>
                  </div>
                  {language === opt.value && <Check className="w-4 h-4 text-primary shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-card rounded-2xl border border-border p-5 md:p-6">
            <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Bell className="w-4 h-4 text-primary" />
              {t.notificationsTitle}
            </h2>
            <div className="space-y-4">
              <ToggleSetting label={t.appointmentReminders} description={t.appointmentRemindersDesc} icon={<Smartphone className="w-4 h-4 text-muted-foreground" />} enabled={notifAppointments} onToggle={() => setNotifAppointments(!notifAppointments)} />
              <ToggleSetting label={t.newMessages}          description={t.newMessagesDesc}          icon={<Smartphone className="w-4 h-4 text-muted-foreground" />} enabled={notifMessages}      onToggle={() => setNotifMessages(!notifMessages)} />
              <ToggleSetting label={t.healthReminders}      description={t.healthRemindersDesc}      icon={<Smartphone className="w-4 h-4 text-muted-foreground" />} enabled={notifReminders}     onToggle={() => setNotifReminders(!notifReminders)} />
            </div>
          </div>

          {/* Security */}
          <div className="bg-card rounded-2xl border border-border p-5 md:p-6">
            <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              {t.securityPrivacy}
            </h2>
            <div className="space-y-2">
              <button
                onClick={() => { setShowChangePassword(true); setPasswordError(""); setPasswordSuccess(false) }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Key className="w-4 h-4 text-muted-foreground" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">{t.changePassword}</p>
                    <p className="text-xs text-muted-foreground">{t.changePasswordDesc}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>

              <button
                onClick={() => { setShow2FA(true); setAuthCode(""); setTwoFASuccess(false) }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">{t.twoFactor}</p>
                    <p className="text-xs text-muted-foreground">
                      {twoFactorEnabled
                        ? <span className="text-primary font-medium">{t.twoFactorEnabled}</span>
                        : t.twoFactorDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {twoFactorEnabled && <span className="w-2 h-2 rounded-full bg-primary" />}
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-card rounded-2xl border border-destructive/30 p-5 md:p-6">
            <h2 className="text-base font-semibold text-destructive mb-2 flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              {t.dangerZone}
            </h2>
            <p className="text-xs text-muted-foreground mb-4">{t.dangerZoneDesc}</p>
            <div className="space-y-3">

              {/* Log Out */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-secondary/30">
                <div>
                  <p className="text-sm font-semibold text-foreground">Log Out</p>
                  <p className="text-xs text-muted-foreground">Sign out of your current session</p>
                </div>
                <button
                  onClick={() => setShowLogoutConfirm(true)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-secondary transition-colors"
                >
                  <LogOut className="w-4 h-4" /> Log Out
                </button>
              </div>

              {/* Delete Account */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-destructive/30 bg-destructive/5">
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.deleteAccount}</p>
                  <p className="text-xs text-muted-foreground">{t.dangerZoneDesc}</p>
                </div>
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border border-destructive text-destructive hover:bg-destructive/10 transition-colors"
                >
                  <Trash2 className="w-4 h-4" /> {t.deleteAccount}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Modals ──────────────────────────────────────────── */}

      {/* Change Password */}
      {showChangePassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={() => setShowChangePassword(false)}>
          <div className="w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
            {passwordSuccess ? (
              <div className="text-center py-4">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-sm font-semibold text-foreground">{t.passwordSuccess}</p>
              </div>
            ) : (
              <>
                <h3 className="text-base font-semibold text-foreground mb-4">{t.changePassword}</h3>
                <div className="space-y-3">
                  <input type="password" placeholder={t.currentPassword} value={passwordForm.current}
                    onChange={(e) => { setPasswordForm((p) => ({ ...p, current: e.target.value })); setPasswordError("") }}
                    className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="password" placeholder={t.newPassword} value={passwordForm.newPass}
                    onChange={(e) => { setPasswordForm((p) => ({ ...p, newPass: e.target.value })); setPasswordError("") }}
                    className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <div className="relative">
                    <input type="password" placeholder={t.confirmPassword} value={passwordForm.confirm}
                      onChange={(e) => { setPasswordForm((p) => ({ ...p, confirm: e.target.value })); setPasswordError("") }}
                      className={`w-full px-3 py-2.5 text-sm bg-secondary border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        passwordError === t.passwordMismatch ? "border-destructive"
                        : passwordForm.confirm && passwordForm.newPass && passwordForm.confirm === passwordForm.newPass ? "border-primary"
                        : "border-border"
                      }`} />
                    {passwordForm.confirm && passwordForm.newPass && (
                      <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium ${passwordForm.confirm === passwordForm.newPass ? "text-primary" : "text-destructive"}`}>
                        {passwordForm.confirm === passwordForm.newPass ? "✓ Match" : "✗ No match"}
                      </span>
                    )}
                  </div>
                  {passwordError && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <X className="w-3 h-3" /> {passwordError}
                    </p>
                  )}
                </div>
                <div className="flex gap-2 mt-4">
                  <button onClick={handlePasswordSubmit} disabled={!passwordForm.current || !passwordForm.newPass || !passwordForm.confirm}
                    className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {t.updatePassword}
                  </button>
                  <button onClick={() => setShowChangePassword(false)}
                    className="px-4 py-2.5 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-secondary transition-colors">
                    {t.cancel}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* 2FA */}
      {show2FA && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={() => setShow2FA(false)}>
          <div className="w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
            {twoFASuccess ? (
              <div className="text-center py-4">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-sm font-semibold text-foreground">{twoFactorEnabled ? t.twoFactorEnabled : t.twoFactorDisabled}</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="text-base font-semibold text-foreground">{t.twoFactorSetup}</h3>
                </div>
                {!twoFactorEnabled && (
                  <div className="flex justify-center mb-4">
                    <div className="w-36 h-36 bg-secondary rounded-xl flex items-center justify-center border border-border">
                      <QrCode className="w-20 h-20 text-foreground/40" />
                    </div>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mb-4">{t.twoFactorSetupDesc}</p>
                <input
                  type="text"
                  placeholder={t.enterAuthCode}
                  value={authCode}
                  onChange={(e) => setAuthCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  maxLength={6}
                  className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-center tracking-widest font-mono mb-4"
                />
                <div className="flex gap-2">
                  <button onClick={handle2FAToggle} disabled={authCode.length < 6}
                    className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${twoFactorEnabled ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : "bg-primary text-primary-foreground hover:bg-accent"}`}>
                    {twoFactorEnabled ? t.disable2FA : t.enable2FA}
                  </button>
                  <button onClick={() => setShow2FA(false)}
                    className="px-4 py-2.5 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-secondary transition-colors">
                    {t.cancel}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Logout Confirm */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={() => setShowLogoutConfirm(false)}>
          <div className="w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
              <LogOut className="w-6 h-6 text-destructive" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-foreground">Log out?</h3>
              <p className="text-sm text-muted-foreground mt-1">You will be signed out of your current session.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-2.5 rounded-xl border border-border text-foreground hover:bg-secondary transition-colors text-sm font-medium">
                {t.cancel}
              </button>
              <button onClick={() => { setShowLogoutConfirm(false); logout(); router.push('/login') }}
                className="flex-1 py-2.5 rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors text-sm font-medium">
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={() => setShowDeleteConfirm(false)}>
          <div className="w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start gap-3 mb-4">
              <Trash2 className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-semibold text-foreground">{t.deleteAccount}</h3>
                <p className="text-xs text-muted-foreground mt-1">{t.dangerZoneDesc}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-secondary transition-colors">
                {t.cancel}
              </button>
              <button onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2.5 text-sm font-medium rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors">
                {t.deleteAccount}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

function ToggleSetting({
  label, description, icon, enabled, onToggle,
}: {
  label: string; description: string; icon: React.ReactNode; enabled: boolean; onToggle: () => void
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-sm font-medium text-foreground">{label}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      <button onClick={onToggle} className={`relative w-11 h-6 rounded-full transition-colors ${enabled ? "bg-primary" : "bg-muted"}`}>
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-card shadow-sm transition-transform ${enabled ? "translate-x-5" : "translate-x-0"}`} />
      </button>
    </div>
  )
}

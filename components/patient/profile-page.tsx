"use client"

import { useState } from "react"
import {
  User,
  CreditCard,
  Calendar,
  Users2,
  Phone,
  Mail,
  Heart,
  Droplets,
  Shield,
  Edit3,
  Save,
  X,
  Plus,
  AlertTriangle,
  Check,
  Stethoscope,
  BadgeCheck,
  Search,
  Trash2,
  CheckCircle2,
} from "lucide-react"
import { useApp, useTranslation } from "@/lib/patient-context"
import type { FamilyMember } from "@/lib/patient-context"

// Simulated account search DB
const mockAccounts = [
  { id: "acc-1", name: "Ahmed Benali", email: "ahmed.benali@email.com", avatar: "A" },
  { id: "acc-2", name: "Sara El Mansouri", email: "sara.mansouri@email.com", avatar: "S" },
  { id: "acc-3", name: "Omar Tahiri", email: "omar.tahiri@email.com", avatar: "O" },
  { id: "acc-4", name: "Layla Cherkaoui", email: "layla.cherkaoui@email.com", avatar: "L" },
  { id: "acc-5", name: "Khalid Ouazzani", email: "khalid.ouazzani@email.com", avatar: "K" },
]

export function ProfilePage() {
  const { user, setUser, familyMembers, setFamilyMembers } = useApp()
  const t = useTranslation()
  const [editingPersonal, setEditingPersonal] = useState(false)
  const [editingMedical, setEditingMedical] = useState(false)
  const [showVerifyEmail, setShowVerifyEmail] = useState(false)
  const [emailCode, setEmailCode] = useState("")
  const [showAddMember, setShowAddMember] = useState(false)
  const [showApprovalAlert, setShowApprovalAlert] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState<typeof mockAccounts[0] | null>(null)
  const [memberSearch, setMemberSearch] = useState("")
  const [memberRelationship, setMemberRelationship] = useState("")
  const [showPhoneChange, setShowPhoneChange] = useState(false)
  const [phoneStep, setPhoneStep] = useState<"enter" | "verify" | "success">("enter")
  const [newPhone, setNewPhone] = useState("")
  const [phoneCode, setPhoneCode] = useState("")
  const [deletingMemberId, setDeletingMemberId] = useState<string | null>(null)
  const [showRequestSent, setShowRequestSent] = useState(false)
  const [pendingMemberName, setPendingMemberName] = useState("")

  const filteredAccounts = memberSearch.length > 1
    ? mockAccounts.filter(
        (a) =>
          !familyMembers.find((fm) => fm.name === a.name) &&
          (a.name.toLowerCase().includes(memberSearch.toLowerCase()) ||
            a.email.toLowerCase().includes(memberSearch.toLowerCase()))
      )
    : []

  const [personalForm, setPersonalForm] = useState({
    fullName: user.fullName,
    cin: user.cin,
    birthDate: user.birthDate,
    gender: user.gender,
    email: user.email,
    phone: user.phone,
  })

  const [medicalForm, setMedicalForm] = useState({
    bloodType: user.bloodType,
    chronicConditions: user.chronicConditions.join(", "),
    allergies: user.allergies.join(", "),
  })

  const handleSavePersonal = () => {
    setUser((prev) => ({ ...prev, ...personalForm }))
    setEditingPersonal(false)
  }

  const handleSaveMedical = () => {
    setUser((prev) => ({
      ...prev,
      bloodType: medicalForm.bloodType,
      chronicConditions: medicalForm.chronicConditions.split(",").map((s) => s.trim()).filter(Boolean),
      allergies: medicalForm.allergies.split(",").map((s) => s.trim()).filter(Boolean),
    }))
    setEditingMedical(false)
  }

  const handleVerifyEmail = () => {
    if (emailCode.length >= 4) {
      setUser((prev) => ({ ...prev, emailVerified: true }))
      setShowVerifyEmail(false)
      setEmailCode("")
    }
  }

  const handleSendPhoneCode = () => {
    if (newPhone.trim().length < 8) return
    setPhoneStep("verify")
  }

  const handleVerifyPhone = () => {
    if (phoneCode.length >= 4) {
      setUser((prev) => ({ ...prev, phone: newPhone, phoneVerified: true }))
      setPhoneStep("success")
      setTimeout(() => {
        setShowPhoneChange(false)
        setPhoneStep("enter")
        setNewPhone("")
        setPhoneCode("")
      }, 1600)
    }
  }

  const handleSelectAccount = (account: typeof mockAccounts[0]) => {
    setSelectedAccount(account)
    setMemberSearch(account.name)
  }

  const handleAddMember = () => {
    if (!selectedAccount || !memberRelationship) return
    setShowApprovalAlert(true)
  }

  const confirmAddMember = () => {
    if (!selectedAccount) return
    const member: FamilyMember = {
      id: `fm-${Date.now()}`,
      name: selectedAccount.name,
      age: 0,
      relationship: memberRelationship,
      avatar: selectedAccount.avatar,
      approved: false,
    }
    setFamilyMembers((prev) => [...prev, member])
    setPendingMemberName(selectedAccount.name)
    setSelectedAccount(null)
    setMemberSearch("")
    setMemberRelationship("")
    setShowAddMember(false)
    setShowApprovalAlert(false)
    setShowRequestSent(true)
    // Auto-hide after 4 seconds
    setTimeout(() => setShowRequestSent(false), 4000)
  }

  const handleDeleteMember = (id: string) => {
    setFamilyMembers((prev) => prev.filter((m) => m.id !== id))
    setDeletingMemberId(null)
  }

  return (
    <div className="flex-1 overflow-y-auto pb-24 lg:pb-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">{t.myProfile}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information Card */}
          <div className="bg-card rounded-2xl border border-border p-5 md:p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                {t.personalInformation}
              </h2>
              {!editingPersonal ? (
                <button
                  onClick={() => {
                    setPersonalForm({ fullName: user.fullName, cin: user.cin, birthDate: user.birthDate, gender: user.gender, email: user.email, phone: user.phone })
                    setEditingPersonal(true)
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-primary hover:bg-primary/10 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" /> {t.edit}
                </button>
              ) : (
                <div className="flex gap-1.5">
                  <button onClick={handleSavePersonal} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-colors">
                    <Save className="w-3.5 h-3.5" /> {t.save}
                  </button>
                  <button onClick={() => setEditingPersonal(false)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <ProfileField icon={<User className="w-4 h-4" />} label={t.fullName} value={user.fullName} editing={editingPersonal} editValue={personalForm.fullName} onChange={(v) => setPersonalForm((p) => ({ ...p, fullName: v }))} />
              <ProfileField icon={<CreditCard className="w-4 h-4" />} label={t.cinNumber} value={user.cin} editing={editingPersonal} editValue={personalForm.cin} onChange={(v) => setPersonalForm((p) => ({ ...p, cin: v }))} />
              <ProfileField icon={<Calendar className="w-4 h-4" />} label={t.birthDate} value={user.birthDate} editing={editingPersonal} editValue={personalForm.birthDate} onChange={(v) => setPersonalForm((p) => ({ ...p, birthDate: v }))} type="date" />

              {/* Gender */}
              <div>
                <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
                  <Users2 className="w-4 h-4" /> {t.gender}
                </label>
                {editingPersonal ? (
                  <select value={personalForm.gender} onChange={(e) => setPersonalForm((p) => ({ ...p, gender: e.target.value }))} className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                ) : (
                  <p className="text-sm text-foreground font-medium">{user.gender}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
                  <Mail className="w-4 h-4" /> {t.email}
                </label>
                {editingPersonal ? (
                  <input type="email" value={personalForm.email} onChange={(e) => setPersonalForm((p) => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                ) : (
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-foreground font-medium">{user.email}</p>
                    {user.emailVerified ? (
                      <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-primary/10 text-primary">
                        <BadgeCheck className="w-3 h-3" /> {t.verified}
                      </span>
                    ) : (
                      <button onClick={() => setShowVerifyEmail(true)} className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 hover:opacity-80 transition-opacity">
                        {t.verify}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
                  <Phone className="w-4 h-4" /> {t.phone}
                </label>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-foreground font-medium">{user.phone}</p>
                  {user.phoneVerified && (
                    <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-primary/10 text-primary">
                      <BadgeCheck className="w-3 h-3" /> {t.verified}
                    </span>
                  )}
                  {!editingPersonal && (
                    <button onClick={() => setShowPhoneChange(true)} className="px-2 py-0.5 text-[10px] font-semibold rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                      <Edit3 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Medical Information Card */}
          <div className="bg-card rounded-2xl border border-border p-5 md:p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-primary" />
                {t.medicalInformation}
              </h2>
              {!editingMedical ? (
                <button
                  onClick={() => {
                    setMedicalForm({ bloodType: user.bloodType, chronicConditions: user.chronicConditions.join(", "), allergies: user.allergies.join(", ") })
                    setEditingMedical(true)
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-primary hover:bg-primary/10 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" /> {t.edit}
                </button>
              ) : (
                <div className="flex gap-1.5">
                  <button onClick={handleSaveMedical} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-colors">
                    <Save className="w-3.5 h-3.5" /> {t.save}
                  </button>
                  <button onClick={() => setEditingMedical(false)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {/* Blood Type */}
              <div>
                <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
                  <Droplets className="w-4 h-4" /> {t.bloodType}
                </label>
                {editingMedical ? (
                  <select value={medicalForm.bloodType} onChange={(e) => setMedicalForm((p) => ({ ...p, bloodType: e.target.value }))} className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bt) => <option key={bt} value={bt}>{bt}</option>)}
                  </select>
                ) : (
                  <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-lg bg-destructive/10 text-destructive">{user.bloodType}</span>
                )}
              </div>

              {/* Chronic Conditions */}
              <div>
                <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
                  <Heart className="w-4 h-4" /> {t.chronicConditions}
                </label>
                {editingMedical ? (
                  <input type="text" value={medicalForm.chronicConditions} onChange={(e) => setMedicalForm((p) => ({ ...p, chronicConditions: e.target.value }))} placeholder={t.separateCommas} className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {user.chronicConditions.map((c) => <span key={c} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary">{c}</span>)}
                    {user.chronicConditions.length === 0 && <span className="text-sm text-muted-foreground">{t.noneDeclared}</span>}
                  </div>
                )}
              </div>

              {/* Allergies */}
              <div>
                <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
                  <Shield className="w-4 h-4" /> {t.allergies}
                </label>
                {editingMedical ? (
                  <input type="text" value={medicalForm.allergies} onChange={(e) => setMedicalForm((p) => ({ ...p, allergies: e.target.value }))} placeholder={t.separateCommas} className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {user.allergies.map((a) => <span key={a} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">{a}</span>)}
                    {user.allergies.length === 0 && <span className="text-sm text-muted-foreground">{t.noneDeclared}</span>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Family Members Section */}
        <div className="mt-6 bg-card rounded-2xl border border-border p-5 md:p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Users2 className="w-4 h-4 text-primary" />
              {t.familyMembers}
            </h2>
            <button onClick={() => { setShowAddMember(true); setSelectedAccount(null); setMemberSearch(""); setMemberRelationship("") }} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-colors">
              <Plus className="w-3.5 h-3.5" /> {t.addMember}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {familyMembers.map((member) => (
              <div key={member.id} className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/20 hover:shadow-sm transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg shrink-0">
                  {member.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-foreground truncate">{member.name}</p>
                    {member.approved ? (
                      <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    ) : (
                      <span className="text-[10px] font-medium text-amber-600 dark:text-amber-400 shrink-0">{t.pending}</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{member.relationship}{member.age > 0 ? ` - Age ${member.age}` : ""}</p>
                </div>
                <button
                  onClick={() => setDeletingMemberId(member.id)}
                  className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive text-muted-foreground transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Email Verification Modal */}
        {showVerifyEmail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={() => setShowVerifyEmail(false)}>
            <div className="w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-foreground">{t.verifyEmail}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{t.verifyEmailDesc} {user.email}.</p>
                </div>
              </div>
              <input type="text" placeholder={t.enterCode} value={emailCode} onChange={(e) => setEmailCode(e.target.value)} className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 mb-4" />
              <div className="flex gap-2">
                <button onClick={handleVerifyEmail} className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-accent transition-colors">{t.verify}</button>
                <button onClick={() => setShowVerifyEmail(false)} className="px-4 py-2.5 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-secondary transition-colors">{t.cancel}</button>
              </div>
            </div>
          </div>
        )}

        {/* Phone Change Modal */}
        {showPhoneChange && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={() => { setShowPhoneChange(false); setPhoneStep("enter") }}>
            <div className="w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
              {phoneStep === "success" ? (
                <div className="text-center py-4">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-foreground">{t.verified}!</p>
                </div>
              ) : phoneStep === "enter" ? (
                <>
                  <div className="flex items-start gap-3 mb-4">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{t.changePhone}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{t.changePhoneDesc}</p>
                    </div>
                  </div>
                  <input type="tel" placeholder={t.newPhoneNumber} value={newPhone} onChange={(e) => setNewPhone(e.target.value)} className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 mb-4" />
                  <div className="flex gap-2">
                    <button onClick={handleSendPhoneCode} disabled={newPhone.trim().length < 8} className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed">{t.sendVerificationCode}</button>
                    <button onClick={() => { setShowPhoneChange(false); setPhoneStep("enter") }} className="px-4 py-2.5 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-secondary transition-colors">{t.cancel}</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-3 mb-4">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{t.verifyNewPhone}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{t.verifyPhoneDesc}: {newPhone}</p>
                    </div>
                  </div>
                  <input type="text" placeholder={t.enterCode} value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)} className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 mb-4" />
                  <div className="flex gap-2">
                    <button onClick={handleVerifyPhone} disabled={phoneCode.length < 4} className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-accent transition-colors disabled:opacity-50">{t.verify}</button>
                    <button onClick={() => setPhoneStep("enter")} className="px-4 py-2.5 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-secondary transition-colors">{t.cancel}</button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Request Sent Success Toast */}
        {showRequestSent && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 bg-card border border-primary/30 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Request sent!</p>
              <p className="text-xs text-muted-foreground">Waiting for <span className="font-medium text-foreground">{pendingMemberName}</span> to accept</p>
            </div>
            <button onClick={() => setShowRequestSent(false)} className="ml-2 text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

                {/* Add Family Member Modal - Search-based */}
        {showAddMember && !showApprovalAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={() => setShowAddMember(false)}>
            <div className="w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-base font-semibold text-foreground mb-4">{t.addFamilyMember}</h3>
              <div className="space-y-3">
                {/* Search input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={memberSearch}
                    onChange={(e) => { setMemberSearch(e.target.value); setSelectedAccount(null) }}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                {/* Search results */}
                {filteredAccounts.length > 0 && !selectedAccount && (
                  <div className="border border-border rounded-xl overflow-hidden max-h-40 overflow-y-auto">
                    {filteredAccounts.map((account) => (
                      <button
                        key={account.id}
                        onClick={() => handleSelectAccount(account)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-secondary transition-colors text-left"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm shrink-0">{account.avatar}</div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{account.name}</p>
                          <p className="text-xs text-muted-foreground">{account.email}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
                {/* Selected account */}
                {selectedAccount && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm shrink-0">{selectedAccount.avatar}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{selectedAccount.name}</p>
                      <p className="text-xs text-muted-foreground">{selectedAccount.email}</p>
                    </div>
                    <button onClick={() => { setSelectedAccount(null); setMemberSearch("") }} className="text-muted-foreground hover:text-foreground">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
                {/* Relationship */}
                <select
                  value={memberRelationship}
                  onChange={(e) => setMemberRelationship(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select Relationship</option>
                  <option value="Son">Son</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Mother">Mother</option>
                  <option value="Father">Father</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex gap-2 mt-4">
                <button onClick={handleAddMember} disabled={!selectedAccount || !memberRelationship} className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed">{t.addMember}</button>
                <button onClick={() => setShowAddMember(false)} className="px-4 py-2.5 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-secondary transition-colors">{t.cancel}</button>
              </div>
            </div>
          </div>
        )}

        {/* Approval Alert */}
        {showApprovalAlert && selectedAccount && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={() => setShowApprovalAlert(false)}>
            <div className="w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-foreground">{t.approvalRequired}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{t.approvalDesc} {selectedAccount.name} {t.approvalDescEnd}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={confirmAddMember} className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-accent transition-colors">{t.sendRequest}</button>
                <button onClick={() => setShowApprovalAlert(false)} className="px-4 py-2.5 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-secondary transition-colors">{t.cancel}</button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Member Confirmation */}
        {deletingMemberId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={() => setDeletingMemberId(null)}>
            <div className="w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start gap-3 mb-4">
                <Trash2 className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-foreground">Remove Family Member</h3>
                  <p className="text-xs text-muted-foreground mt-1">Are you sure you want to remove {familyMembers.find(m => m.id === deletingMemberId)?.name} from your family members?</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setDeletingMemberId(null)} className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-secondary transition-colors">{t.cancel}</button>
                <button onClick={() => handleDeleteMember(deletingMemberId)} className="px-4 py-2.5 text-sm font-medium rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors">Remove</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ProfileField({ icon, label, value, editing, editValue, onChange, type = "text", badge }: {
  icon: React.ReactNode; label: string; value: string; editing: boolean; editValue: string; onChange: (v: string) => void; type?: string; badge?: string
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">{icon}{label}</label>
      {editing ? (
        <input type={type} value={editValue} onChange={(e) => onChange(e.target.value)} className="w-full px-3 py-2.5 text-sm bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
      ) : (
        <div className="flex items-center gap-2">
          <p className="text-sm text-foreground font-medium">{value}</p>
          {badge && <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-primary/10 text-primary"><BadgeCheck className="w-3 h-3" /> {badge}</span>}
        </div>
      )}
    </div>
  )
}

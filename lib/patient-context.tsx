"use client"

import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Language = "en" | "fr" | "ar"

export interface FamilyMember {
  id: string
  name: string
  age: number
  relationship: string
  avatar: string
  approved: boolean
}

export interface UserProfile {
  fullName: string
  cin: string
  birthDate: string
  gender: string
  email: string
  emailVerified: boolean
  phone: string
  phoneVerified: boolean
  avatar: string
  bloodType: string
  chronicConditions: string[]
  allergies: string[]
  medicalNotes: string
  password: string
}

export interface Doctor {
  id: string
  name: string
  specialty: string
  clinicLocation: string
  rating: number
  reviews: number
  nextAvailable: string
  photo: string
  distance: number
  lat: number
  lng: number
  availableToday: boolean
}

export interface Message {
  id: string
  senderId: string
  text: string
  timestamp: Date
  read: boolean
  type: "text" | "audio" | "document"
  fileName?: string
}

export interface Conversation {
  id: string
  doctorId: string
  doctorName: string
  doctorPhoto: string
  specialty: string
  lastMessage: string
  lastTimestamp: Date
  unreadCount: number
  isOnline: boolean
  messages: Message[]
  isAiBot?: boolean
}

export interface Appointment {
  id: string
  doctorId: string
  doctorName: string
  doctorPhoto: string
  specialty: string
  date: string
  time: string
  status: "upcoming" | "completed" | "cancelled"
  forMember?: string
}

export interface Notification {
  id: string
  type: "appointment" | "message" | "system" | "family"
  title: string
  description: string
  timestamp: Date
  read: boolean
  actionUrl?: string
}

type Page = "dashboard" | "profile" | "messages" | "notifications" | "settings"

interface AppContextType {
  currentPage: Page
  setCurrentPage: (page: Page) => void
  language: Language
  setLanguage: (lang: Language) => void
  darkMode: boolean
  toggleDarkMode: () => void
  user: UserProfile
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>
  familyMembers: FamilyMember[]
  setFamilyMembers: React.Dispatch<React.SetStateAction<FamilyMember[]>>
  doctors: Doctor[]
  conversations: Conversation[]
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>
  appointments: Appointment[]
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>
  notifications: Notification[]
  setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>
  markNotificationRead: (id: string) => void
  markAllNotificationsRead: () => void
  openMessageWithDoctor: (doctorId: string) => void
  selectedConversation: string | null
  setSelectedConversation: (id: string | null) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  twoFactorEnabled: boolean
  setTwoFactorEnabled: React.Dispatch<React.SetStateAction<boolean>>
  sidebarCollapsed: boolean
  setSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  isRTL: boolean
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const translations = {
  en: {
    greeting: "Good morning",
    dashboard: "Dashboard",
    profile: "Profile",
    messages: "Messages",
    notifications: "Notifications",
    settings: "Settings",
    // Profile page
    myProfile: "My Profile",
    personalInformation: "Personal Information",
    medicalInformation: "Medical Information",
    familyMembers: "Family Members",
    edit: "Edit",
    save: "Save",
    cancel: "Cancel",
    fullName: "Full Name",
    cinNumber: "CIN Number",
    birthDate: "Birth Date",
    gender: "Gender",
    email: "Email",
    phone: "Phone",
    verified: "Verified",
    verify: "Verify",
    pending: "Pending",
    bloodType: "Blood Type",
    chronicConditions: "Chronic Conditions",
    allergies: "Allergies",
    medicalNotes: "Medical Notes",
    addMember: "Add Member",
    noNotes: "No additional notes",
    noneDeclared: "None declared",
    verifyEmail: "Verify Your Email",
    verifyEmailDesc: "A verification code has been sent to",
    enterCode: "Enter verification code",
    approvalRequired: "Approval Required",
    approvalDesc: "A notification will be sent to",
    approvalDescEnd: "for their approval to be added as a family member.",
    sendRequest: "Send Request",
    addFamilyMember: "Add Family Member",
    relationship: "Relationship",
    separateCommas: "Separate with commas",
    additionalNotes: "Additional medical notes...",
    // Phone verification
    changePhone: "Change Phone Number",
    changePhoneDesc: "Enter your new phone number. A verification code will be sent to confirm the change.",
    newPhoneNumber: "New Phone Number",
    sendVerificationCode: "Send Verification Code",
    verifyNewPhone: "Verify New Phone Number",
    verifyPhoneDesc: "Enter the code sent to your new number",
    // Settings page
    appearance: "Appearance",
    darkMode: "Dark Mode",
    darkModeDesc: "Switch between light and dark themes",
    language: "Language",
    notificationsTitle: "Notifications",
    appointmentReminders: "Appointment Reminders",
    appointmentRemindersDesc: "Get notified about upcoming appointments",
    newMessages: "New Messages",
    newMessagesDesc: "Get notified when you receive a message",
    healthReminders: "Health Reminders",
    healthRemindersDesc: "Get periodic health check reminders",
    securityPrivacy: "Security & Privacy",
    changePassword: "Change Password",
    changePasswordDesc: "Update your account password",
    twoFactor: "Two-Factor Authentication",
    twoFactorDesc: "Add an extra layer of security",
    dangerZone: "Danger Zone",
    dangerZoneDesc: "Permanently delete your account and all associated data. This action cannot be undone.",
    deleteAccount: "Delete Account",
    currentPassword: "Current password",
    newPassword: "New password",
    confirmPassword: "Confirm new password",
    updatePassword: "Update Password",
    passwordMismatch: "Passwords do not match",
    passwordSuccess: "Password updated successfully!",
    twoFactorSetup: "Two-Factor Authentication",
    twoFactorSetupDesc: "Scan the QR code with your authenticator app, then enter the 6-digit code to enable 2FA.",
    enable2FA: "Enable 2FA",
    disable2FA: "Disable 2FA",
    twoFactorEnabled: "2FA is currently enabled",
    twoFactorDisabled: "2FA is currently disabled",
    enterAuthCode: "Enter 6-digit code from authenticator",
    // Appointment modal
    bookAppointment: "Book Appointment",
    whoIsThis: "Who is this appointment for?",
    bookForSomeoneElse: "Book for someone else",
    patientInfo: "Enter Patient Information",
    selectDate: "Select Date",
    availableSlots: "Available Time Slots",
    confirmAppointment: "Confirm Appointment",
    appointmentConfirmed: "Appointment Confirmed!",
    appointmentSuccess: "Your appointment has been successfully booked.",
    done: "Done",
    securityConfirmation: "Security Confirmation Required",
    securityConfirmationDesc: "For the safety of family members, this booking needs to be confirmed by the family member themselves.",
    // Sidebar
    collapse: "Collapse",
    expand: "Expand",
  },
  fr: {
    greeting: "Bonjour",
    dashboard: "Tableau de bord",
    profile: "Profil",
    messages: "Messages",
    notifications: "Notifications",
    settings: "Paramètres",
    myProfile: "Mon Profil",
    personalInformation: "Informations Personnelles",
    medicalInformation: "Informations Médicales",
    familyMembers: "Membres de la Famille",
    edit: "Modifier",
    save: "Sauvegarder",
    cancel: "Annuler",
    fullName: "Nom Complet",
    cinNumber: "Numéro CIN",
    birthDate: "Date de Naissance",
    gender: "Genre",
    email: "Email",
    phone: "Téléphone",
    verified: "Vérifié",
    verify: "Vérifier",
    pending: "En attente",
    bloodType: "Groupe Sanguin",
    chronicConditions: "Maladies Chroniques",
    allergies: "Allergies",
    medicalNotes: "Notes Médicales",
    addMember: "Ajouter un Membre",
    noNotes: "Aucune note supplémentaire",
    noneDeclared: "Aucun déclaré",
    verifyEmail: "Vérifier Votre Email",
    verifyEmailDesc: "Un code de vérification a été envoyé à",
    enterCode: "Entrez le code de vérification",
    approvalRequired: "Approbation Requise",
    approvalDesc: "Une notification sera envoyée à",
    approvalDescEnd: "pour son approbation d'être ajouté comme membre de la famille.",
    sendRequest: "Envoyer la Demande",
    addFamilyMember: "Ajouter un Membre de la Famille",
    relationship: "Relation",
    separateCommas: "Séparer par des virgules",
    additionalNotes: "Notes médicales supplémentaires...",
    changePhone: "Changer le Numéro de Téléphone",
    changePhoneDesc: "Entrez votre nouveau numéro. Un code de vérification sera envoyé pour confirmer.",
    newPhoneNumber: "Nouveau Numéro de Téléphone",
    sendVerificationCode: "Envoyer le Code de Vérification",
    verifyNewPhone: "Vérifier le Nouveau Numéro",
    verifyPhoneDesc: "Entrez le code envoyé à votre nouveau numéro",
    appearance: "Apparence",
    darkMode: "Mode Sombre",
    darkModeDesc: "Basculer entre les thèmes clair et sombre",
    language: "Langue",
    notificationsTitle: "Notifications",
    appointmentReminders: "Rappels de Rendez-vous",
    appointmentRemindersDesc: "Soyez notifié de vos prochains rendez-vous",
    newMessages: "Nouveaux Messages",
    newMessagesDesc: "Soyez notifié quand vous recevez un message",
    healthReminders: "Rappels de Santé",
    healthRemindersDesc: "Recevez des rappels périodiques de santé",
    securityPrivacy: "Sécurité et Confidentialité",
    changePassword: "Changer le Mot de Passe",
    changePasswordDesc: "Mettre à jour votre mot de passe",
    twoFactor: "Authentification à Deux Facteurs",
    twoFactorDesc: "Ajouter une couche de sécurité supplémentaire",
    dangerZone: "Zone Dangereuse",
    dangerZoneDesc: "Supprimer définitivement votre compte et toutes les données associées.",
    deleteAccount: "Supprimer le Compte",
    currentPassword: "Mot de passe actuel",
    newPassword: "Nouveau mot de passe",
    confirmPassword: "Confirmer le nouveau mot de passe",
    updatePassword: "Mettre à jour le Mot de Passe",
    passwordMismatch: "Les mots de passe ne correspondent pas",
    passwordSuccess: "Mot de passe mis à jour avec succès!",
    twoFactorSetup: "Authentification à Deux Facteurs",
    twoFactorSetupDesc: "Scannez le QR code avec votre application d'authentification, puis entrez le code à 6 chiffres.",
    enable2FA: "Activer 2FA",
    disable2FA: "Désactiver 2FA",
    twoFactorEnabled: "2FA est actuellement activé",
    twoFactorDisabled: "2FA est actuellement désactivé",
    enterAuthCode: "Entrez le code à 6 chiffres de l'authentificateur",
    bookAppointment: "Prendre Rendez-vous",
    whoIsThis: "Pour qui est ce rendez-vous?",
    bookForSomeoneElse: "Prendre pour quelqu'un d'autre",
    patientInfo: "Informations du Patient",
    selectDate: "Sélectionner une Date",
    availableSlots: "Créneaux Disponibles",
    confirmAppointment: "Confirmer le Rendez-vous",
    appointmentConfirmed: "Rendez-vous Confirmé!",
    appointmentSuccess: "Votre rendez-vous a été réservé avec succès.",
    done: "Terminé",
    securityConfirmation: "Confirmation de Sécurité Requise",
    securityConfirmationDesc: "Pour la sécurité des membres de la famille, cette réservation doit être confirmée.",
    collapse: "Réduire",
    expand: "Développer",
  },
  ar: {
    greeting: "صباح الخير",
    dashboard: "لوحة التحكم",
    profile: "الملف الشخصي",
    messages: "الرسائل",
    notifications: "الإشعارات",
    settings: "الإعدادات",
    myProfile: "ملفي الشخصي",
    personalInformation: "المعلومات الشخصية",
    medicalInformation: "المعلومات الطبية",
    familyMembers: "أفراد العائلة",
    edit: "تعديل",
    save: "حفظ",
    cancel: "إلغاء",
    fullName: "الاسم الكامل",
    cinNumber: "رقم بطاقة الهوية",
    birthDate: "تاريخ الميلاد",
    gender: "الجنس",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    verified: "موثق",
    verify: "توثيق",
    pending: "معلق",
    bloodType: "فصيلة الدم",
    chronicConditions: "الأمراض المزمنة",
    allergies: "الحساسية",
    medicalNotes: "الملاحظات الطبية",
    addMember: "إضافة فرد",
    noNotes: "لا توجد ملاحظات إضافية",
    noneDeclared: "لم يتم الإعلان عن أي",
    verifyEmail: "توثيق بريدك الإلكتروني",
    verifyEmailDesc: "تم إرسال رمز التحقق إلى",
    enterCode: "أدخل رمز التحقق",
    approvalRequired: "مطلوب موافقة",
    approvalDesc: "سيتم إرسال إشعار إلى",
    approvalDescEnd: "للموافقة على إضافته كفرد من العائلة.",
    sendRequest: "إرسال الطلب",
    addFamilyMember: "إضافة فرد من العائلة",
    relationship: "العلاقة",
    separateCommas: "افصل بفواصل",
    additionalNotes: "ملاحظات طبية إضافية...",
    changePhone: "تغيير رقم الهاتف",
    changePhoneDesc: "أدخل رقم هاتفك الجديد. سيتم إرسال رمز تحقق لتأكيد التغيير.",
    newPhoneNumber: "رقم الهاتف الجديد",
    sendVerificationCode: "إرسال رمز التحقق",
    verifyNewPhone: "توثيق رقم الهاتف الجديد",
    verifyPhoneDesc: "أدخل الرمز المرسل إلى رقمك الجديد",
    appearance: "المظهر",
    darkMode: "الوضع الداكن",
    darkModeDesc: "التبديل بين السمات الفاتحة والداكنة",
    language: "اللغة",
    notificationsTitle: "الإشعارات",
    appointmentReminders: "تذكيرات المواعيد",
    appointmentRemindersDesc: "احصل على إشعارات للمواعيد القادمة",
    newMessages: "رسائل جديدة",
    newMessagesDesc: "احصل على إشعارات عند تلقي رسالة",
    healthReminders: "تذكيرات صحية",
    healthRemindersDesc: "احصل على تذكيرات صحية دورية",
    securityPrivacy: "الأمان والخصوصية",
    changePassword: "تغيير كلمة المرور",
    changePasswordDesc: "تحديث كلمة مرور حسابك",
    twoFactor: "المصادقة الثنائية",
    twoFactorDesc: "إضافة طبقة أمان إضافية",
    dangerZone: "المنطقة الخطرة",
    dangerZoneDesc: "حذف حسابك وجميع البيانات المرتبطة به نهائياً.",
    deleteAccount: "حذف الحساب",
    currentPassword: "كلمة المرور الحالية",
    newPassword: "كلمة المرور الجديدة",
    confirmPassword: "تأكيد كلمة المرور الجديدة",
    updatePassword: "تحديث كلمة المرور",
    passwordMismatch: "كلمات المرور غير متطابقة",
    passwordSuccess: "تم تحديث كلمة المرور بنجاح!",
    twoFactorSetup: "المصادقة الثنائية",
    twoFactorSetupDesc: "امسح رمز QR بتطبيق المصادقة، ثم أدخل الرمز المكون من 6 أرقام.",
    enable2FA: "تفعيل المصادقة الثنائية",
    disable2FA: "تعطيل المصادقة الثنائية",
    twoFactorEnabled: "المصادقة الثنائية مفعلة حالياً",
    twoFactorDisabled: "المصادقة الثنائية معطلة حالياً",
    enterAuthCode: "أدخل الرمز المكون من 6 أرقام من تطبيق المصادقة",
    bookAppointment: "حجز موعد",
    whoIsThis: "لمن هذا الموعد؟",
    bookForSomeoneElse: "حجز لشخص آخر",
    patientInfo: "معلومات المريض",
    selectDate: "اختر التاريخ",
    availableSlots: "المواعيد المتاحة",
    confirmAppointment: "تأكيد الموعد",
    appointmentConfirmed: "تم تأكيد الموعد!",
    appointmentSuccess: "تم حجز موعدك بنجاح.",
    done: "تم",
    securityConfirmation: "مطلوب تأكيد أمني",
    securityConfirmationDesc: "لسلامة أفراد العائلة، يجب تأكيد هذا الحجز من قِبلهم.",
    collapse: "طي",
    expand: "توسيع",
  },
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error("useApp must be used within AppProvider")
  return context
}

export function useTranslation() {
  const { language } = useApp()
  return translations[language]
}

const mockDoctors: Doctor[] = [
  { id: "1", name: "Dr. Amina Benali", specialty: "Cardiologist", clinicLocation: "Casablanca Medical Center", rating: 4.9, reviews: 128, nextAvailable: "Today, 2:00 PM", photo: "", distance: 1.2, lat: 33.5731, lng: -7.5898, availableToday: true },
  { id: "2", name: "Dr. Youssef El Idrissi", specialty: "Dermatologist", clinicLocation: "Rabat Skin Clinic", rating: 4.7, reviews: 95, nextAvailable: "Today, 3:30 PM", photo: "", distance: 2.5, lat: 33.9716, lng: -6.8498, availableToday: true },
  { id: "3", name: "Dr. Fatima Zahra Ouazzani", specialty: "Pediatrician", clinicLocation: "Kids Care Hospital", rating: 4.8, reviews: 210, nextAvailable: "Tomorrow, 9:00 AM", photo: "", distance: 3.8, lat: 33.5890, lng: -7.6100, availableToday: false },
  { id: "4", name: "Dr. Karim Tahiri", specialty: "Orthopedic Surgeon", clinicLocation: "Atlas Bone & Joint Clinic", rating: 4.6, reviews: 76, nextAvailable: "Today, 5:00 PM", photo: "", distance: 5.1, lat: 33.5500, lng: -7.6200, availableToday: true },
  { id: "5", name: "Dr. Salma Cherkaoui", specialty: "Ophthalmologist", clinicLocation: "VisionCare Clinic", rating: 4.9, reviews: 156, nextAvailable: "Tomorrow, 10:30 AM", photo: "", distance: 0.8, lat: 33.5800, lng: -7.5700, availableToday: false },
  { id: "6", name: "Dr. Hassan Mouline", specialty: "General Practitioner", clinicLocation: "Family Health Center", rating: 4.5, reviews: 320, nextAvailable: "Today, 11:00 AM", photo: "", distance: 1.5, lat: 33.5650, lng: -7.5950, availableToday: true },
]

const mockConversations: Conversation[] = [
  {
    id: "ai-bot",
    doctorId: "ai-bot",
    doctorName: "Sehati AI Assistant",
    doctorPhoto: "",
    specialty: "AI Health Guide",
    lastMessage: "Hello! I can help you find the right doctor. Describe your symptoms or send a voice message.",
    lastTimestamp: new Date(),
    unreadCount: 0,
    isOnline: true,
    isAiBot: true,
    messages: [
      { id: "ai-1", senderId: "ai-bot", text: "Hello! I'm your Sehati AI Health Assistant. I can help elderly patients and anyone find the right doctor to visit. You can type your symptoms or send a voice message describing how you feel, and I'll recommend the best specialist for you.", timestamp: new Date(Date.now() - 60000), read: true, type: "text" },
    ],
  },
  {
    id: "conv-1",
    doctorId: "1",
    doctorName: "Dr. Amina Benali",
    doctorPhoto: "",
    specialty: "Cardiologist",
    lastMessage: "Your appointment is confirmed for tomorrow at 2:00 PM.",
    lastTimestamp: new Date(Date.now() - 3600000),
    unreadCount: 0,
    isOnline: true,
    messages: [
      { id: "m1", senderId: "user", text: "Hello, I would like to book an appointment for a heart checkup.", timestamp: new Date(Date.now() - 7200000), read: true, type: "text" },
      { id: "m2", senderId: "secretary", text: "Of course! Dr. Benali has availability tomorrow at 2:00 PM. Would that work for you?", timestamp: new Date(Date.now() - 5400000), read: true, type: "text" },
      { id: "m3", senderId: "user", text: "Yes, that works perfectly. Thank you!", timestamp: new Date(Date.now() - 4500000), read: true, type: "text" },
      { id: "m4", senderId: "secretary", text: "Your appointment is confirmed for tomorrow at 2:00 PM.", timestamp: new Date(Date.now() - 3600000), read: true, type: "text" },
    ],
  },
  {
    id: "conv-2",
    doctorId: "3",
    doctorName: "Dr. Fatima Zahra Ouazzani",
    doctorPhoto: "",
    specialty: "Pediatrician",
    lastMessage: "Please bring the child's vaccination card.",
    lastTimestamp: new Date(Date.now() - 86400000),
    unreadCount: 1,
    isOnline: false,
    messages: [
      { id: "m5", senderId: "user", text: "My child has been having a fever for 2 days.", timestamp: new Date(Date.now() - 172800000), read: true, type: "text" },
      { id: "m6", senderId: "secretary", text: "Please bring the child's vaccination card.", timestamp: new Date(Date.now() - 86400000), read: false, type: "text" },
    ],
  },
]

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard")
  const [language, setLanguageState] = useState<Language>("en")
  const [darkMode, setDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const isRTL = language === "ar"

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl")
      document.documentElement.setAttribute("lang", "ar")
    } else {
      document.documentElement.setAttribute("dir", "ltr")
      document.documentElement.setAttribute("lang", lang)
    }
  }, [])

  const [user, setUser] = useState<UserProfile>({
    fullName: "Kaoutar Benali",
    cin: "BK123456",
    birthDate: "1995-03-15",
    gender: "Female",
    email: "kaoutar.benali@email.com",
    emailVerified: false,
    phone: "+212 6 12 34 56 78",
    phoneVerified: true,
    avatar: "",
    bloodType: "A+",
    chronicConditions: ["Asthma"],
    allergies: ["Penicillin"],
    medicalNotes: "",
    password: "password123",
  })

  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
    { id: "fm-1", name: "Youssef Benali", age: 8, relationship: "Son", avatar: "", approved: true },
    { id: "fm-2", name: "Fatima Benali", age: 65, relationship: "Mother", avatar: "", approved: true },
  ])

  const [conversations, setConversations] = useState<Conversation[]>(mockConversations)

  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: "apt-1", doctorId: "1", doctorName: "Dr. Amina Benali", doctorPhoto: "", specialty: "Cardiologist", date: "2026-02-27", time: "2:00 PM", status: "upcoming" },
  ])

  const [notifications, setNotifications] = useState<Notification[]>([
    { id: "n1", type: "appointment", title: "Upcoming Appointment", description: "Your appointment with Dr. Amina Benali is tomorrow at 2:00 PM.", timestamp: new Date(Date.now() - 1800000), read: false },
    { id: "n2", type: "message", title: "New Message", description: "Dr. Fatima Zahra Ouazzani's secretary sent you a message.", timestamp: new Date(Date.now() - 86400000), read: false },
    { id: "n3", type: "system", title: "Welcome to Sehati", description: "Complete your profile to get personalized doctor recommendations.", timestamp: new Date(Date.now() - 172800000), read: true },
  ])

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const newVal = !prev
      if (newVal) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      return newVal
    })
  }, [])

  const markNotificationRead = useCallback((id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }, [])

  const markAllNotificationsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }, [])

  const openMessageWithDoctor = useCallback((doctorId: string) => {
    const existing = conversations.find((c) => c.doctorId === doctorId)
    if (existing) {
      setSelectedConversation(existing.id)
    } else {
      const doctor = mockDoctors.find((d) => d.id === doctorId)
      if (doctor) {
        const newConv: Conversation = {
          id: `conv-${Date.now()}`,
          doctorId: doctor.id,
          doctorName: doctor.name,
          doctorPhoto: doctor.photo,
          specialty: doctor.specialty,
          lastMessage: "",
          lastTimestamp: new Date(),
          unreadCount: 0,
          isOnline: true,
          messages: [],
        }
        setConversations((prev) => [...prev, newConv])
        setSelectedConversation(newConv.id)
      }
    }
    setCurrentPage("messages")
  }, [conversations])

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        language,
        setLanguage,
        darkMode,
        toggleDarkMode,
        user,
        setUser,
        familyMembers,
        setFamilyMembers,
        doctors: mockDoctors,
        conversations,
        setConversations,
        appointments,
        setAppointments,
        notifications,
        setNotifications,
        markNotificationRead,
        markAllNotificationsRead,
        openMessageWithDoctor,
        selectedConversation,
        setSelectedConversation,
        searchQuery,
        setSearchQuery,
        twoFactorEnabled,
        setTwoFactorEnabled,
        sidebarCollapsed,
        setSidebarCollapsed,
        isRTL,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

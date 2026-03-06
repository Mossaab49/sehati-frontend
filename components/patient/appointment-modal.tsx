"use client"

import { useState } from "react"
import { CalendarDays, Clock, Check, X, ChevronLeft, ChevronRight, User, Users } from "lucide-react"
import { useApp, useTranslation } from "@/lib/patient-context"
import type { Doctor } from "@/lib/patient-context"

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM",
]

export function AppointmentModal({ doctor, onClose }: { doctor: Doctor; onClose: () => void }) {
  const { user, familyMembers, setAppointments, setNotifications } = useApp()
  const t = useTranslation()

  const [step, setStep] = useState<"who" | "calendar" | "confirm" | "success" | "family-confirm">("who")
  const [bookingFor, setBookingFor] = useState<"self" | string>("self")
  const [familyName, setFamilyName] = useState("")
  const [familyAge, setFamilyAge] = useState("")
  const [familyRelation, setFamilyRelation] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showFamilyAlert, setShowFamilyAlert] = useState(false)

  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const isDateDisabled = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
  }

  const handleBookingForSelect = (value: "self" | string) => {
    setBookingFor(value)
    setStep("calendar")
  }

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return

    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`

    let forMember = undefined
    if (bookingFor !== "self" && bookingFor !== "other") {
      const member = familyMembers.find((m) => m.id === bookingFor)
      forMember = member?.name
    } else if (bookingFor === "other") {
      forMember = familyName
    }

    setAppointments((prev) => [
      ...prev,
      {
        id: `apt-${Date.now()}`,
        doctorId: doctor.id,
        doctorName: doctor.name,
        doctorPhoto: doctor.photo,
        specialty: doctor.specialty,
        date: dateStr,
        time: selectedTime,
        status: "upcoming",
        forMember,
      },
    ])

    setNotifications((prev) => [
      {
        id: `n-${Date.now()}`,
        type: "appointment",
        title: "Appointment Confirmed",
        description: `Your appointment with ${doctor.name} on ${dateStr} at ${selectedTime} has been confirmed.${forMember ? ` (For ${forMember})` : ""}`,
        timestamp: new Date(),
        read: false,
      },
      ...prev,
    ])

    setStep("success")
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={onClose}>
      <div
        className="w-full max-w-md bg-card rounded-2xl border border-border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h3 className="text-base font-semibold text-foreground">{t.bookAppointment}</h3>
            <p className="text-sm text-muted-foreground">{doctor.name} - {doctor.specialty}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step: Who is this for? */}
        {step === "who" && (
          <div className="p-5">
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Who is this appointment for?
            </h4>

            <div className="space-y-2">
              <button
                onClick={() => { setBookingFor("self"); setStep("calendar") }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${bookingFor === "self" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {user.fullName.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">{user.fullName} (You)</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </button>

              {familyMembers.map((member) => (
                <button
                  key={member.id}
                  onClick={() => handleBookingForSelect(member.id)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
                    {member.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.relationship} - Age {member.age}</p>
                  </div>
                </button>
              ))}

              <button
                onClick={() => { setBookingFor("other"); setStep("calendar") }}
                className="w-full flex items-center gap-3 p-3 rounded-xl border border-dashed border-border hover:border-primary/30 transition-all text-muted-foreground"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <p className="text-sm font-medium">Book for someone else</p>
              </button>
            </div>
          </div>
        )}

        {/* Step: Other person manual fields */}
        {step === "calendar" && bookingFor === "other" && !familyName && (
          <div className="p-5 space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Enter Patient Information</h4>
            <input
              type="text"
              placeholder="Full Name"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="text"
              placeholder="Age"
              value={familyAge}
              onChange={(e) => setFamilyAge(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="text"
              placeholder="Relationship (e.g., Friend, Neighbor)"
              value={familyRelation}
              onChange={(e) => setFamilyRelation(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              onClick={() => setFamilyName(familyName || "Guest")}
              disabled={!familyName.trim()}
              className="w-full px-4 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step: Calendar */}
        {step === "calendar" && (bookingFor !== "other" || familyName) && (
          <div className="p-5">
            {/* Calendar */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  Select Date
                </h4>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1) }
                      else setCurrentMonth(currentMonth - 1)
                    }}
                    className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-medium text-foreground min-w-[120px] text-center">
                    {monthNames[currentMonth]} {currentYear}
                  </span>
                  <button
                    onClick={() => {
                      if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1) }
                      else setCurrentMonth(currentMonth + 1)
                    }}
                    className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                  <span key={d} className="text-[10px] font-medium text-muted-foreground py-1">{d}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1
                  const disabled = isDateDisabled(day)
                  const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear
                  const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()

                  return (
                    <button
                      key={day}
                      onClick={() => !disabled && setSelectedDate(new Date(currentYear, currentMonth, day))}
                      disabled={disabled}
                      className={`w-full aspect-square rounded-lg text-xs font-medium transition-all ${
                        disabled
                          ? "text-muted-foreground/30 cursor-not-allowed"
                          : isSelected
                          ? "bg-primary text-primary-foreground"
                          : isToday
                          ? "bg-primary/10 text-primary hover:bg-primary/20"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="mb-5">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Available Time Slots
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`px-2 py-2 text-xs font-medium rounded-lg transition-all ${
                        selectedTime === slot
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Confirm Button */}
            <button
              onClick={handleConfirm}
              disabled={!selectedDate || !selectedTime}
              className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Appointment
            </button>
          </div>
        )}

        {/* Step: Success */}
        {step === "success" && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 animate-in zoom-in">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-1">Appointment Confirmed!</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Your appointment with {doctor.name} has been successfully booked.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-accent transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

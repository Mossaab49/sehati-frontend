"use client"

import { useState, useMemo } from "react"
import {
  Search,
  Star,
  MapPin,
  Clock,
  MessageCircle,
  CalendarPlus,
  Filter,
  ChevronRight,
  Navigation,
} from "lucide-react"
import { useApp, useTranslation } from "@/lib/patient-context"
import { AppointmentModal } from "./appointment-modal"
import { DoctorProfilePage } from "./doctor-profile-page"
import type { Doctor } from "@/lib/patient-context"

type SortBy = "distance" | "rating" | "availability"

export function Dashboard() {
  const {
    user,
    doctors,
    appointments,
    openMessageWithDoctor,
    searchQuery,
    setSearchQuery,
    setCurrentPage,
  } = useApp()
  const t = useTranslation()

  const [sortBy, setSortBy] = useState<SortBy>("distance")
  const [showBooking, setShowBooking] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [showMap, setShowMap] = useState<Doctor | null>(null)
  const [visibleCount, setVisibleCount] = useState(4)
  const [viewingDoctor, setViewingDoctor] = useState<Doctor | null>(null)

  const filteredDoctors = useMemo(() => {
    let filtered = [...doctors]
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.specialty.toLowerCase().includes(q)
      )
    }
    switch (sortBy) {
      case "distance":
        filtered.sort((a, b) => a.distance - b.distance)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "availability":
        filtered.sort((a, b) => (a.availableToday === b.availableToday ? 0 : a.availableToday ? -1 : 1))
        break
    }
    return filtered
  }, [doctors, searchQuery, sortBy])

  const upcomingAppointment = appointments.find((a) => a.status === "upcoming")

  const firstName = user.fullName.split(" ")[0]
  const hour = new Date().getHours()
  const greetingTime = hour < 12 ? t.greeting : hour < 18 ? t.greeting : t.greeting

  // Show doctor profile page when a doctor is clicked
  if (viewingDoctor) {
    return (
      <DoctorProfilePage
        doctor={viewingDoctor}
        onBack={() => setViewingDoctor(null)}
        onBook={() => {
          setSelectedDoctor(viewingDoctor)
          setShowBooking(true)
        }}
        onMessage={() => {
          openMessageWithDoctor(viewingDoctor.id)
          setViewingDoctor(null)
        }}
      />
    )
  }

  return (
    <div className="flex-1 overflow-y-auto pb-24 lg:pb-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-6">
        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            {greetingTime}, {firstName}
          </h1>
          <p className="text-muted-foreground mt-1">How can we help you today?</p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Upcoming Appointment */}
          <button
            onClick={() => {
              if (upcomingAppointment) setCurrentPage("notifications")
            }}
            className="group flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
              <CalendarPlus className="w-6 h-6" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-foreground">Upcoming Appointment</p>
              {upcomingAppointment ? (
                <p className="text-xs text-muted-foreground mt-0.5">
                  {upcomingAppointment.doctorName} - {upcomingAppointment.date}, {upcomingAppointment.time}
                </p>
              ) : (
                <p className="text-xs text-muted-foreground mt-0.5">No upcoming appointments</p>
              )}
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>

          {/* Recent Messages */}
          <button
            onClick={() => setCurrentPage("messages")}
            className="group flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-foreground">Recent Messages</p>
              <p className="text-xs text-muted-foreground mt-0.5">Check your conversations</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
          <h2 className="text-lg font-semibold text-foreground shrink-0">Find a Doctor</h2>
          <div className="relative flex-1 w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {(["distance", "rating", "availability"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSortBy(filter)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors capitalize ${
                  sortBy === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid gap-4">
          {filteredDoctors.slice(0, visibleCount).map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onViewProfile={() => setViewingDoctor(doctor)}
              onBook={() => {
                setSelectedDoctor(doctor)
                setShowBooking(true)
              }}
              onMessage={() => openMessageWithDoctor(doctor.id)}
              onMap={() => setShowMap(doctor)}
            />
          ))}
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No doctors found matching your search.</p>
            </div>
          )}
          {filteredDoctors.length > visibleCount && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="w-full py-3 rounded-xl border border-dashed border-border text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
            >
              <ChevronRight className="w-4 h-4 rotate-90" />
              Show more doctors ({filteredDoctors.length - visibleCount} remaining)
            </button>
          )}
          {visibleCount > 4 && filteredDoctors.length <= visibleCount && filteredDoctors.length > 4 && (
            <button
              onClick={() => setVisibleCount(4)}
              className="w-full py-3 rounded-xl border border-dashed border-border text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
            >
              <ChevronRight className="w-4 h-4 -rotate-90" />
              Show less
            </button>
          )}
        </div>
      </div>

      {/* Appointment Modal */}
      {showBooking && selectedDoctor && (
        <AppointmentModal
          doctor={selectedDoctor}
          onClose={() => {
            setShowBooking(false)
            setSelectedDoctor(null)
          }}
        />
      )}

      {/* Map Modal */}
      {showMap && (
        <MapModal doctor={showMap} onClose={() => setShowMap(null)} />
      )}
    </div>
  )
}

function DoctorCard({
  doctor,
  onViewProfile,
  onBook,
  onMessage,
  onMap,
}: {
  doctor: Doctor
  onViewProfile: () => void
  onBook: () => void
  onMessage: () => void
  onMap: () => void
}) {
  return (
    <div className="group p-4 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-md transition-all">
      {/* Clickable top section → profile */}
      <button onClick={onViewProfile} className="w-full text-left">
        <div className="flex items-start gap-3">
          {/* Doctor Avatar */}
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0 group-hover:bg-primary/15 transition-colors">
            {doctor.name.split(" ").slice(1).map((n: string) => n[0]).join("")}
          </div>

          {/* Doctor Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">{doctor.name}</h3>
                <p className="text-xs text-primary font-medium mt-0.5">{doctor.specialty}</p>
              </div>
              {doctor.availableToday && (
                <span className="shrink-0 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  Today
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1.5 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Navigation className="w-3 h-3" />
                {doctor.distance} km
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                {doctor.rating} ({doctor.reviews})
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {doctor.nextAvailable}
              </span>
            </div>

            <p className="flex items-center gap-1 mt-1 text-[11px] text-muted-foreground">
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{doctor.clinicLocation}</span>
            </p>
          </div>

          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
        </div>
      </button>

      {/* Actions row - full width on mobile */}
      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/60">
        <button
          onClick={onMessage}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Message
        </button>
        <button
          onClick={onBook}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <CalendarPlus className="w-3.5 h-3.5" />
          Book
        </button>
        <button
          onClick={onMap}
          className="flex items-center justify-center w-9 h-9 rounded-xl border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors shrink-0"
          aria-label="View on map"
        >
          <MapPin className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}

function MapModal({ doctor, onClose }: { doctor: Doctor; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={onClose}>
      <div
        className="w-full max-w-lg bg-card rounded-2xl border border-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h3 className="text-base font-semibold text-foreground">{doctor.name}</h3>
            <p className="text-sm text-muted-foreground">{doctor.clinicLocation}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground"
          >
            X
          </button>
        </div>
        <div className="aspect-video bg-secondary flex items-center justify-center">
          <iframe
            title={`Map to ${doctor.name}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(doctor.clinicLocation + " Morocco")}&zoom=15`}
            allowFullScreen
          />
        </div>
        <div className="p-4">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(doctor.clinicLocation + " Morocco")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-accent transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  )
}
